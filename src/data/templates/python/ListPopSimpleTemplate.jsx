import Template from "../../../classes/Template.js"
import Problem from "../../../classes/Problem.js"

export default class ListPopSimpleTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre class="whitespace-pre-wrap break-words">Delete and return the last index of the list <code> lst </code>.</pre>,
            <code>lst.pop()</code>
        )
    }
}