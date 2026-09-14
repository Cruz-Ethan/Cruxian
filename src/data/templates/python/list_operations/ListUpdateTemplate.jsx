import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class ListUpdateTemplate extends Template {
    generateProblem() {
        const index = randomInteger(-10, 10)
        const num = randomInteger()

        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Set index {index} of the list <code> lst </code> to {num}.</pre>,
            <code>lst[{index}] = {num}</code>
        )
    }
}