import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ListPopErrorTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call <code> lst.pop </code> with an out of bounds index?</pre>,
            <code>IndexError</code>
        )
    }
}