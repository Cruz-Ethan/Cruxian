import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class MetaAbstractTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Make the model an abstract base class.</pre>,
            <code>abstract = True</code>
        )
    }
}