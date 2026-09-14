import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ListSortReverseTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Sort the list <code> lst </code> in place in reverse order.</pre>,
            <code>lst.sort(reverse=True)</code>
        )
    }
}