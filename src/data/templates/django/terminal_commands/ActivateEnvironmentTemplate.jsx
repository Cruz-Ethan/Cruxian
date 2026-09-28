import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class ActivateEnvironmentTemplate extends Template {
    generateProblem() {
        const env = randomElement(['env', 'venv', 'myenv'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Start the virtual environment called "{env}".</pre>,
            <code>source {env}/bin/activate</code>
        )
    }
}