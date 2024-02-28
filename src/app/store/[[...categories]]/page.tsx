import { ProductsWrapper } from "app/components/Store/ProductWrapper";
import { getProducts } from "app/services/shopify";


interface CategoriesProps {
  params: {
    categories: string[];
    searchParams?: string
  }
}

export default async function Category(props: CategoriesProps) {
  const products = await getProducts();
  const { categories } = props.params;
  // throw new Error('Boom')
  return (
    <ProductsWrapper products={products} />
  );
}