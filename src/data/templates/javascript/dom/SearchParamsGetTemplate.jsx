import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class SearchParamsGetTemplate extends Template {
    generateProblem() {
        const param = randomElement(['song', 'episode', 'id', 'book'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get the search param of '{param}' from params.</pre>,
            <code>params.get('{param}')</code>
        )
    }
}