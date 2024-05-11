export default function AboutMe() {
    return (
        <div className="bg-[#111112] pb-[145px] overflow-hidden">
            <div className="container">
                <h2 className="font-['Intro'] text-[32px] leading-[32px] text-white text-center mb-8">ПАРА СТРОК ОБО МНЕ</h2>
                <div className="max-w-[1080px] text-[18px] leading-[161%] text-[rgba(255,255,255,0.7)] text-center">
                    <p className="mb-6">
                        Привет! Я <span className="text-white font-bold">Дараган Максим</span>, программист из Санкт-Петербурга. С 2017 года я создаю сайты,
                        которые раскрыввают характер бизнеса и помогаем привлекать новых клиентов и партнеров с помощью контекстной и таргетированной рекламы.
                    </p>
                    <p>Моя цель — узнать бизнес и придумать идеальный способ рассказать о нем аудитории.</p>
                </div>
            </div>
            <div
                className="bg-about-me border border-[#2b2b2d] border-l-0 border-r-0 mt-[100px] pt-[55px] pb-[38px] bg-[rgba(35,38,57,0.1)] my-blur before:content-['']
                before:block before:h-[100px] before:w-[100%] before:border-[2px] before:border-white before:rounded-bl-[24px] relative before:border-r-0
                before:border-t-0 before:absolute before:-bottom-[42.3px] before:left-[calc(100vw/2-364px)]"
            >
                <div className="container">
                    <div className="max-w-[545px] ml-auto">
                        <h2 className="text-[32px] uppercase text-white font-['Intro'] mb-[32px]">как я работаю?</h2>
                        <ul className="text-[18px] leading-[161%] text-[rgba(255,255,255,0.7)] flex flex-col gap-[22px] [&>li>span]:text-white [&>li>span]:font-bold">
                            <li>
                                <span>Честно и прозрачно.</span> Разрабатываю план проекта, рассказываю о каждом этапе и объясняю, для чего он нужен,
                                согласовываю прототипы и дизайн-концепции.
                            </li>
                            <li>
                                <span>Вдумчиво.</span> Я не гонюсь за количеством и одновременно веду не более 3 крупных проектов — у меня всегда достаточно
                                ресурсов на каждого клиента.
                            </li>
                            <li>
                                <span>Профессионально.</span> Знаю и применяю современные инструменты проектирования, дизайна и продвижения, постоянно учусь и
                                повышаю квалификацию.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
