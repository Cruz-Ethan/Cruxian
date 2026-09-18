import { Link } from "react-router-dom"
import subjects from "./data/data.js"

export default function LeftSidebar({subjectName}) {
    return (
        <header className="col-span-2 bg-slate-900 text-lg text-slate-400 border-b-4 xl:border-r-4 border-b-slate-400 xl:border-r-slate-400 xl:relative xl:@container">
            <ul className="p-4 flex xl:flex-col items-stetch gap-2 text-lg xl:fixed overflow-x-auto xl:overflow-y-auto xl:h-screen xl:w-[100cqw]">
                {subjects.map(subject => (
                    <li key={subject.name} className="flex">
                        <Link to={`/problems/${subject.name}/${subject.topics[0].name}`} className={`truncate rounded p-2 cursor-pointer flex-1 ${subject.name === subjectName ? "" : "hover:"}text-white transition duration-200`}>{subject.name}</Link>
                    </li>
                ))}
            </ul>
        </header>
    )
}