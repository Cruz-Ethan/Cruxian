import Topic from "../../../classes/Topic";
import StringEncodeTemplate from "../../templates/python/str_replace_methods/StringEncodeTemplate";
import StringExpandTabsNegativeTemplate from "../../templates/python/str_replace_methods/StringExpandTabsNegativeTemplate";
import StringExpandTabsSpacesTemplate from "../../templates/python/str_replace_methods/StringExpandTabsSpacesTemplate";
import StringExpandTabsTemplate from "../../templates/python/str_replace_methods/StringExpandTabsTemplate";
import StringFormatMapTemplate from "../../templates/python/str_replace_methods/StringFormatMapTemplate";
import StringFormatTemplate from "../../templates/python/str_replace_methods/StringFormatTemplate";
import StringReplaceLimitedTemplate from "../../templates/python/str_replace_methods/StringReplaceLimitedTemplate";
import StringReplaceNegativeTemplate from "../../templates/python/str_replace_methods/StringReplaceNegativeTemplate";
import StringReplaceTemplate from "../../templates/python/str_replace_methods/StringReplaceTemplate";
import StringTranslateTemplate from "../../templates/python/str_replace_methods/StringTranslateTemplate";

const tpcPythonStringReplaceMethods = new Topic("String Replace Methods")
export default tpcPythonStringReplaceMethods
tpcPythonStringReplaceMethods.addTemplate(new StringExpandTabsTemplate())
tpcPythonStringReplaceMethods.addTemplate(new StringExpandTabsSpacesTemplate())
tpcPythonStringReplaceMethods.addTemplate(new StringExpandTabsNegativeTemplate())
tpcPythonStringReplaceMethods.addTemplate(new StringEncodeTemplate())
tpcPythonStringReplaceMethods.addTemplate(new StringReplaceTemplate())
tpcPythonStringReplaceMethods.addTemplate(new StringReplaceLimitedTemplate())
tpcPythonStringReplaceMethods.addTemplate(new StringReplaceNegativeTemplate())
tpcPythonStringReplaceMethods.addTemplate(new StringFormatTemplate())
tpcPythonStringReplaceMethods.addTemplate(new StringFormatMapTemplate())
tpcPythonStringReplaceMethods.addTemplate(new StringTranslateTemplate())