import classNames from "classnames";
import { useState } from "react";

export default function Switcher({ text }: { text: string }) {
    const [active, setActive] = useState(true);

    return (
        <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => {
                setActive((prev) => !prev);
            }}
        >
            <div className="bg-switcher w-[22px] h-[12px] rounded-[17px]">
                <svg
                    width="11"
                    height="11"
                    fill="none"
                    className={classNames("translate-y-[0.3px] duration-200", active ? "translate-x-[11px]" : "translate-x-[1px]")}
                >
                    <circle cx="5.08398" cy="5.68555" r="5" fill="url(#paint0_linear_214_2228)" />
                    <circle cx="5.08398" cy="5.68555" r="4.5" stroke="white" stroke-opacity="0.38" />
                    <defs>
                        <linearGradient id="paint0_linear_214_2228" x1="0.0839844" y1="5.68555" x2="13.6879" y2="5.87242" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#6E46E5" />
                            <stop offset="0.455" stop-color="#194EC4" />
                            <stop offset="1" stop-color="#1CF9EF" stop-opacity="0.9" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <span className="text-[11px] text-white opacity-[0.7] font-light">{text}</span>
        </div>
    );
}
