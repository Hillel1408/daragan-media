import classNames from "classnames";

export default function Button({ text, className }: { text: string; className?: string }) {
    return (
        <button className={classNames("border-transparent bg-origin-border rounded-[33px] text-[15px] text-white font-bold py-[11px] px-5 border", className)}>
            {text}
        </button>
    );
}
