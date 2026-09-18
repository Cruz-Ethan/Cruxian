import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class StringTranslateTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Use a dictionary <code> dct </code> to replace occurences of keys in <code> string </code> with their values.</pre>,
            <code>string.translate(str.maketrans(dct))</code>
        )
    }
}