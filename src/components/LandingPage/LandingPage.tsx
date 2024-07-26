import { useTranslation } from "react-i18next";
import { Technologies, Project, Observer } from "components";
import { landingPageList } from "constants/";

export default function LandingPage() {
    const { t } = useTranslation();

    const projects = [
        {
            img: "img-1.png",
            imgHover: "img-2.png",
            title: t("NikaLobanova1"),
            text: t("NikaLobanova2"),
            href: "https://hillel1408.github.io/nika_lobanova/",
        },
        {
            img: "img-3.png",
            imgHover: "img-4.png",
            title: t("EngineeringCompany1"),
            text: t("EngineeringCompany2"),
            href: "https://hillel1408.github.io/engineering-company/",
        },
        {
            img: "img-5.png",
            imgHover: "img-6.png",
            title: t("CountryHouses1"),
            text: t("CountryHouses2"),
            href: "https://hillel1408.github.io/country-houses/",
        },
        {
            img: "img-7.png",
            imgHover: "img-8.png",
            title: t("Apartments1"),
            text: t("Apartments2"),
            href: "https://hillel1408.github.io/-apartments/",
        },
        {
            img: "img-9.png",
            imgHover: "img-10.png",
            title: t("PavelOkunev1"),
            text: t("PavelOkunev2"),
            href: "https://hillel1408.github.io/okunev_pavel/",
        },
        {
            img: "img-11.png",
            imgHover: "img-12.png",
            title: t("CarBuyback1"),
            text: t("CarBuyback2"),
            href: "https://hillel1408.github.io/car-buyback/",
        },
        {
            img: "img-13.png",
            imgHover: "img-14.png",
            title: t("MalyeEtazhi1"),
            text: t("MalyeEtazhi2"),
            href: "https://daragan-media.com/verstka/front_2/",
        },
    ];

    return (
        <div className="flex flex-col gap-[70px] mt-[68px] md:mt-[36px] md:gap-[42px]">
            <Technologies text={t("Valid")} list={landingPageList}></Technologies>
            <div className="my-works grid gap-[66px] grid-cols-3 lg:grid-cols-2 md:gap-[30px] sm:grid-cols-1">
                {projects.map((item, index) => (
                    <Observer key={index}>
                        <Project item={item} />
                    </Observer>
                ))}
            </div>
        </div>
    );
}
