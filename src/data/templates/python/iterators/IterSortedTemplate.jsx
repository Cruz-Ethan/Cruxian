import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class IterSortedTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a sorted list of iterable <code> iter </code>.</pre>,
            <code>sorted(iter)</code>
        )
    }
}