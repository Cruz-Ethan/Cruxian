import Template from "../../../classes/Template.js"
import Problem from "../../../classes/Problem.js"
import randomInteger from "../../utils/randomInteger.js"

export default class ListIndexEndTemplate extends Template {
    generateProblem() {
        let startIndex
        let endIndex
        do {
            startIndex = randomInteger(-10, 10)
            endIndex = startIndex + randomInteger()
        } while(startIndex * endIndex <= 0)
        
        const indexPhrase = startIndex >= 0 ? `index ${startIndex} to index ${endIndex} (exclusive)` : `index ${-startIndex} from the end to index ${-endIndex} from the end (exclusive)`

        return new Problem(
            <pre class="whitespace-pre-wrap break-words">Return the first index of <code> elmnt </code> in the list <code> lst </code> starting from {indexPhrase}.</pre>,
            <code>lst.index(elmnt, {startIndex}, {endIndex})</code>
        )
    }
}