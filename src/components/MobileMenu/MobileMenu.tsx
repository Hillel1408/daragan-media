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
                "absolute px-4 pb-[28px] pt-[13px] border duration-200 border-[#2b2b2d] rounded-[8px] right-0 top-0 bg-[#131316] z-10 w-[156px] flex flex-col translate-x-[14px] translate-y-[-10px]",
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
                className="ml-auto mb-[26px]"
            >
                <img src="images/close.svg" alt="" width="12px" height="12px" />
            </button>
            <Switcher text={t("Switcher")} className="flex-row-reverse gap-3 [&>span]:text-[13px] mb-[30px]" />
            <Languages className="ml-auto" />
        </div>
    );
}
