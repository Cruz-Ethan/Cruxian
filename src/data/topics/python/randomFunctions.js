import Topic from "../../../classes/Topic";
import RandomChoiceTemplate from "../../templates/python/random_functions/RandomChoiceTemplate";
import RandomImportTemplate from "../../templates/python/random_functions/RandomImportTemplate";
import RandomIntegerTemplate from "../../templates/python/random_functions/RandomIntegerTemplate";
import RandomRandomTemplate from "../../templates/python/random_functions/RandomRandomTemplate";
import RandomShuffleTemplate from "../../templates/python/random_functions/RandomShuffleTemplate";
import RandomUniformTemplate from "../../templates/python/random_functions/RandomUniformTemplate";

const tpcPythonRandomFunctions = new Topic('Random Functions')
export default tpcPythonRandomFunctions
tpcPythonRandomFunctions.addTemplate(new RandomImportTemplate())
tpcPythonRandomFunctions.addTemplate(new RandomRandomTemplate())
tpcPythonRandomFunctions.addTemplate(new RandomUniformTemplate())
tpcPythonRandomFunctions.addTemplate(new RandomIntegerTemplate())
tpcPythonRandomFunctions.addTemplate(new RandomChoiceTemplate())
tpcPythonRandomFunctions.addTemplate(new RandomShuffleTemplate())