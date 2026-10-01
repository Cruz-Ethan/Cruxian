import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DefaultPrimaryKeyTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">If you don't add a primary key, what is the default primary key?</pre>,
            <code>id = models.BigAutoField(primary_key=True)</code>
        )
    }
}