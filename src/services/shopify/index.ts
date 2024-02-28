import { env } from "app/config/env";
import { shopyfyUrls  } from "./urls";

export const getProducts = async () => {
  try {
    const response = await fetch(shopyfyUrls.products.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN
      })
    });
    const { products } = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
}