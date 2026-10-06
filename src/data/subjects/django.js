import Subject from "../../classes/Subject";
import tpcDjangoFieldLookups from "../topics/django/fieldLookups";
import tpcDjangoFieldOptions from "../topics/django/fieldOptions";
import tpcDjangoGenericFields from "../topics/django/genericFields";
import tpcDjangoMetaOptions from "../topics/django/metaOptions";
import tpcDjangoModels from "../topics/django/models";
import tpcDjangoTerminalCommands from "../topics/django/terminalCommands";
import tpcDjangoValidators from "../topics/django/validators";

const sbjDjango = new Subject("Django")
export default sbjDjango
sbjDjango.addTopic(tpcDjangoTerminalCommands)
sbjDjango.addTopic(tpcDjangoGenericFields)
sbjDjango.addTopic(tpcDjangoModels)
sbjDjango.addTopic(tpcDjangoFieldOptions)
sbjDjango.addTopic(tpcDjangoMetaOptions)
sbjDjango.addTopic(tpcDjangoFieldLookups)
sbjDjango.addTopic(tpcDjangoValidators)

sbjDjango.addSource("Django Documentation", "https://docs.djangoproject.com/en/6.1/")
sbjDjango.addSource("BugBytes", "https://www.youtube.com/@bugbytes3923")
sbjDjango.addSource("Shubham Sarda's Blogs", "https://unwiredlearning.com/blog/django-web-framework")