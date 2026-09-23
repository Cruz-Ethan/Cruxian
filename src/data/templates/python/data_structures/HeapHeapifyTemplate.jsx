import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class HeapHeapifyTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a min-heap from list <code> lst </code>.</pre>,
            <code>heapq.heapify(lst)</code>
        )
    }
}