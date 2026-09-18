import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"

export default class StringFindTemplate extends Template {
    generateProblem() {
        const value = "'" + randomLower() + randomLower() + randomLower() + "'"
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Find the index of the first occurence of {value} in string <code> str </code> without raising an exception.</pre>,
            <code>str.find({value})</code>
        )
    }
}