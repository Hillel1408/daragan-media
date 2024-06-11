import { useEffect } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Switcher, Languages } from "components";

export default function MobileMenu({ active, setActive }: { active: boolean; setActive: (arg: (prev: boolean) => boolean) => void }) {
    const { t } = useTranslation();

    const clickHandler = (e: any) => {
        if (!e.target.closest(".mobileMenuOpen")) setActive((prev) => !prev);
    };

    useEffect(() => {
        window.addEventListener("click", clickHandler);
        return () => {
            window.removeEventListener("click", clickHandler);
        };
    }, []);

    return (
        <div
            className={classNames(
                "absolute px-4 pb-[28px] pt-[13px] border duration-200 border-[#2b2b2d] rounded-[8px] right-0 top-0 bg-[#131316] z-10 w-[156px] flex flex-col translate-x-[14px] translate-y-[-10px] sm:translate-x-0 sm:translate-y-0 sm:w-full sm:top-[72px] sm:rounded-none sm:border-none sm:h-[calc(100vh-72px)] sm:bg-[#111112] sm:px-0",
                active ? "opacity-100 visible" : "opacity-0 invisible",
            )}
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <button
                onClick={() => {
                    setActive((prev) => !prev);
                }}
                className="ml-auto mb-[26px] sm:hidden"
            >
                <img src="images/close.svg" alt="" width="12px" height="12px" />
            </button>
            <div className="sm:bg-[#131316] sm:py-5 sm:px-4 border-t border-b border-[#2b2b2d]">
                <Switcher text={t("Switcher")} className="flex-row-reverse gap-3 [&>span]:text-[13px] mb-[30px] sm:flex-row sm:[&>span]:text-[16px]" />
                <Languages className="ml-auto" />
            </div>
        </div>
    );
}
