import { useEffect } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Switcher, Languages, Button, Socials, Contacts } from "components";
import { useMatchMedia } from "hooks";

export default function MobileMenu({ active, setActive }: { active: boolean; setActive: (arg: (prev: boolean) => boolean) => void }) {
    const { t } = useTranslation();
    const { isMobile, isTablet, isDesktop } = useMatchMedia();

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
                "absolute sm:overflow-auto px-4 pb-[28px] pt-[13px] border duration-200 border-[#2b2b2d] rounded-[8px] right-0 top-0 bg-[#131316] z-20 w-[159px] flex flex-col translate-x-[14px] translate-y-[-16px] sm:translate-x-0 sm:translate-y-0 sm:w-full sm:top-[0] sm:rounded-none sm:border-none sm:h-[100vh] sm:bg-[#111112] sm:px-0 sm:py-0",
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
            <div className="sm:bg-[#131316] sm:py-5 sm:px-5 sm:border-b sm:border-[#2b2b2d]">
                <Switcher text={t("Switcher")} className="flex-row-reverse gap-3 [&>span]:text-[13px] mb-[30px] sm:flex-row sm:[&>span]:text-[16px]" />
                <Languages className="justify-end sm:justify-start" />
            </div>
            {isMobile && (
                <>
                    <div className="container pt-6">
                        <Button text={t("CallMeBack")} className="bg-button shadow-[inset_0px_0px_0px_100vw_#111112] w-full" />
                    </div>
                    <div className="container mt-auto py-11 flex flex-col gap-6">
                        <Socials />
                        <Contacts />
                    </div>
                </>
            )}
        </div>
    );
}
