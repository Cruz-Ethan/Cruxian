import Template from "../../../classes/Template.js"
import Problem from "../../../classes/Problem.js"

export default class ListClearTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre class="whitespace-pre-wrap break-words">Delete all elements from the list <code> lst </code>.</pre>,
            <code>lst.clear()</code>
        )
    }
}