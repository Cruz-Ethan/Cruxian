import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"
import randomLower from "../../../utils/randomLower.js"

export default class StringLeftJustifyCharacterTemplate extends Template {
    generateProblem() {
        const length = randomInteger(10, 20)
        const character = "'" + randomLower() + "'"
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a left-justified string of <code> str </code> of length {length} by adding {character}.</pre>,
            <code>str.ljust({length}, {character})</code>
        )
    }
}