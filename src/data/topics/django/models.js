import Topic from "../../../classes/Topic";
import AggregateAverageTemplate from "../../templates/django/models/AggregateAverageTemplate";
import AggregateCountTemplate from "../../templates/django/models/AggregateCountTemplate";
import AggregateImportTemplate from "../../templates/django/models/AggregateImportTemplate";
import AnnotateMaxTemplate from "../../templates/django/models/AnnotateMaxTemplate";
import AnnotateMinTemplate from "../../templates/django/models/AnnotateMinTemplate";
import AnnotateSumTemplate from "../../templates/django/models/AnnotateSumTemplate";
import ManagerExcludeTemplate from "../../templates/django/models/ManageExcludeTemplate";
import ManagerAllTemplate from "../../templates/django/models/ManagerAllTemplate";
import ManagerFilterTemplate from "../../templates/django/models/ManagerFilterTemplate";
import ManagerGetTemplate from "../../templates/django/models/ManagerGetTemplate";
import ManagerUpdateTemplate from "../../templates/django/models/ManagerUpdateTemplate";
import ModelDoesNotExistTemplate from "../../templates/django/models/ModelDoesNotExistTemplate";
import ModelHeaderTemplate from "../../templates/django/models/ModelHeaderTemplate";
import ModelImportTemplate from "../../templates/django/models/ModelImportTemplate";

const tpcDjangoModels = new Topic("Models")
export default tpcDjangoModels
tpcDjangoModels.addTemplate(new ModelImportTemplate())
tpcDjangoModels.addTemplate(new AggregateImportTemplate())

tpcDjangoModels.addTemplate(new ModelHeaderTemplate())
tpcDjangoModels.addTemplate(new ManagerAllTemplate())
tpcDjangoModels.addTemplate(new ManagerGetTemplate())
tpcDjangoModels.addTemplate(new ManagerFilterTemplate())
tpcDjangoModels.addTemplate(new ManagerExcludeTemplate())
tpcDjangoModels.addTemplate(new ManagerUpdateTemplate())

tpcDjangoModels.addTemplate(new ModelDoesNotExistTemplate())

tpcDjangoModels.addTemplate(new AggregateAverageTemplate())
tpcDjangoModels.addTemplate(new AggregateCountTemplate())
tpcDjangoModels.addTemplate(new AnnotateSumTemplate())
tpcDjangoModels.addTemplate(new AnnotateMaxTemplate())
tpcDjangoModels.addTemplate(new AnnotateMinTemplate())