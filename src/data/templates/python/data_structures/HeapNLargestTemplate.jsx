import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class HeapNLargestTemplate extends Template {
    generateProblem() {
        const n = randomInteger(3, 10)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get the {n} largest items from iterable <code> iter </code>.</pre>,
            <code>heapq.nlargest({n}, iter)</code>
        )
    }
}