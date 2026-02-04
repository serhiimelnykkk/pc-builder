import { CategoryListItem } from "@/components/CategoriesList/Category/CategoryListItem";
import { Categories } from "@/types";

export const CategoriesList = () => {
  return (
    <ul>
      {Categories.map((category) => (
        <CategoryListItem key={category} category={category} />
      ))}
    </ul>
  );
};
