import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class MetaVerboseNamePluralTemplate extends Template {
    generateProblem() {
        const verboseNamePlural = "'" + randomElement([
            'Rarities',
            'People',
            'Classes'
        ]) + "'"
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Set the plural name of the model in the admin interface to {verboseNamePlural}.</pre>,
            <code>verbose_name_plural = {verboseNamePlural}</code>
        )
    }
}