import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class MakeMigrationsTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Make migrations for all Django models.</pre>,
            <code>python3 manage.py makemigrations</code>
        )
    }
}