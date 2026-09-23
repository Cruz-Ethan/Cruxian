import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class IterEnumerateStartTemplate extends Template {
    generateProblem() {
        const startIndex = randomInteger(1, 10)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return (index+{startIndex}, value) pairs for iterable <code> iter </code>.</pre>,
            <code>enumerate(iter, {startIndex})</code>
        )
    }
}