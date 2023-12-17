interface SectionProps {
  id: string;
  children: React.ReactNode;
}

export const Section = (props: SectionProps) => {
  const { id, children } = props;
  return (
    <div id={id} className="scroll-smooth flex flex-col gap-12 py-12">
      {children}
    </div>
  );
};
