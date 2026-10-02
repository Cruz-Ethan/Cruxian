import Topic from "../../../classes/Topic";
import MetaAbstractTemplate from "../../templates/django/models/MetaAbstractTemplate";
import MetaCheckConstraintTemplate from "../../templates/django/models/MetaCheckConstraintTemplate";
import MetaOrderingTemplate from "../../templates/django/models/MetaOrderingTemplate";
import MetaUniqueConstraintTemplate from "../../templates/django/models/MetaUniqueConstraintTemplate";
import MetaVerboseNamePluralTemplate from "../../templates/django/models/MetaVerboseNamePluralTemplate";
import MetaVerboseNameTemplate from "../../templates/django/models/MetaVerboseNameTemplate";

const tpcDjangoMetaOptions = new Topic("Meta Options")
export default tpcDjangoMetaOptions
tpcDjangoMetaOptions.addTemplate(new MetaAbstractTemplate())
tpcDjangoMetaOptions.addTemplate(new MetaVerboseNameTemplate())
tpcDjangoMetaOptions.addTemplate(new MetaVerboseNamePluralTemplate())
tpcDjangoMetaOptions.addTemplate(new MetaOrderingTemplate())
tpcDjangoMetaOptions.addTemplate(new MetaUniqueConstraintTemplate())
tpcDjangoMetaOptions.addTemplate(new MetaCheckConstraintTemplate())