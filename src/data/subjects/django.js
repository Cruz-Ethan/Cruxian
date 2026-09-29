import Subject from "../../classes/Subject";
import tpcDjangoGenericFields from "../topics/django/genericFields";
import tpcDjangoTerminalCommands from "../topics/django/terminalCommands";

const sbjDjango = new Subject("Django")
export default sbjDjango
sbjDjango.addTopic(tpcDjangoTerminalCommands)
sbjDjango.addTopic(tpcDjangoGenericFields)