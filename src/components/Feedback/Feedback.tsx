import { useTranslation } from "react-i18next";
import { SecondaryButton } from "components";

export default function Feedback() {
    const { t } = useTranslation();

    return (
        <div className="bg-[#111112] pb-[100px]">
            <div className="container">
                <div className="relative overflow-hidden">
                    <div className="border border-white rounded-[37px] bg-[rgba(35,38,57,0.1)] py-20 px-[103px] z-10 relative">
                        <h2 className="font-['Intro'] text-[32px] uppercase text-white text-center mb-[10px]">{t("DiscussAProject")}</h2>
                        <p className="text-[18px] leading-[161%] text-center text-white mb-[56px]">{t("LeaveYourContact")}</p>
                        <div className="grid grid-cols-3 gap-6">
                            <input
                                type="text"
                                placeholder={t("Name")}
                                className="border border-white rounded-[32px] bg-[rgba(255,255,255,0.06)] opacity-90 h-[57px] px-6 placeholder:text-[16px]
                              placeholder:text-white placeholder:opacity-70 text-[16px] text-white"
                            />
                            <input
                                type="tel"
                                placeholder={t("PhoneNumber")}
                                className="border border-white rounded-[32px] bg-[rgba(255,255,255,0.06)] opacity-90 h-[57px] px-6 placeholder:text-[16px]
                              placeholder:text-white placeholder:opacity-70 text-[16px] text-white"
                            />
                            <SecondaryButton text={t("Send")} />
                        </div>
                    </div>
                    <img src="images/bg-1.svg" width="343" height="270" alt="" className="my-blur absolute top-[30px] left-[74px]" />
                </div>
            </div>
        </div>
    );
}
