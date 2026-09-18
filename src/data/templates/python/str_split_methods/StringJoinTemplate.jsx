import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringJoinTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Join an iterable <code> iter </code> with string <code> str </code>.</pre>,
            <code>str.join(iter)</code>
        )
    }
}