import Topic from "../../../classes/Topic";
import DefaultPrimaryKeyTemplate from "../../templates/django/models/DefaultPrimaryKeyTemplate";
import ModelTextChoicesTemplate from "../../templates/django/models/ModelTextChoicesTemplate";
import ModelTextChoicesValueTemplate from "../../templates/django/models/ModelTextChoicesValueTemplate";
import OptionAutoNowAddTemplate from "../../templates/django/models/OptionAutoNowAddTemplate";
import OptionAutoNowTemplate from "../../templates/django/models/OptionAutoNowTemplate";
import OptionBlankTemplate from "../../templates/django/models/OptionBlankTemplate";
import OptionChoicesImportTemplate from "../../templates/django/models/OptionChoicesImportTemplate";
import OptionChoicesReadableTemplate from "../../templates/django/models/OptionChoicesReadableTemplate";
import OptionChoicesTypesTemplate from "../../templates/django/models/OptionChoicesTypesTemplate";
import OptionChoicesValuesTemplate from "../../templates/django/models/OptionChoicesValuesTemplate";
import OptionDefaultTemplate from "../../templates/django/models/OptionDefaultTemplate";
import OptionNullTemplate from "../../templates/django/models/OptionNullTemplate";
import OptionOnDeleteTemplate from "../../templates/django/models/OptionOnDeleteTemplate";
import OptionRelatedNameDefaultTemplate from "../../templates/django/models/OptionRelatedNameDefaultTemplate";
import OptionRelatedNameNoneTemplate from "../../templates/django/models/OptionRelatedNameNoneTemplate";
import OptionRelatedNameTemplate from "../../templates/django/models/OptionRelatedNameTemplate";
import OptionThroughTemplate from "../../templates/django/models/OptionThroughTemplate";
import OptionUniqueTemplate from "../../templates/django/models/OptionUniqueTemplate";

const tpcDjangoFieldOptions = new Topic('Field Options')
export default tpcDjangoFieldOptions
tpcDjangoFieldOptions.addTemplate(new OptionDefaultTemplate())
tpcDjangoFieldOptions.addTemplate(new OptionBlankTemplate())
tpcDjangoFieldOptions.addTemplate(new OptionNullTemplate())
tpcDjangoFieldOptions.addTemplate(new OptionAutoNowAddTemplate())
tpcDjangoFieldOptions.addTemplate(new OptionAutoNowTemplate())

tpcDjangoFieldOptions.addTemplate(new DefaultPrimaryKeyTemplate())
tpcDjangoFieldOptions.addTemplate(new OptionUniqueTemplate())

tpcDjangoFieldOptions.addTemplate(new OptionChoicesTypesTemplate())
tpcDjangoFieldOptions.addTemplate(new OptionChoicesValuesTemplate())
tpcDjangoFieldOptions.addTemplate(new OptionChoicesReadableTemplate())
tpcDjangoFieldOptions.addTemplate(new ModelTextChoicesTemplate())
tpcDjangoFieldOptions.addTemplate(new ModelTextChoicesValueTemplate())
tpcDjangoFieldOptions.addTemplate(new OptionChoicesImportTemplate())

tpcDjangoFieldOptions.addTemplate(new OptionOnDeleteTemplate())
tpcDjangoFieldOptions.addTemplate(new OptionRelatedNameTemplate())
tpcDjangoFieldOptions.addTemplate(new OptionRelatedNameNoneTemplate)
tpcDjangoFieldOptions.addTemplate(new OptionRelatedNameDefaultTemplate())
tpcDjangoFieldOptions.addTemplate(new OptionThroughTemplate())