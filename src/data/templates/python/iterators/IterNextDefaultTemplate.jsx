import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"

export default class IterNextDefaultTemplate extends Template {
    generateProblem() {
        const defaultValue = "'" + randomLower() + randomLower() + randomLower() + "'"
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return the next value of iterator <code> iter </code> or default to {defaultValue}.</pre>,
            <code>next(iter, {defaultValue})</code>
        )
    }
}