import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class StringSplitTemplate extends Template {
    generateProblem() {
        const separator = "'" + randomElement([' ', '', '-', ',', ', ']) + "'"
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Split the string "str" with the separator {separator}.</pre>,
            <code>str.split({separator})</code>
        )
    }
}