import Template from "../../../classes/Template.js"
import Problem from "../../../classes/Problem.js"

export default class ListRemoveTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre class="whitespace-pre-wrap break-words">Delete <code> elmnt </code> from the list <code> lst </code>.</pre>,
            <code>lst.remove(elmnt)</code>
        )
    }
}