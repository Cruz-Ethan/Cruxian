import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class IterReversedTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a reversed iterator of iterable <code> iter </code>.</pre>,
            <code>reversed(iter)</code>
        )
    }
}