interface ButtonProps {
  children: string;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="mt-4 bg-gradient-to-r from-orange-400 to-orange-300 hover:bg-black text-primary text-sm font-extrabold py-2 px-4 border-b-4 border-[#5a2b0b] tracking-tight rounded-xl uppercase shadow hover:cursor-pointer hover:scale-105 duration-300">
      {children}
    </button>
  );
};
