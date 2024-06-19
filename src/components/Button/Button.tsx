import classNames from "classnames";

export default function Button({ text, className, onClick }: { text: string; className?: string; onClick?: () => void }) {
    return (
        <button
            className={classNames(
                "border-transparent bg-origin-border rounded-[33px] text-[17px] text-white font-bold py-[11px] px-5 border md:text-[15px]",
                className,
            )}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
