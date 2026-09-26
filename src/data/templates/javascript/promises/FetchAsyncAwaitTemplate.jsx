import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class FetchAsyncAwaitTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get data from url "apiUrl" with async await.</pre>,
            <pre>{'const response = await fetch(apiUrl);\nconst data = await response.json();'}</pre>
        )
    }
}