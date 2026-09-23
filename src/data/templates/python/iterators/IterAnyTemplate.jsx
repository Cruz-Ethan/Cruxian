import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class IterAnyTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Check if there is a truthy element in iterable <code> iter </code>.</pre>,
            <code>any(iter)</code>
        )
    }
}