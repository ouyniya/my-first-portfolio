type ToggleProps = {
    isChecked: boolean;
    setIsChecked: (value: boolean) => void;
  };

export const Toggle: React.FC<ToggleProps> = ({ isChecked, setIsChecked }) => {

  return (
    <>
      <label
        htmlFor="check"
        className="flex bg-zinc-900/80 shadow-gray-950/35 shadow-xl relative w-12 h-6 rounded-full cursor-pointer border border-orange-300/35"
      >
        <input
          type="checkbox"
          id="check"
          className="sr-only peer"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <span className="w-2/5 h-4/5 absolute rounded-full left-0.5 top-0.5 peer-checked:left-6 transition-all duration-500 text-xs flex justify-center items-center">
        ⭐
        </span>
      </label>
    </>
  );
};
