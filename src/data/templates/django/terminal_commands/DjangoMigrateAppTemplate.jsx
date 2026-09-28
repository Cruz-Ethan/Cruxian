import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"
import randomElement from "../../../utils/randomElement.js"

export default class DjangoMigrateAppTemplate extends Template {
    generateProblem() {
        const app = randomElement(['blog', 'post', 'student', 'song', 'card'])
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Save changes for Django models in the app "{app}".</pre>,
            <code>python3 manage.py migrate {app}</code>
        )
    }
}