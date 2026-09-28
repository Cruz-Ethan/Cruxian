import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class DjangoMigrateTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Save changes for all Django models.</pre>,
            <code>python3 manage.py migrate</code>
        )
    }
}