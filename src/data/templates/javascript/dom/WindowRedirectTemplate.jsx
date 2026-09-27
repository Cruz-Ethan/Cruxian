import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class WindowRedirectTemplate extends Template {
    generateProblem() {
        const page = randomElement(['home', 'about', 'pricing', 'dashboard']) + '.html'
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Redirect to {page}.</pre>,
            <code>window.location.href = '/{page}'</code>
        )
    }
}