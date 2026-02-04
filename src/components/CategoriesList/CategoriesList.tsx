import { Category } from "@/components/CategoriesList/Category/Category";
import { Categories } from "@/types";

export const CategoriesList = () => {
  return (
    <ul>
      {Categories.map((category) => (
        <Category key={category} category={category} />
      ))}
    </ul>
  );
};
