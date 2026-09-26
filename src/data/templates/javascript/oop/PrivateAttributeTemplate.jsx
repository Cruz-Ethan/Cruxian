import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class PrivateFieldTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Declare a private field password.</pre>,
            <code>#password</code>
        )
    }
}