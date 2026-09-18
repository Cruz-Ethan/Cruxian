import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomLower from "../../../utils/randomLower.js"

export default class StringLeftStripCharactersTemplate extends Template {
    generateProblem() {
        const letter1 = randomLower()
        const letter2 = randomLower()
        const letters = letter1 + letter2
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Remove any {letter1}'s and {letter2}'s at the beginning of string <code> str </code>.</pre>,
            <code>str.lstrip('{letters}')</code>
        )
    }
}