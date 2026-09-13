import Template from "../../../classes/Template.js"
import Problem from "../../../classes/Problem.js"

export default class ListExtendTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre class="whitespace-pre-wrap break-words">Add an iterable <code> iter </code> to the end of the list <code> lst </code>.</pre>,
            <code>lst.extend(iter)</code>
        )
    }
}