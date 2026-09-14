import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class ListSliceTemplate extends Template {
    generateProblem() {
        let startIndex
        let endIndex
        do {
            startIndex = randomInteger(-10, 10)
            endIndex = startIndex + randomInteger(0, 10)
        } while(startIndex * endIndex <= 0)

        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return the sublist of the list <code> lst </code> from indices {startIndex} to {endIndex}.</pre>,
            <code>lst[{startIndex}:{endIndex}]</code>
        )
    }
}