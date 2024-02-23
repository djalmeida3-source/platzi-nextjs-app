interface CategoriesProps {
  params: {
    categories: string[];
    searchParams?: string
  }
}

export default function Category(props: CategoriesProps) {
  const { categories } = props.params;
  // throw new Error('Boom')
  return (
    <h1>Category dinamic: {categories}</h1>
  );
}