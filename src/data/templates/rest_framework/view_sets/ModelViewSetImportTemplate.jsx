import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ModelViewSetImportTempalte extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Import ModelViewSet for Django.</pre>,
            <pre className="whitespace-pre-wrap break-words">from rest_framework.viewsets import ModelViewSet</pre>
        )
    }
}