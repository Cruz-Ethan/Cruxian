import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class PipFreezeTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Save all installed packages to a file called "requirements.txt".</pre>,
            <code>pip freeze &gt; requirements.txt</code>
        )
    }
}