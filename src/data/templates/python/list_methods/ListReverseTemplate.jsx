import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ListReverseTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Reverse the list <code> lst </code> in place.</pre>,
            <code>lst.reverse()</code>
        )
    }
}