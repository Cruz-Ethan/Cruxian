import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class StartProjectTemplate extends Template {
    generateProblem() {
        const project = randomElement(['api', 'backend'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a new project called "{project}".</pre>,
            <code>django-admin startproject {project} .</code>
        )
    }
}