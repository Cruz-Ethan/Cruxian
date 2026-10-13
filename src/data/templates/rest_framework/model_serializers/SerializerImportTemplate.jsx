import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SerializerImportTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Import serializers for Django.</pre>,
            <code>from rest_framework import serializers</code>
        )
    }
}