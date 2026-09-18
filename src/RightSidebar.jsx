import { Link } from "react-router-dom"
import subjects from "./data/data.js"

export default function RightSidebar({subjectName, topicName}) {
    const subject = subjects.find(subject => subject.name === subjectName)
    return (
        <nav className="col-span-2 bg-slate-100 border-b-4 xl:border-r-4 border-b-slate-200 xl:border-r-slate-200 xl:@container xl:relative">
            <ul className="p-4 flex xl:flex-col items-stetch gap-2 text-lg xl:fixed overflow-x-auto xl:overflow-y-auto xl:h-screen xl:w-[100cqw] text-nowrap">
                {subject.topics.map(topic =>(
                    <li key={topic.name} className="flex">
                        <Link to={`/problems/${subjectName}/${topic.name}`} className={`truncate rounded py-2 px-4 cursor-pointer flex-1 ${topic.name === topicName ? "bg-purple-400" : "hover:bg-slate-200"} transition duration-200`}>{topic.name}</Link>
                    </li>)
                )}
            </ul>
        </nav>
    )
}