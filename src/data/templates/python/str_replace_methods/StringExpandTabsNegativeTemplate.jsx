import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringExpandTabsNegativeTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What happens if you call <code> str.expandtabs </code> with a negative value?</pre>,
            <code>Tabs are expanded to 0.</code>
        )
    }
}