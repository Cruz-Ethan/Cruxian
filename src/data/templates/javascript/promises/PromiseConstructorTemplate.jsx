import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class PromiseConstructorTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Write the general syntax for creating a custom promise.</pre>,
            <code>new Promise((resolve, reject) =&gt; &#123;...&#125;)</code>
        )
    }
}