import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SetSymmetricDifferenceUpdateTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Write <code> set1 ^= set2 </code> longhand.</pre>,
            <code>set1.symmetric_difference_update(set2)</code>
        )
    }
}