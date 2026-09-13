import Template from "../../../classes/Template.js"
import Problem from "../../../classes/Problem.js"

export default class ListAppendTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre class="whitespace-pre-wrap break-words">Add <code> elmnt </code> to the end of the list <code> lst </code>.</pre>,
            <code>lst.append(elmnt)</code>
        )
    }
}