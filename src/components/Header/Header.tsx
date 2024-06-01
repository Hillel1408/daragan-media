import { useState } from "react";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { Socials, Contacts, Button, Switcher, Logo } from "components";
import classNames from "classnames";

export default function Header() {
    const currentLanguageCode = cookies.get("i18next") || "en";
    const [activeLanguage, setActiveLanguage] = useState(currentLanguageCode);

    const { i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        setActiveLanguage(language);
        i18n.changeLanguage(language);
    };

    const languages = ["ru", "en"];

    const { t } = useTranslation();

    return (
        <div className="py-[30px] bg-[#111112]">
            <div className="container flex justify-between items-center">
                <Logo />
                <Switcher text={t("Switcher")} />
                <Contacts className="gap-[50px]" />
                <Socials />
                <Button text={t("CallMeBack")} className="bg-button shadow-[inset_0px_0px_0px_100vw_#111112]" />
                <div className="text-white flex gap-2 text-[15px] font-light">
                    {languages.map((item, index) => (
                        <button
                            key={index}
                            className={classNames(item !== activeLanguage && "opacity-50")}
                            onClick={() => {
                                changeLanguage(item);
                            }}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
