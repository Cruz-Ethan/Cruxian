import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class OptionChoicesImportTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What import do you need to make if you use models.TextChoices?</pre>,
            <code>from django.utils.translation import gettext_lazy as _</code>
        )
    }
}