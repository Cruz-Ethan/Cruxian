import { Link } from "react-router-dom"
import subjects from "./data/data.js"

export default function LeftSidebar({subjectName}) {
    return (
        <header className="col-span-2 bg-slate-900 text-lg text-slate-400 border-b-4 lg:border-r-4 border-b-slate-400 lg:border-r-slate-400 lg:relative lg:@container">
            <ul className="p-4 flex lg:flex-col items-stetch gap-2 text-lg lg:fixed overflow-x-auto lg:overflow-y-auto lg:h-screen lg:w-[100cqw]">
                {subjects.map(subject => (
                    <li key={subject.name} className="flex">
                        <Link to={`/problems/${subject.name}/${subject.topics[0].name}`} className={`rounded p-2 cursor-pointer flex-1 ${subject.name === subjectName ? "" : "hover:"}text-white transition duration-200`}>{subject.name}</Link>
                    </li>
                ))}
            </ul>
        </header>
    )
}