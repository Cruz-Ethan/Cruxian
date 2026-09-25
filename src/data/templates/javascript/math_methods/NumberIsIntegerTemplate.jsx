import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class NumberIsIntegerTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Check if the number "num" is an integer.</pre>,
            <code>Number.isInteger(num)</code>
        )
    }
}