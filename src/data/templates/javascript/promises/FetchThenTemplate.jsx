import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class FetchThenTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Fetch from url "apiUrl" and write the first then function (throw an error if response not ok, otherwise get json).</pre>,
            <pre>{'fetch(apiUrl).then(response => {\n\tif(!response.ok) throw new Error();\n\treturn response.json()\n})'}</pre>
        )
    }
}