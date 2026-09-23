import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class IterMapTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return an iterator of the sum of iterables <code> nums1 </code> and <code> nums2 </code></pre>,
            <code>map(lambda x, y: x + y, nums1, nums2)</code>
        )
    }
}