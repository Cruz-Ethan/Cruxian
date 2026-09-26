import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DateGetSecondsTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Get the seconds of Date "date".</pre>,
            <code>date.getSeconds()</code>
        )
    }
}