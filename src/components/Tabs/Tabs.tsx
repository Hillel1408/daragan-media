import classNames from "classnames";

export default function Tabs({
    list,
    activeTab,
    setActiveTab,
    className,
}: {
    list: string[];
    activeTab: number;
    setActiveTab: (arg: number) => void;
    className?: string;
}) {
    return (
        <ul
            className={classNames(
                "text-[18px] leading-[29px] text-white flex justify-center gap-[2px] py-[10px] px-3 border-transparent bg-origin-border rounded-[33px] border w-max mx-auto bg-button shadow-[inset_0px_0px_0px_100vw_#111112]",
                className,
            )}
        >
            {list.map((item, index) => (
                <li
                    className={classNames("py-2 px-8 rounded-[33px] cursor-pointer w-[228px] text-center", activeTab === index && "bg-tab cursor-default")}
                    key={index}
                    onClick={() => {
                        setActiveTab(index);
                    }}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}
