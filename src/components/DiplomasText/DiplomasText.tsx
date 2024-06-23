export default function DiplomasText({ text1, text2 }: { text1: string; text2: string }) {
    return (
        <>
            <p className="mt-[30px] pl-[30px] text-[20px] leading-[145%] flex flex-col md:text-[18px] md:pl-0 md:mt-0 sm:text-[16px]">
                <span className="text-white">{text1}</span>
                <span className="text-[rgba(255,255,255,0.7)]">{text2}</span>
            </p>
            <div className="rounded-bl-[24px] border-b-[2px] border-l-[2px] pb-11 md:border-l-0 md:pb-[1px] md:rounded-bl-none md:-mx-[28px] sm:-mx-5"></div>
        </>
    );
}
