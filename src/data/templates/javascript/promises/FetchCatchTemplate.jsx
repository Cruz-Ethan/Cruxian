import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class FetchCatchTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Fetch from url "apiUrl" and write the catch function (print errors).</pre>,
            <pre>{'fetch(apiUrl).catch(error => {\n\t console.error(error)\n})'}</pre>
        )
    }
}