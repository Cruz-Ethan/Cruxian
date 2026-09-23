import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class IterSetTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a set from iterable <code> iter </code>.</pre>,
            <code>set(iter)</code>
        )
    }
}