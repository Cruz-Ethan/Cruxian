import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class IterListTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a list from iterable <code> iter </code>.</pre>,
            <code>list(iter)</code>
        )
    }
}