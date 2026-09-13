import Template from "../../../classes/Template.js"
import Problem from "../../../classes/Problem.js"
import randomInteger from "../../utils/randomInteger.js"

export default class ListPopIndexTemplate extends Template {
    generateProblem() {
        const index = randomInteger(-10, 10)
        
        return new Problem(
            <pre class="whitespace-pre-wrap break-words">Delete and return the element at index {index} of the list <code> lst </code>.</pre>,
            <code>lst.pop({index})</code>
        )
    }
}