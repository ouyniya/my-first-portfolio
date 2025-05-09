import { Toggle } from "@/components/Toggle";

const MENU = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#project",
  },
  {
    title: "Contact Me",
    href: "#contact",
  },
];

type ToggleProps = {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
};

export const Navbar: React.FC<ToggleProps> = ({ isChecked, setIsChecked }) => {
  return (
    <div className="container flex items-center justify-between w-full">
      {/* logo */}
      <div className="basis-1/3 w-full flex items-center">
        <a href="#">
          <p className="font-serif text-xl">
            <span className="text-orange-300">{`<Nys`}</span>
            <span>{`Dev />`}</span>
          </p>
        </a>
      </div>

      {/* Menu */}
      <div className="basis-1/3 w-full flex items-center justify-center">
        <ul className="flex gap-4 text-xl h-16 items-center">
          {MENU.map((item, index) => (
            <li key={index}>
              <div className="inline-flex">
                <div className="nav">
                  <a
                    href={item.href}
                    className="hover:text-orange-300 transition-all duration-500 text-[16px]"
                  >
                    {item.title}{" "}
                  </a>
                </div>

                {index !== MENU.length - 1 && (
                  <span className="text-orange-300 ml-4">&bull;</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Toggle */}
      <div className="basis-1/3 w-full flex items-center justify-end">
        <Toggle isChecked={isChecked} setIsChecked={setIsChecked} />
      </div>
    </div>
  );
};
