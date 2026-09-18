import Topic from "../../../classes/Topic";
import StringCapitalizeTemplate from "../../templates/python/str_modifier_methods/StringCapitalizeTemplate";
import StringCaseFoldTemplate from "../../templates/python/str_modifier_methods/StringCaseFoldTemplate";
import StringCenterCharacterTemplate from "../../templates/python/str_modifier_methods/StringCenterCharacterTemplate";
import StringCenterTemplate from "../../templates/python/str_modifier_methods/StringCenterTemplate";
import StringLeftJustifyCharacterTemplate from "../../templates/python/str_modifier_methods/StringLeftJustifyCharacterTemplate";
import StringLeftJustifyTemplate from "../../templates/python/str_modifier_methods/StringLeftJustifyTemplate";
import StringLeftStripCharactersTemplate from "../../templates/python/str_modifier_methods/StringLeftStripCharactersTemplate";
import StringLeftStripTemplate from "../../templates/python/str_modifier_methods/StringLeftStripTemplate"
import StringLowerTemplate from "../../templates/python/str_modifier_methods/StringLowerTemplate";
import StringRightJustifyCharacterTemplate from "../../templates/python/str_modifier_methods/StringRightJustifyCharacterTemplate";
import StringRightJustifyTemplate from "../../templates/python/str_modifier_methods/StringRightJustifyTemplate";
import StringRightStripCharactersTemplate from "../../templates/python/str_modifier_methods/StringRightStripCharactersTemplate";
import StringRightStripTemplate from "../../templates/python/str_modifier_methods/StringRightStripTemplate"
import StringStripCharactersTemplate from "../../templates/python/str_modifier_methods/StringStripCharactersTemplate";
import StringStripTemplate from "../../templates/python/str_modifier_methods/StringStripTemplate"
import StringSwapCaseTemplate from "../../templates/python/str_modifier_methods/StringSwapCaseTemplate";
import StringTitleTemplate from "../../templates/python/str_modifier_methods/StringTitleTemplate";
import StringUpperTemplate from "../../templates/python/str_modifier_methods/StringUpperTemplate";
import StringZeroFillLongerTemplate from "../../templates/python/str_modifier_methods/StringZeroFillLongerTemplate";
import StringZeroFillMinusTemplate from "../../templates/python/str_modifier_methods/StringZeroFillMinusTemplate";
import StringZeroFillTemplate from "../../templates/python/str_modifier_methods/StringZeroFillTemplate";

const tpcPythonStringModifierMethods = new Topic('String Modifier Methods')
export default tpcPythonStringModifierMethods
tpcPythonStringModifierMethods.addTemplate(new StringLowerTemplate())
tpcPythonStringModifierMethods.addTemplate(new StringUpperTemplate())
tpcPythonStringModifierMethods.addTemplate(new StringTitleTemplate())
tpcPythonStringModifierMethods.addTemplate(new StringCapitalizeTemplate())
tpcPythonStringModifierMethods.addTemplate(new StringSwapCaseTemplate())
tpcPythonStringModifierMethods.addTemplate(new StringCaseFoldTemplate())

tpcPythonStringModifierMethods.addTemplate(new StringLeftStripTemplate())
tpcPythonStringModifierMethods.addTemplate(new StringRightStripTemplate())
tpcPythonStringModifierMethods.addTemplate(new StringStripTemplate())
tpcPythonStringModifierMethods.addTemplate(new StringLeftStripCharactersTemplate())
tpcPythonStringModifierMethods.addTemplate(new StringRightStripCharactersTemplate())
tpcPythonStringModifierMethods.addTemplate(new StringStripCharactersTemplate())

tpcPythonStringModifierMethods.addTemplate(new StringLeftJustifyTemplate())
tpcPythonStringModifierMethods.addTemplate(new StringRightJustifyTemplate())
tpcPythonStringModifierMethods.addTemplate(new StringCenterTemplate())
tpcPythonStringModifierMethods.addTemplate(new StringLeftJustifyCharacterTemplate())
tpcPythonStringModifierMethods.addTemplate(new StringRightJustifyCharacterTemplate())
tpcPythonStringModifierMethods.addTemplate(new StringCenterCharacterTemplate())

tpcPythonStringModifierMethods.addTemplate(new StringZeroFillTemplate())
tpcPythonStringModifierMethods.addTemplate(new StringZeroFillLongerTemplate())
tpcPythonStringModifierMethods.addTemplate(new StringZeroFillMinusTemplate())