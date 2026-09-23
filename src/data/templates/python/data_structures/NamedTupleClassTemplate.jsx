import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class NamedTupleClassTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Create a namedtuple Point class for 3 dimensions.</pre>,
            <code>Point = namedtuple('Point', ['x', 'y', 'z'])</code>
        )
    }
}