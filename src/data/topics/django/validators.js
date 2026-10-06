import Topic from "../../../classes/Topic";
import ValidatorCustomTemplate from "../../templates/django/models/ValidatorCustomTemplate";
import ValidatorImportTemplate from "../../templates/django/models/ValidatorImportTemplate";
import ValidatorValueTemplate from "../../templates/django/models/ValidatorValueTemplate";

const tpcDjangoValidators = new Topic("Validators")
export default tpcDjangoValidators
tpcDjangoValidators.addTemplate(new ValidatorImportTemplate())
tpcDjangoValidators.addTemplate(new ValidatorValueTemplate())
tpcDjangoValidators.addTemplate(new ValidatorCustomTemplate())