import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SetIsDisjointTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Write <code> not (set1 & set2) </code> longhand.</pre>,
            <code>set1.isdisjoint(set2)</code>
        )
    }
}