import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringExpandTabsTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Repalce each tab in string <code> str </code> with 8 whitespaces.</pre>,
            <code>str.expandtabs()</code>
        )
    }
}