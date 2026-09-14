import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SetDiscardTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Delete <code> elmnt </code> from the set <code> set </code>  without raising an error.</pre>,
            <code>set.discard(elmnt)</code>
        )
    }
}