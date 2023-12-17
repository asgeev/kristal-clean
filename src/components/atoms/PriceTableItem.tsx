interface PriceTableItemProps {
  name: string;
  price: string;
}

export const PriceTableItem = (props: PriceTableItemProps) => {
  const { name, price } = props;

  return (
    <div className="flex flex-row justify-between gap-4">
      <p className="break-normal">{name}</p>
      <p className="whitespace-nowrap">{price}</p>
    </div>
  );
};
