import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class StringCenterTemplate extends Template {
    generateProblem() {
        const length = randomInteger(10, 20)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a centered string of <code> str </code> of length {length}.</pre>,
            <code>str.center({length})</code>
        )
    }
}