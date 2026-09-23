import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class HeapPopErrorTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if <code> heapq.pop([]) </code> is called?</pre>,
            <code>IndexError</code>
        )
    }
}