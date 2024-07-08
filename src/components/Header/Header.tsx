import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Socials, Contacts, Button, Switcher, Logo, Languages, MobileMenu } from "components";
import { useMatchMedia } from "hooks";
import classNames from "classnames";
import scrollLock from "scroll-lock";

export default function Header() {
    const [activeMenu, setActiveMenu] = useState(false);
    const { isMobile, isTablet, isDesktop } = useMatchMedia();
    const { t } = useTranslation();

    return (
        <div className="py-[30px] bg-[#111112] min-w-[320px] md:py-[28px] sm:py-5 sm:relative sm:border-b sm:border-[#2b2b2d]">
            <div className="container flex justify-between items-center">
                <Logo />
                {isDesktop && <Switcher text={t("Switcher")} />}
                {!isMobile && <Contacts className="gap-[50px] lg:[&>li:first-child]:hidden" />}
                {isDesktop && <Socials />}
                {!isMobile && (
                    <Button
                        text={t("CallMeBack")}
                        className="bg-button shadow-[inset_0px_0px_0px_100vw_#111112]"
                        onClick={() => {
                            document.querySelector(".feedback")?.scrollIntoView({ block: "center", behavior: "smooth" });
                        }}
                    />
                )}
                {isDesktop && <Languages />}
                {!isDesktop && (
                    <div className="mobileMenuOpen relative sm:static">
                        <button
                            onClick={() => {
                                setActiveMenu((prev) => !prev);
                                if (isMobile) {
                                    activeMenu ? scrollLock.enablePageScroll() : scrollLock.disablePageScroll();
                                }
                            }}
                            className="flex"
                        >
                            <img src="images/menu.svg" alt="" width="18px" height="6px" className={classNames(activeMenu ? "sm:hidden" : "sm:block")} />
                            <img
                                src="images/close.svg"
                                alt=""
                                width="12px"
                                height="12px"
                                className={classNames("hidden", activeMenu ? "sm:block" : "sm:hidden")}
                            />
                        </button>
                        <MobileMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                    </div>
                )}
            </div>
        </div>
    );
}
