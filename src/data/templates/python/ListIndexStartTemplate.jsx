import Template from "../../../classes/Template.js"
import Problem from "../../../classes/Problem.js"
import randomInteger from "../../utils/randomInteger.js"

export default class ListIndexStartTemplate extends Template {
    generateProblem() {
        const startIndex = randomInteger(-10, 10)
        const indexPhrase = startIndex >= 0 ? `index ${startIndex}` : `index ${-startIndex} from the end`

        return new Problem(
            <pre class="whitespace-pre-wrap break-words">Return the first index of <code> elmnt </code> in the list <code> lst </code> starting from {indexPhrase}.</pre>,
            <code>lst.index(elmnt, {startIndex})</code>
        )
    }
}