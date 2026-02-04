import { Categories } from "@/types";

interface Props {
  category: (typeof Categories)[number];
}

export const CategoryListItem = ({ category }: Props) => {
  return <li>{category}</li>;
};
