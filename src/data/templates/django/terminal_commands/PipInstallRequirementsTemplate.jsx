import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class PipInstallRequirementsTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Install all packages line-by-line from "requirements.txt".</pre>,
            <code>pip install -r requirements.txt</code>
        )
    }
}