import Template from "../../../classes/Template.js"
import Problem from "../../../classes/Problem.js"

export default class ListCountTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre class="whitespace-pre-wrap break-words">Return the number of occurences of <code> elmnt </code> in the list <code> lst </code>.</pre>,
            <code>lst.count(elmnt)</code>
        )
    }
}