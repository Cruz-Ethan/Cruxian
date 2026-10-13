import Template from "../../../../classes/Template.js"
import Problem from "../../../../classes/Problem.js"

export default class SerializerMethodTemplate extends Template {
    generateProblem() {
        return new Problem(
            <pre className="whitespace-pre-wrap break-words">Write the method for a custom field is_published for a serializer (based on publish_date).</pre>,
            <pre className="whitespace-pre-wrap break-words">{`def get_is_published(self, obj):
    return obj.publish_date and date.today() >= obj.publish_date`}</pre>
        )
    }
}