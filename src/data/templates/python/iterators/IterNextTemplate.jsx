import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class IterNextTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return the next value of iterator <code> iter </code>.</pre>,
            <code>next(iter)</code>
        )
    }
}