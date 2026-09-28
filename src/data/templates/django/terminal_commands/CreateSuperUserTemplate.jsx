import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class CreateSuperUserTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a new admin.</pre>,
            <code>python3 manage.py createsuperuser</code>
        )
    }
}