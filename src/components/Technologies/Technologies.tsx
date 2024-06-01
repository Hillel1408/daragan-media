import { useTranslation } from "react-i18next";

export default function Technologies({ text, list }: { text: string; list: { text: string; icon: string; width: string; height: string }[] }) {
    const { t } = useTranslation();

    return (
        <div className="border border-[#2b2b2d] rounded-[37px] py-[43px] px-[35px] bg-[rgba(35,38,57,0.1)]">
            <p className="text-[20px] leading-[145%] text-white mb-1 text-center">{t("Technologies")}</p>
            <p className="text-[17px] leading-[171%] text-white opacity-70 text-center mb-8">{text}</p>
            <ul className="text-[13px] leading-[223%] text-white flex gap-[33px] justify-center">
                {list.map((item, index) => (
                    <li key={index} className="flex flex-col w-max items-center gap-4">
                        <div className="min-h-[35px] flex items-center">
                            <img src={`images/${item.icon}`} width={item.width} height={item.height} alt="" />
                        </div>
                        <span className="opacity-70">{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
