import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class IterRangeErrorTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call range with step=0?</pre>,
            <code>ValueError</code>
        )
    }
}