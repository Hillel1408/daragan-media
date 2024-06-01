import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Tabs, LandingPage, Frontend, Website } from "components";

export default function MyWorks() {
    const [activeTab, setActiveTab] = useState(0);

    const { t } = useTranslation();

    const list = [t("LandingPages"), t("Websites"), "Frontend"];

    return (
        <div className="bg-[#111112] py-[100px]">
            <div className="container">
                <h2 className="font-['Intro'] text-[32px] leading-[32px] text-white text-center mb-8">{t("MyProjects")}</h2>
                <Tabs list={list} activeTab={activeTab} setActiveTab={setActiveTab} className="mb-[68px]" />
                {activeTab === 0 && <LandingPage />}
                {activeTab === 1 && <Website />}
                {activeTab === 2 && <Frontend />}
            </div>
        </div>
    );
}
