import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ListAddTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a list of <code> lst1 </code>, then <code> lst2 </code>.</pre>,
            <code>lst1 + lst2</code>
        )
    }
}