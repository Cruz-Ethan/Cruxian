import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class NumberNaNTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Set "num" to NaN.</pre>,
            <code>num = Number.NaN</code>
        )
    }
}