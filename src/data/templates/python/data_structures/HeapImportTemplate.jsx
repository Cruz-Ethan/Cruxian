import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class HeapImportTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Import the module for heaps.</pre>,
            <code>import heapq</code>
        )
    }
}