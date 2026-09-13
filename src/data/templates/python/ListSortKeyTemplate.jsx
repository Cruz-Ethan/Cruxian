import Template from "../../../classes/Template.js"
import Problem from "../../../classes/Problem.js"

export default class ListSortKeyTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre class="whitespace-pre-wrap break-words">Sort the list of coordinates <code> lst </code> in place by their y-position.</pre>,
            <code>lst.sort(key=lambda x: x[1])</code>
        )
    }
}