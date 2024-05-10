import { SecondaryButton } from "components";

export default function Intro() {
    return (
        <div
            className="bg-[#111112] before:content-[''] before:block before:h-[77px] before:w-[68.4%] before:border-[2px] overflow-hidden
          before:border-white before:rounded-tr-[24px] before:border-l-0 before:border-b-0 before:absolute before:top-[61px] before:z-20
            relative border border-[#2b2b2d] border-l-0"
        >
            <div className="">
                <div className="bg-intro pt-[122px] pb-[90px] bg-[rgba(35,38,57,0.1)] my-blur relative z-10 pl-[calc(100vw/2-560px)] pr-[calc(100vw/2-560px)]">
                    <h1 className="font-['Intro'] text-[55px] leading-[136%] uppercase text-white mb-5">
                        Фронтенд <br /> разработка
                    </h1>
                    <p className="text-[18px] leading-[161%] text-[rgba(255,255,255,0.7)] mb-[38px]">
                        Опытный фронтенд разработчик с глубоким <br /> знанием HTML, CSS и JavaScript
                    </p>
                    <SecondaryButton text="Связаться со мной" className="w-[255px]" />
                </div>
                <img src="images/bg-2.svg" width="297" height="297" alt="" className="absolute left-0 top-[128px]" />
            </div>
        </div>
    );
}
