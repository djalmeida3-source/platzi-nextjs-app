interface CategoriesProps {
  params: {
    categories: string[];
    searchParams?: string
  }
}

export default function Category(props: CategoriesProps) {
  const { categories } = props.params;
  console.log(categories);
  console.log(props);
  
  
  return (
    <h1>Category dinamic: {categories}</h1>
  );
}