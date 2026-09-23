import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class NamedTupleObjectTemplate extends Template {
    generateProblem() {
        const x = randomInteger(-10, 10)
        const y = randomInteger(-10, 10)
        const z = randomInteger(-10, 10)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Instantiate a namedtuple Point class for the point ({x}, {y}, {z}) with kwargs.</pre>,
            <code>Point(x={x}, y={y}, z={z})</code>
        )
    }
}