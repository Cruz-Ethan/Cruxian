import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SetDifferenceUpdateMultipleTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Delete all elements in set <code> set </code> that are in sets <code> set1 </code>, <code> set2 </code>, or <code> set3 </code>.</pre>,
            <code>set.difference_update(set1, set2, set3)</code>
        )
    }
}