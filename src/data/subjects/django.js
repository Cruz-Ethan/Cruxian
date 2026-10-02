import Subject from "../../classes/Subject";
import tpcDjangoFieldOptions from "../topics/django/fieldOptions";
import tpcDjangoGenericFields from "../topics/django/genericFields";
import tpcDjangoMetaOptions from "../topics/django/metaOptions";
import tpcDjangoModels from "../topics/django/models";
import tpcDjangoTerminalCommands from "../topics/django/terminalCommands";

const sbjDjango = new Subject("Django")
export default sbjDjango
sbjDjango.addTopic(tpcDjangoTerminalCommands)
sbjDjango.addTopic(tpcDjangoGenericFields)
sbjDjango.addTopic(tpcDjangoModels)
sbjDjango.addTopic(tpcDjangoFieldOptions)
sbjDjango.addTopic(tpcDjangoMetaOptions)