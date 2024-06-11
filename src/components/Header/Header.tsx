import { useTranslation } from "react-i18next";
import { Socials, Contacts, Button, Switcher, Logo, Languages, MobileMenu } from "components";
import { useMatchMedia } from "hooks";
import { useState } from "react";
import classNames from "classnames";

export default function Header() {
    const [active, setActive] = useState(false);
    const { isMobile, isTablet, isDesktop } = useMatchMedia();
    const { t } = useTranslation();

    return (
        <div className="py-[30px] bg-[#111112] md:py-[28px] sm:py-5 sm:relative">
            <div className="container flex justify-between items-center">
                <Logo />
                {isDesktop && <Switcher text={t("Switcher")} />}
                {!isMobile && <Contacts className="gap-[50px] lg:[&>li:first-child]:hidden" />}
                {isDesktop && <Socials />}
                {!isMobile && <Button text={t("CallMeBack")} className="bg-button shadow-[inset_0px_0px_0px_100vw_#111112]" />}
                {isDesktop && <Languages />}
                {!isDesktop && (
                    <div className="mobileMenuOpen relative sm:static">
                        <button
                            onClick={() => {
                                setActive((prev) => !prev);
                            }}
                            className="flex"
                        >
                            <img src="images/menu.svg" alt="" width="18px" height="6px" className={classNames(active ? "sm:hidden" : "sm:block")} />
                            <img src="images/close.svg" alt="" width="12px" height="12px" className={classNames("hidden", active ? "sm:block" : "sm:hidden")} />
                        </button>
                        <MobileMenu active={active} setActive={setActive} />
                    </div>
                )}
            </div>
        </div>
    );
}
