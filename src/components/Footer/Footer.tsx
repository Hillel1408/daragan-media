import { useTranslation } from "react-i18next";
import { Logo, Socials, Contacts } from "components";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div className="pt-[65px] pb-[100px] bg-[#18181a] md:py-11 sm:pt-[30px] sm:pb-[30px]">
            <div className="container">
                <div className="flex justify-between">
                    <Logo />
                    <Socials className="hidden xl:flex" />
                </div>
                <div className="mt-10 flex justify-between items-start gap-5 md:mt-[30px] md:grid md:grid-cols-[1fr_1fr] md:gap-6 sm:grid-cols-[1fr]">
                    <Contacts className="gap-4 flex-col" />
                    <ul className="text-[18px] leading-[29px] opacity-70 text-white -translate-y-[6.5px] md:-order-1 sm:text-[16px]">
                        <li>{t("IP")}</li>
                        <li>{t("RequestsAccepted")}</li>
                    </ul>
                    <ul className="text-[18px] leading-[29px] opacity-70 text-white -translate-y-[6.5px] sm:text-[16px]">
                        <li>{t("OGRNIP")}: 315312300009831</li>
                        <li>{t("INN")}: 312335235806</li>
                    </ul>
                    <Socials className="xl:hidden" />
                </div>
            </div>
        </div>
    );
}
