import Topic from "../../../classes/Topic";
import ModelViewSetDefaultTemplate from "../../templates/rest_framework/view_sets/ModelViewSetDefaultTemplate";
import ModelViewSetImportTempalte from "../../templates/rest_framework/view_sets/ModelViewSetImportTemplate";
import ModelViewSetPerformCreateTemplate from "../../templates/rest_framework/view_sets/ModelViewSetPerformCreateTemplate";
import ModelViewSetPermissionTempalte from "../../templates/rest_framework/view_sets/ModelViewSetPermissionTemplate";
import ModelViewSetQuerysetTemplate from "../../templates/rest_framework/view_sets/ModelViewSetQuerysetTemplate";

const tpcViewSets = new Topic("View Sets")
export default tpcViewSets

tpcViewSets.addTemplate(new ModelViewSetDefaultTemplate())
tpcViewSets.addTemplate(new ModelViewSetImportTempalte())
tpcViewSets.addTemplate(new ModelViewSetPerformCreateTemplate())
tpcViewSets.addTemplate(new ModelViewSetPermissionTempalte())
tpcViewSets.addTemplate(new ModelViewSetQuerysetTemplate())