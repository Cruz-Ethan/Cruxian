import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SerializerPrimaryKeyRelatedFieldTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">What is the default class serializers use for ManyToMany fields and ForeignKey relationships? (Use Book class as ForeignKey.)</pre>,
            <code>serializer.PrimaryKeyRelatedField(queryset=Book.objects.all())</code>
        )
    }
}