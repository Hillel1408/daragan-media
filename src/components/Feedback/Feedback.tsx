import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SecondaryButton } from "components";
import { sendMessage } from "api/telegram";

export default function Feedback() {
    const initialState = { name: "", phoneNumber: "" };

    const [values, setValues] = useState(initialState);

    const { t } = useTranslation();

    const onSubmit = async () => {
        try {
            const message = `Имя: ${values.name}, телефон: ${values.phoneNumber}`;
            await sendMessage(message);
            setValues(initialState);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="feedback bg-[#111112] pb-[100px] md:pb-20 sm:pb-[70px]">
            <div className="container md:px-0">
                <div className="relative overflow-hidden">
                    <div className="border border-white rounded-[37px] bg-[rgba(35,38,57,0.1)] py-20 px-[103px] z-10 relative lg:px-[18px] md:rounded-none md:border-l-0 md:border-r-0 sm:px-5 sm:py-[64px]">
                        <h2 className="font-['Intro'] text-[32px] uppercase text-white text-center mb-[10px] md:text-[30px] sm:text-[28px]">
                            {t("DiscussAProject")}
                        </h2>
                        <p className="text-[18px] leading-[161%] text-center text-white mb-[56px] md:text-[16px] md:mb-10 sm:mb-[35px]">
                            {t("LeaveYourContact")}
                        </p>
                        <div className="grid grid-cols-3 gap-6 md:gap-5 sm:grid-cols-1">
                            <input
                                type="text"
                                placeholder={t("Name")}
                                value={values.name}
                                onChange={(e) => {
                                    setValues({ ...values, name: e.target.value });
                                }}
                                className="border border-white rounded-[32px] bg-[rgba(255,255,255,0.06)] opacity-90 h-[57px] px-6 placeholder:text-[16px]
                              placeholder:text-white placeholder:opacity-70 text-[16px] text-white"
                            />
                            <input
                                type="tel"
                                placeholder={t("PhoneNumber")}
                                value={values.phoneNumber}
                                onChange={(e) => {
                                    setValues({ ...values, phoneNumber: e.target.value });
                                }}
                                className="border border-white rounded-[32px] bg-[rgba(255,255,255,0.06)] opacity-90 h-[57px] px-6 placeholder:text-[16px]
                              placeholder:text-white placeholder:opacity-70 text-[16px] text-white"
                            />
                            <SecondaryButton text={t("Send")} onClick={onSubmit} />
                        </div>
                    </div>
                    <img src="images/bg-1.svg" width="343" height="270" alt="" className="my-blur absolute top-[30px] left-[74px]" />
                </div>
            </div>
        </div>
    );
}
