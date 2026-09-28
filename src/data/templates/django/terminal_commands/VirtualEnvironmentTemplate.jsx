import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class VirtualEnvironmentTemplate extends Template {
    generateProblem() {
        const env = randomElement(['env', 'venv', 'myenv'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a virtual environment called "{env}".</pre>,
            <code>python3 -m venv {env}</code>
        )
    }
}