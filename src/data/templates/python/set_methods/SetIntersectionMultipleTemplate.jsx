import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SetIntersectionMultipleTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Write <code> set & set1 & set2 & set3 </code> longhand.</pre>,
            <code>set.intersection(set1, set2, set3)</code>
        )
    }
}