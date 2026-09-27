import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class AddEventListenerTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Call "render" when "renderButton" is clicked.</pre>,
            <code>renderButton.addEventListener('click', render)</code>
        )
    }
}