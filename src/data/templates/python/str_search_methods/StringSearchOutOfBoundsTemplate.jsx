import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringSearchOutOfBoundsTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you give an out of bounds index to a python string search method?</pre>,
            <code>It will go to the first or last index.</code>
        )
    }
}