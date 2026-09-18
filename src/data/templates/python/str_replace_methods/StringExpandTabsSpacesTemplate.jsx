import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomInteger from "../../../utils/randomInteger.js"

export default class StringExpandTabsSpacesTemplate extends Template {
    generateProblem() {
        const spaces = randomInteger(1, 4)
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Repalce each tab in string <code> str </code> with {spaces} whitespaces.</pre>,
            <code>str.expandtabs({spaces})</code>
        )
    }
}