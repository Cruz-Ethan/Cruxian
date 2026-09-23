import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class IterNextStopTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call next(iter) and there are no more values?</pre>,
            <code>StopIteration</code>
        )
    }
}