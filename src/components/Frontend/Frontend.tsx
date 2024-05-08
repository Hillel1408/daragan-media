import { Technologies, Project } from "components";

export default function Frontend() {
    const list = [
        { icon: "React.svg", text: "React", width: "", height: "" },
        { icon: "NextJS.svg", text: "NextJS", width: "", height: "" },
        { icon: "TypeScript.svg", text: "TypeScript", width: "", height: "" },
        { icon: "ReduxToolkit.svg", text: "Redux Toolkit", width: "", height: "" },
        { icon: "ReactHookForm.svg", text: "React Hook Form", width: "", height: "" },
        { icon: "ESLint.svg", text: "ESLint", width: "", height: "" },
        { icon: "Prettier.svg", text: "Prettier", width: "", height: "" },
        { icon: "ReactSpring.svg", text: "React Spring", width: "", height: "" },
        { icon: "RTKQuery.svg", text: "RTK Query", width: "", height: "" },
    ];

    return (
        <div className="flex flex-col gap-[70px]">
            <Technologies text="Валидная, кроссбраузерная верстка" list={list}></Technologies>
            <div className="grid gap-[66px] grid-cols-3"></div>
        </div>
    );
}
