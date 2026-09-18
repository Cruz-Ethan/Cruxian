import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class StringReplaceLimitedTemplate extends Template {
    generateProblem() {
        const oldValue = "'" + randomLower() + randomLower() + randomLower() + "'"
        const newValue = "'" + randomLower() + randomLower() + randomLower() + "'"
        const limit = randomInteger(2, 10)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Replace all occurences of {oldValue} with {newValue} in the string <code> str </code> up to {limit} times.</pre>,
            <code>str.replace({oldValue}, {newValue}, {limit})</code>
        )
    }
}