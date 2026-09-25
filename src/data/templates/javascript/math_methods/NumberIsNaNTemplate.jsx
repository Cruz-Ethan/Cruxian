import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class NumberIsNaNTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Check if the number "num" is NaN.</pre>,
            <code>Number.isNan(num)</code>
        )
    }
}