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
      return (
        <ul
          className={`grid grid-cols-[minmax(150px,30%)_repeat(4,1fr)] gap-4 py-4 place-content-center border-b border-neutral-600`}
        >
          <li>{p.name}</li>
          <li>{p.cores}</li>
          <li>{p.socket}</li>
          <li>{p.tdp}</li>
          <li>{p.price}</li>
        </ul>
      );
    }
    case "GPU": {
      const p = product as GPU;
      return (
        <ul
          className={`grid grid-cols-[minmax(150px,30%)_repeat(2,1fr)] gap-4 py-4 place-content-center border-b border-neutral-600`}
        >
          <li>{p.name}</li>
          <li>{p.suggestedPsu}</li>
          <li>{p.price}</li>
        </ul>
      );
    }
    case "PSU": {
      const p = product as PSU;
      return (
        <ul
          className={`grid grid-cols-[minmax(150px,30%)_repeat(2,1fr)] gap-4 py-4 place-content-center border-b border-neutral-600`}
        >
          <li>{p.name}</li>
          <li>{p.wattage}</li>
          <li>{p.price}</li>
        </ul>
      );
    }
    case "RAM": {
      const p = product as RAM;
      return (
        <ul
          className={`grid grid-cols-[minmax(150px,30%)_repeat(3,1fr)] gap-4 py-4 place-content-center border-b border-neutral-600`}
        >
          <li>{p.name}</li>
          <li>{p.capacity}</li>
          <li>{p.ramType}</li>
          <li>{p.price}</li>
        </ul>
      );
    }
    case "Motherboard": {
      const p = product as Motherboard;
      return (
        <ul
          className={`grid grid-cols-[minmax(150px,30%)_repeat(3,1fr)] gap-4 py-4 place-content-center border-b border-neutral-600`}
        >
          <li>{p.name}</li>
          <li>{p.socket}</li>
          <li>{p.ramType}</li>
          <li>{p.price}</li>
        </ul>
      );
    }
    default:
      return null;
  }
};
