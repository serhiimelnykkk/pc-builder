import { CategoryApiUrls } from "@/api";
import { ProductListItem } from "@/components/CategoriesList/Category/ProductList/Product/ProductListItem";
import { Categories, type BaseComponent } from "@/types";
import {
  Content,
  Header,
  Item,
  Root,
  Trigger,
} from "@radix-ui/react-accordion";
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
    <Root type="single" collapsible>
      <Item
        value={category}
        className="bg-neutral-900 text-neutral-100 p-4 border-b border-neutral-600"
      >
        <Header>
          <Trigger>{category}</Trigger>
        </Header>
        <Content>
          {products.map((product) => (
            <ProductListItem
              key={product.id}
              product={product}
              category={category}
            />
          ))}
        </Content>
      </Item>
    </Root>
  );
};
