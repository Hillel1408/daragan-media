import { SecondaryButton, Button } from "components";

export default function Reviews() {
    return (
        <div className="bg-[#111112] pb-[100px] pt-[36px]">
            <div className="pl-[calc(100vw/2-560px)]">
                <span className="bg-text font-['Intro'] text-[64px] uppercase">30+</span>
                <h2 className="text-[32px] font-['Intro'] uppercase text-white mt-[11px] mb-[28px]">положительных отзывов</h2>
                <p className="max-w-[386px] text-[18px] leading-[161%] text-[rgba(255,255,255,0.7)]">
                    Ознакомиться с отзывами можно на сайтах <span className="text-white">fl.ru и freelance.habr.com</span>
                </p>
                <div className="mt-[46px] grid grid-cols-[195px_294px] gap-[15px]">
                    <SecondaryButton text="Отзывы на fl.ru" />
                    <Button text="Отзывы на freelance.habr.com" className="bg-button shadow-[inset_0px_0px_0px_100vw_#111112]" />
                </div>
            </div>
        </div>
    );
}
