import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SetClearTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Delete all elements from the set <code> set </code>.</pre>,
            <code>set.clear()</code>
        )
    }
}