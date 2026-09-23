import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class IterIterTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return the iterator of iterable <code> iter </code>.</pre>,
            <code>iter(iter)</code>
        )
    }
}