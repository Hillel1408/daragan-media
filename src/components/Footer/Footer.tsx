import { useTranslation } from "react-i18next";
import { Logo, Socials, Contacts } from "components";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div className="pt-[65px] pb-[100px] bg-[#18181A]">
            <div className="container">
                <Logo />
                <div className="mt-10 flex justify-between items-start gap-5">
                    <Contacts className="gap-4 flex-col" />
                    <ul className="text-[18px] leading-[29px] opacity-70 text-white -translate-y-[6.5px]">
                        <li>{t("IP")}</li>
                        <li>{t("RequestsAccepted")}</li>
                    </ul>
                    <ul className="text-[18px] leading-[29px] opacity-70 text-white -translate-y-[6.5px]">
                        <li>{t("OGRNIP")}: 315312300009831</li>
                        <li>{t("INN")}: 312335235806</li>
                    </ul>
                    <Socials />
                </div>
            </div>
        </div>
    );
}
