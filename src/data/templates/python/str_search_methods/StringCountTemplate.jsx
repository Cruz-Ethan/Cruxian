import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"

export default class StringCountTemplate extends Template {
    generateProblem() {
        const value = "'" + randomLower() + randomLower() + randomLower() + "'"
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Find the amount of non-overlapping occurences of {value} in string <code> str </code>.</pre>,
            <code>str.count({value})</code>
        )
    }
}