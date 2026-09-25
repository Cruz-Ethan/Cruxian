import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class RandomImportTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Import the random module.</pre>,
            <code>import random</code>
        )
    }
}