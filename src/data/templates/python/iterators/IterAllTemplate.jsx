import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class IterAllTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Check if all elements in iterable <code> iter </code> are truthy.</pre>,
            <code>all(iter)</code>
        )
    }
}