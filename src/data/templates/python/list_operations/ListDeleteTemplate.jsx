import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class ListDeleteTemplate extends Template {
    generateProblem() {
        const index = randomInteger(-10, 10)

        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Delete index {index} of the list <code> lst </code>.</pre>,
            <code>del lst[{index}]</code>
        )
    }
}