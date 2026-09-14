import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class ListMultiplyTemplate extends Template {
    generateProblem() {
        const repeat = randomInteger(3, 10)

        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a list of <code> lst </code> repeated {repeat} times.</pre>,
            <code>lst * {repeat}</code>
        )
    }
}