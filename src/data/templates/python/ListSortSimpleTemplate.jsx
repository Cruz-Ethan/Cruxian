import Template from "../../../classes/Template.js"
import Problem from "../../../classes/Problem.js"

export default class ListSortSimpleTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre class="whitespace-pre-wrap break-words">Sort the list <code> lst </code> in place.</pre>,
            <code>lst.sort()</code>
        )
    }
}