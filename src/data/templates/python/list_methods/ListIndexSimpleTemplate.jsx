import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ListIndexSimpleTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return the first index of <code> elmnt </code> in the list <code> lst </code>.</pre>,
            <code>lst.index(elmnt)</code>
        )
    }
}