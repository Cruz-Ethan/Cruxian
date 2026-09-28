import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class RunServerTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Start the django server.</pre>,
            <code>python3 manage.py runserver</code>
        )
    }
}