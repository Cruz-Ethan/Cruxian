import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ModelViewSetPermissionTempalte extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Make a view set only accessible to signed in users.</pre>,
            <pre className="whitespace-pre-wrap break-words">permission_classes = [IsAuthenticated]</pre>
        )
    }
}