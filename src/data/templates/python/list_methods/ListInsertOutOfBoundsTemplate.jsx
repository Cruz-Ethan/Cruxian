import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ListInsertOutOfBoundsTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you give an out of bounds index to <code> lst.insert </code>?</pre>,
            <pre className="whitespace-pre-wrap break-words">The element is added at the beginning or end of <code> lst </code>.</pre>
        )
    }
}