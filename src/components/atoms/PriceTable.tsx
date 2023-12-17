import { PriceTableItem } from './PriceTableItem';

interface PriceTableProps {
  title: string;
  items: Array<{ name: string; price: string }>;
}

export const PriceTable = (props: PriceTableProps) => {
  const { title, items } = props;

  return (
    <div className="flex flex-col gap-4 w-full lg:max-w-sm xl:max-w-lg">
      <h2 className="font-medium tracking-wide">{title}</h2>
      <div className="flex flex-col gap-2">
        {items.map((item, index: number) => {
          return (
            <PriceTableItem key={index} name={item.name} price={item.price} />
          );
        })}
      </div>
    </div>
  );
};
