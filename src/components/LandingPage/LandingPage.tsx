import { Technologies, Project, Observer, VideoModal } from "components";
import { landingPageList } from "constants/";

export default function LandingPage() {
    const projects = [
        {
            img: "img-1.png",
            imgHover: "img-2.png",
            title: "Nika Lobanova",
            text: "Адаптивная верстка макета Nika Lobanova для персонального стилиста",
            href: "https://hillel1408.github.io/nika_lobanova/",
        },
        {
            img: "img-3.png",
            imgHover: "img-4.png",
            title: "Engineering company",
            text: "Адаптивная верстка макета Engineering company",
            href: "https://hillel1408.github.io/engineering-company/",
        },
        {
            img: "img-5.png",
            imgHover: "img-6.png",
            title: "Country houses",
            text: "Адаптивная верстка макета Country houses",
            href: "https://hillel1408.github.io/country-houses/",
        },
        {
            img: "img-7.png",
            imgHover: "img-8.png",
            title: "Apartments",
            text: "Адаптивная верстка макета Apartments",
            href: "https://hillel1408.github.io/-apartments/",
        },
        {
            img: "img-9.png",
            imgHover: "img-10.png",
            title: "Окунев Павел",
            text: "Адаптивная верстка макета Окунев Павел для стоматолога",
            href: "https://hillel1408.github.io/okunev_pavel/",
        },
        {
            img: "img-11.png",
            imgHover: "img-12.png",
            title: "Выкуп авто",
            text: "Адаптивная верстка макета Сar buyback",
            href: "https://hillel1408.github.io/car-buyback/",
        },
        {
            img: "img-13.png",
            imgHover: "img-14.png",
            title: "Малые этажи",
            text: "Адаптивная верстка макета Малые этажи",
            href: "https://daragan-media.com/verstka/front_2/",
        },
    ];

    return (
        <div className="flex flex-col gap-[70px]">
            <Technologies text="Валидная, кроссбраузерная верстка" list={landingPageList}></Technologies>
            <div className="grid gap-[66px] grid-cols-3">
                {projects.map((item, index) => (
                    <Observer key={index}>
                        <Project item={item} />
                    </Observer>
                ))}
            </div>
        </div>
    );
}
