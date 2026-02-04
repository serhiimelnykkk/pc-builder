import { Categories } from "@/types";

interface Props {
  category: (typeof Categories)[number];
}

export const Category = ({ category }: Props) => {
  return <li>{category}</li>;
};
