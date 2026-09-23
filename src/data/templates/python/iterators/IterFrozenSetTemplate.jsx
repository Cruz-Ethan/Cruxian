import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class IterFrozenSetTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return an immutable set from iterable <code> iter </code>.</pre>,
            <code>frozenset(iter)</code>
        )
    }
}