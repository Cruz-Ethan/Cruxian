import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class PipDjangoTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Install Django.</pre>,
            <code>pip install django</code>
        )
    }
}