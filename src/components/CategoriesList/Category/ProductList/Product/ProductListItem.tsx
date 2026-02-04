import type {
  BaseComponent,
  Categories,
  CPU,
  GPU,
  Motherboard,
  PSU,
  RAM,
} from "@/types";

interface Props {
  product: BaseComponent;
  category: (typeof Categories)[number];
}

export const ProductListItem = ({ product, category }: Props) => {
  switch (category) {
    case "CPU": {
      const p = product as CPU;
      return <p>{`${p.name} ${p.cores} ${p.socket} ${p.price} ${p.tdp}`}</p>;
    }
    case "GPU": {
      const p = product as GPU;
      return <p>{`${p.name} ${p.price} ${p.suggestedPsu}`}</p>;
    }
    case "PSU": {
      const p = product as PSU;
      return <p>{`${p.name} ${p.price} ${p.wattage}`}</p>;
    }
    case "RAM": {
      const p = product as RAM;
      return <p>{`${p.name} ${p.price} ${p.capacity} ${p.ramType} `}</p>;
    }
    case "Motherboard": {
      const p = product as Motherboard;
      return <p>{`${p.name} ${p.ramType} ${p.socket} ${p.price}`}</p>;
    }
    default:
      return null;
  }
};
