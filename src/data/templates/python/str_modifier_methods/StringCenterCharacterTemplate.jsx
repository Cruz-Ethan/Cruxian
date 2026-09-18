import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"
import randomLower from "../../../utils/randomLower.js"

export default class StringCenterCharacterTemplate extends Template {
    generateProblem() {
        const length = randomInteger(10, 20)
        const character = "'" + randomLower() + "'"
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a centered string of <code> str </code> of length {length} surrounded by {character}.</pre>,
            <code>str.center({length}, {character})</code>
        )
    }
}