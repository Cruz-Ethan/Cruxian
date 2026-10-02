import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class MetaVerboseNameTemplate extends Template {
    generateProblem() {
        const verboseName = "'" + randomElement([
            'Rarity',
            'Suit',
            'Class'
        ]) + "'"
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Set the model name in the admin interface to {verboseName}.</pre>,
            <code>verbose_name = {verboseName}</code>
        )
    }
}