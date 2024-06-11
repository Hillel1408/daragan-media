import classNames from "classnames";
import { useState } from "react";

export default function Switcher({ text, className }: { text: string; className?: string }) {
    const [active, setActive] = useState(true);

    return (
        <div
            className={classNames("flex items-center gap-1 cursor-pointer", className)}
            onClick={() => {
                setActive((prev) => !prev);
            }}
        >
            <div className="bg-switcher w-[22px] h-[12px] rounded-[17px] md:w-[37px] md:h-[19px]">
                <div className={classNames("translate-y-[0.3px] duration-200", active ? "translate-x-[11px] md:translate-x-[17.6px]" : "translate-x-[1px]")}>
                    <img src="images/circle.svg" alt="" width="11px" height="11px" className="md:hidden" />
                    <img src="images/big-circle.svg" alt="" width="18px" height="18px" className="hidden md:block" />
                </div>
            </div>
            <span className="text-[11px] text-white opacity-[0.7] font-light">{text}</span>
        </div>
    );
}
