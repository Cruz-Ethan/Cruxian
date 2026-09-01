import { Link } from "react-router-dom"
import subjects from "./data/data.js"

export default function RightSidebar({subjectName, topicName}) {
    const subject = subjects.find(subject => subject.name === subjectName)
    return (
        <nav className="col-span-2 bg-slate-100 border-b-4 lg:border-r-4 border-b-slate-200 lg:border-r-slate-200 lg:@container lg:relative">
            <ul className="p-4 flex lg:flex-col items-stetch gap-2 text-lg lg:fixed overflow-x-auto lg:overflow-y-auto lg:h-screen lg:w-[100cqw] text-nowrap">
                {subject.topics.map(topic =>(
                    <li key={topic.name} className="flex">
                        <Link to={`/problems/${subjectName}/${topic.name}`} className={`rounded py-2 px-4 cursor-pointer flex-1 ${topic.name === topicName ? "bg-purple-400" : "hover:bg-slate-200"} transition duration-200`}>{topic.name}</Link>
                    </li>)
                )}
            </ul>
        </nav>
    )
}