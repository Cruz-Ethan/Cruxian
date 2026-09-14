import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SetUpdateSimpleTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Add all elements of set <code> set2 </code> to set <code> set1 </code>.</pre>,
            <code>set1.update(set2)</code>
        )
    }
}