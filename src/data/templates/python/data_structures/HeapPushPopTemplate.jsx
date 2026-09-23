import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class HeapPushPopTemplate extends Template {
    generateProblem() {
        const item = randomInteger(0, 50)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Add {item} onto the heap <code> heap </code>, then delete and return the top item.</pre>,
            <code>heapq.heappushpop(heap, {item})</code>
        )
    }
}