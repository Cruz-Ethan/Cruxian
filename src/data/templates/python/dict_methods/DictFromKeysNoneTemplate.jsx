import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DictFromKeysNoneTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a dictionary with keys <code> iter </code> and the value <code> None </code>.</pre>,
            <code>dict.fromkeys(iter)</code>
        )
    }
}