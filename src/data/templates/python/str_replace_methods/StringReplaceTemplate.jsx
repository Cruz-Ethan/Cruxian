import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"

export default class StringReplaceTemplate extends Template {
    generateProblem() {
        const oldValue = "'" + randomLower() + randomLower() + randomLower() + "'"
        const newValue = "'" + randomLower() + randomLower() + randomLower() + "'"
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Replace all occurences of {oldValue} with {newValue} in the string <code> str </code>.</pre>,
            <code>str.replace({oldValue}, {newValue})</code>
        )
    }
}