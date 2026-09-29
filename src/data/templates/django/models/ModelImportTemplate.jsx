import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class ModelImportTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Import models from Django.</pre>,
            <code>from django.db import models</code>
        )
    }
}