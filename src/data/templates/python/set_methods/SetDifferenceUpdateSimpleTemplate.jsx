import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SetDifferenceUpdateSimpleTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Delete all elements in set <code> set1 </code> that are in set <code> set2 </code>.</pre>,
            <code>set1.difference_update(set2)</code>
        )
    }
}