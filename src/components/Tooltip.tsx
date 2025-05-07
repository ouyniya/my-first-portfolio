import { PropsWithChildren } from "react";

function Tooltip({ text, children }: PropsWithChildren<{ text: string; }>) {
  return (
    <>
      <div className="group relative flex flex-col items-center justify-center max-w-max">
        {children}
        <div className="absolute left-1/2 top-10 al-auto mr-auto -translate-x-1/2 scale-0 transform rounded-md transition-all duration-500 px-3 py-2 text-xs group-hover:scale-100 min-w-max">
          <div className="flex flex-col items-center shadow-md">
            <div className="h-2 w-4 bg-orange-300"
            style={{
                clipPath: "polygon(50% 0, 100% 100%, 0 100%)"
            }}
            ></div>
            <div className="rounded bg-orange-300 p-2 text-center text-xs text-primary">{text}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Tooltip;
