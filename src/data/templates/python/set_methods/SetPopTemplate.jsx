import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SetPopTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Delete and return an arbitrary element of the set <code> set </code>.</pre>,
            <code>set.pop()</code>
        )
    }
}