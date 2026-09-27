import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SearchParamsConstructorTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a search params object.</pre>,
            <code>new URLSearchParams(window.location.search)</code>
        )
    }
}