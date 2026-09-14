import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SetCopyTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a shallow copy of the set <code> set </code>.</pre>,
            <code>set.copy()</code>
        )
    }
}