import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class HeapNSmallestTemplate extends Template {
    generateProblem() {
        const n = randomInteger(3, 10)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get the {n} shortest strings from iterable <code> iter </code>.</pre>,
            <code>heapq.nsmallest({n}, iter, key=len)</code>
        )
    }
}