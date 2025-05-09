export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center lg:mt-16">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-orange-300 to-orange-400 text-transparent bg-clip-text text-center">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mt-6 text-secondary">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-secondary/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
