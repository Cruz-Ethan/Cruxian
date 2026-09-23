import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class IterTupleTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a tuple from iterable <code> iter </code>.</pre>,
            <code>tuple(iter)</code>
        )
    }
}