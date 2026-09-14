import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ListCopyTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a shallow copy of the list <code> lst </code>.</pre>,
            <code>lst.copy()</code>
        )
    }
}