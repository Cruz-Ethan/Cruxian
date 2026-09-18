import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringUpperTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Convert the string <code> str </code> to all uppercase.</pre>,
            <code>str.upper()</code>
        )
    }
}