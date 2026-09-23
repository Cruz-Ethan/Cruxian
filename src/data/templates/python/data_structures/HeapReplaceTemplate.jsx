import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class HeapReplaceTemplate extends Template {
    generateProblem() {
        const item = randomInteger(0, 50)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Delete and return the top item from heap <code> heap </code> and add {item}.</pre>,
            <code>heapq.heapreplace(heap, {item})</code>
        )
    }
}