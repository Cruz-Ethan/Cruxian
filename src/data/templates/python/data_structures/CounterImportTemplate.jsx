import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class CounterImportTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Import the module for counter.</pre>,
            <code>from collections import Counter</code>
        )
    }
}