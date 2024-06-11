import { useState } from "react";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import classNames from "classnames";

export default function Languages({ className }: { className?: string }) {
    const currentLanguageCode = cookies.get("i18next") || "en";
    const [activeLanguage, setActiveLanguage] = useState(currentLanguageCode);

    const { i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        setActiveLanguage(language);
        i18n.changeLanguage(language);
    };

    const languages = ["ru", "en"];
    return (
        <div className={classNames("text-white flex gap-2 text-[15px] font-light md:gap-[17px]", className)}>
            {languages.map((item, index) => (
                <button
                    key={index}
                    className={classNames(
                        item !== activeLanguage ? "opacity-50" : "md:bg-[#0d0d0d] md:w-[25px] md:h-[25px] md:rounded-[6px] sm:w-[33px] sm:h-[33px]",
                    )}
                    onClick={() => {
                        changeLanguage(item);
                    }}
                >
                    {item}
                </button>
            ))}
        </div>
    );
}
