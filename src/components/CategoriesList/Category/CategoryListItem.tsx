import { ProductList } from "@/components/CategoriesList/Category/ProductList/ProductList";
import { Categories } from "@/types";

interface Props {
  category: (typeof Categories)[number];
}

export const CategoryListItem = ({ category }: Props) => {
  return (
    <li>
      <span>{category}</span>
      <ProductList category={category} />
    </li>
  );
};
