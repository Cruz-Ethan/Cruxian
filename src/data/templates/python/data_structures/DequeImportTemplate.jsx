import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DequeImportTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Import the module for deque.</pre>,
            <code>from collections import deque</code>
        )
    }
}