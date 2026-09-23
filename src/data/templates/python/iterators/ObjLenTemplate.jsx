import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ObjLenTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Return the length of object <code> obj </code>.</pre>,
            <code>len(obj)</code>
        )
    }
}