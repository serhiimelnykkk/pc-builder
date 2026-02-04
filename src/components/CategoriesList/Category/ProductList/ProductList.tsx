import { CategoryApiUrls } from "@/api";
import { ProductListItem } from "@/components/CategoriesList/Category/ProductList/Product/ProductListItem";
import { Categories, type BaseComponent } from "@/types";
import { useEffect, useState } from "react";

interface Props {
  category: (typeof Categories)[number];
}

export const ProductList = ({ category }: Props) => {
  const [products, setProducts] = useState<BaseComponent[]>([]);

  useEffect(() => {
    const url = CategoryApiUrls[category];
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [category]);

  return (
    <div>
      {products.map((product) => (
        <ProductListItem
          key={product.id}
          product={product}
          category={category}
        />
      ))}
    </div>
  );
};
