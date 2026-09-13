import Template from "../../../classes/Template.js"
import Problem from "../../../classes/Problem.js"
import randomInteger from "../../utils/randomInteger.js"

export default class ListInsertTemplate extends Template {
    generateProblem() {
        const index = randomInteger(-10, 10)
        
        return new Problem(
            <pre class="whitespace-pre-wrap break-words">Add <code> elmnt </code> to the list <code> lst </code> at index {index}.</pre>,
            <code>lst.insert({index}, elmnt)</code>
        )
    }
}