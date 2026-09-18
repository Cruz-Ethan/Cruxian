import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class StringZeroFillTemplate extends Template {
    generateProblem() {
        const length = randomInteger(10, 20)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Add 0's at the start of string <code> str </code> until its length is {length}.</pre>,
            <code>str.zfill({length})</code>
        )
    }
}