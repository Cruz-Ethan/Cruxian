import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class NamedTupleAdvantagesTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What are the advantages to using namedtuple in Python?</pre>,
            <code>Values can be accessed like a tuple or dictionary.</code>
        )
    }
}