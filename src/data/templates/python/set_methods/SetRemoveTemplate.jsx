import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SetRemoveTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Delete <code> elmnt </code> from the set <code> set </code>, raising an error if necessary.</pre>,
            <code>set.remove(elmnt)</code>
        )
    }
}