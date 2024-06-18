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
        <div className="md:-mx-[28px] sm:-mx-[20px]">
            <div className="md:overflow-auto md:px-[28px] sm:px-[20px]">
                <ul
                    className={classNames(
                        "text-[18px] leading-[29px] text-white flex flex-wrap justify-center gap-[2px] py-[10px] px-3 border-transparent bg-origin-border rounded-[33px] border w-max mx-auto bg-button shadow-[inset_0px_0px_0px_100vw_#111112] sm:text-[16px]",
                        className,
                    )}
                >
                    {list.map((item, index) => (
                        <li
                            className={classNames(
                                "py-2 px-2 rounded-[33px] cursor-pointer text-nowrap w-[228px] text-center md:w-[180px] sm:w-[147px]",
                                activeTab === index && "bg-tab cursor-default",
                            )}
                            key={index}
                            onClick={() => {
                                setActiveTab(index);
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
