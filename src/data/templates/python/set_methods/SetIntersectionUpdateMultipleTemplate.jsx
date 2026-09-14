import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SetIntersectionUpdateMultipleTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Delete all elements in set <code> set </code> that aren't in sets <code> set1 </code>, <code> set2 </code>, and <code> set3 </code>.</pre>,
            <code>set.intersection_update(set1, set2, set3)</code>
        )
    }
}