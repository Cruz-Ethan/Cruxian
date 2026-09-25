import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class ArrayJoinTemplate extends Template {
    generateProblem() {
        const separators = ['-', ' ', '*', ',', ', ']
        const separator = "'" + randomElement(separators) + "'"
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Join the array "arr" using the separator {separator}.</pre>,
            <code>arr.join({separator})</code>
        )
    }
}