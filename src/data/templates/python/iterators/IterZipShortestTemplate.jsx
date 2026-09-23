import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class IterZipShortestTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call <code> zip </code> with different-sized iterables?</pre>,
            <code>The returned iterable will only be as long as the shortest iterable.</code>
        )
    }
}