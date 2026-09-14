import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SetIsSubsetTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Write <code> set1 &lt;= set2 </code> longhand.</pre>,
            <code>set1.issubset(set2)</code>
        )
    }
}