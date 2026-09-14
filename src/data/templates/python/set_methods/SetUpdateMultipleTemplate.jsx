import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SetUpdateMultipleTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Add all elements of the sets <code> set1 </code>, <code> set2 </code>, and <code> set3 </code> to set <code> set </code>.</pre>,
            <code>set.update(set1, set2, set3)</code>
        )
    }
}