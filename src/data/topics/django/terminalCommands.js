import Topic from "../../../classes/Topic";
import ActivateEnvironmentTemplate from "../../templates/django/terminal_commands/ActivateEnvironmentTemplate";
import CreateSuperUserTemplate from "../../templates/django/terminal_commands/CreateSuperUserTemplate";
import DjangoMigrateAppTemplate from "../../templates/django/terminal_commands/DjangoMigrateAppTemplate";
import DjangoMigrateTemplate from "../../templates/django/terminal_commands/DjangoMigrateTemplate";
import MakeMigrationsAppTemplate from "../../templates/django/terminal_commands/MakeMigrationsAppTemplate";
import MakeMigrationsTemplate from "../../templates/django/terminal_commands/MakeMigrationsTemplate";
import PipDjangoTemplate from "../../templates/django/terminal_commands/PipDjangoTemplate";
import PipFreezeTemplate from "../../templates/django/terminal_commands/PipFreezeTemplate";
import PipInstallRequirementsTemplate from "../../templates/django/terminal_commands/PipInstallRequirementsTemplate";
import RunServerTemplate from "../../templates/django/terminal_commands/RunServerTemplate";
import StartAppTemplate from "../../templates/django/terminal_commands/StartAppTemplate";
import StartProjectTemplate from "../../templates/django/terminal_commands/StartProjectTemplate";
import VirtualEnvironmentTemplate from "../../templates/django/terminal_commands/VirtualEnvironmentTemplate";

const tpcDjangoTerminalCommands = new Topic("Terminal Commands")
export default tpcDjangoTerminalCommands
tpcDjangoTerminalCommands.addTemplate(new VirtualEnvironmentTemplate())
tpcDjangoTerminalCommands.addTemplate(new ActivateEnvironmentTemplate())
tpcDjangoTerminalCommands.addTemplate(new PipDjangoTemplate())
tpcDjangoTerminalCommands.addTemplate(new StartProjectTemplate())
tpcDjangoTerminalCommands.addTemplate(new StartAppTemplate())
tpcDjangoTerminalCommands.addTemplate(new MakeMigrationsTemplate())
tpcDjangoTerminalCommands.addTemplate(new MakeMigrationsAppTemplate())
tpcDjangoTerminalCommands.addTemplate(new RunServerTemplate())
tpcDjangoTerminalCommands.addTemplate(new DjangoMigrateTemplate())
tpcDjangoTerminalCommands.addTemplate(new DjangoMigrateAppTemplate())
tpcDjangoTerminalCommands.addTemplate(new CreateSuperUserTemplate())
tpcDjangoTerminalCommands.addTemplate(new PipFreezeTemplate())
tpcDjangoTerminalCommands.addTemplate(new PipInstallRequirementsTemplate())