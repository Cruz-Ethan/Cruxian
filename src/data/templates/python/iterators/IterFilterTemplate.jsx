import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class IterFilterTemplate extends Template {
    generateProblem() {
        const length = randomInteger(5, 15)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return a filtered iterator of iterable <code> words </code> longer than {length}.</pre>,
            <code>filter(lambda x: len(x) &gt; {length}, words)</code>
        )
    }
}