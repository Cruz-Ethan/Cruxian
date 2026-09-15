import Topic from "../../../classes/Topic";
import DictClearTemplate from "../../templates/python/dict_methods/DictClearTemplate";
import DictCopyTemplate from "../../templates/python/dict_methods/DictCopyTemplate";
import DictFromKeysNoneTemplate from "../../templates/python/dict_methods/DictFromKeysNoneTemplate";
import DictFromKeysTemplate from "../../templates/python/dict_methods/DictFromKeysTemplate";
import DictGetDefaultTemplate from "../../templates/python/dict_methods/DictGetDefaultTemplate";
import DictGetNoneTemplate from "../../templates/python/dict_methods/DictGetNoneTemplate";
import DictGetTemplate from "../../templates/python/dict_methods/DictGetTemplate";
import DictItemsIteratorTemplate from "../../templates/python/dict_methods/DictItemsIteratorTemplate";
import DictKeysTemplate from "../../templates/python/dict_methods/DictKeysTemplate";
import DictPopDefaultTemplate from "../../templates/python/dict_methods/DictPopDefaultTemplate";
import DictPopErrorTemplate from "../../templates/python/dict_methods/DictPopErrorTemplate";
import DictPopItemTemplate from "../../templates/python/dict_methods/DictPopItemTemplate";
import DictPopTemplate from "../../templates/python/dict_methods/DictPopTemplate";
import DictSetDefaultMissingTemplate from "../../templates/python/dict_methods/DictSetDefaultMissingTemplate";
import DictSetDefaultTemplate from "../../templates/python/dict_methods/DictSetDefaultTemplate";
import DictUpdateTemplate from "../../templates/python/dict_methods/DictUpdateTemplate";
import DictValuesTemplate from "../../templates/python/dict_methods/DictValuesTemplate";
import DictViewUpdateTemplate from "../../templates/python/dict_methods/DictViewUpdateTemplate";

const tpcPythonDictMethods = new Topic("Dictionary Methods")
export default tpcPythonDictMethods
tpcPythonDictMethods.addTemplate(new DictClearTemplate())
tpcPythonDictMethods.addTemplate(new DictCopyTemplate())
tpcPythonDictMethods.addTemplate(new DictFromKeysTemplate())
tpcPythonDictMethods.addTemplate(new DictFromKeysNoneTemplate())
tpcPythonDictMethods.addTemplate(new DictGetTemplate())
tpcPythonDictMethods.addTemplate(new DictGetDefaultTemplate())
tpcPythonDictMethods.addTemplate(new DictGetNoneTemplate())
tpcPythonDictMethods.addTemplate(new DictItemsIteratorTemplate())
tpcPythonDictMethods.addTemplate(new DictKeysTemplate())
tpcPythonDictMethods.addTemplate(new DictPopItemTemplate())
tpcPythonDictMethods.addTemplate(new DictPopTemplate())
tpcPythonDictMethods.addTemplate(new DictPopDefaultTemplate())
tpcPythonDictMethods.addTemplate(new DictPopErrorTemplate())
tpcPythonDictMethods.addTemplate(new DictSetDefaultTemplate())
tpcPythonDictMethods.addTemplate(new DictSetDefaultMissingTemplate())
tpcPythonDictMethods.addTemplate(new DictUpdateTemplate())
tpcPythonDictMethods.addTemplate(new DictValuesTemplate())
tpcPythonDictMethods.addTemplate(new DictViewUpdateTemplate())