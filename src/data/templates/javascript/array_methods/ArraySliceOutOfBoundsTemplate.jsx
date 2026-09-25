import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ArraySliceOutOfBoundsTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call arr.slice() with out of bound indices?</pre>,
            <code>The subarray will start at the first index or end at the last index.</code>
        )
    }
}