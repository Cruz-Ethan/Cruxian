import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SetAddTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Add <code> elmnt </code> to the set <code> set </code>.</pre>,
            <code>set.add(elmnt)</code>
        )
    }
}