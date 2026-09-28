import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class StartAppTemplate extends Template {
    generateProblem() {
        const app = randomElement(['blog', 'post', 'student', 'song', 'card'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a new app called "{app}".</pre>,
            <code>python3 manage.py startapp {app}</code>
        )
    }
}