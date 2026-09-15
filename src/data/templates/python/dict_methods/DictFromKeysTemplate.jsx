import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class DictFromKeysTemplate extends Template {
    generateProblem() {
        const val = randomInteger()
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a dictionary with keys <code> iter </code> and the value <code> {val} </code>.</pre>,
            <code>dict.fromkeys(iter, {val})</code>
        )
    }
}