import Topic from "../../../classes/Topic";
import ModelSerializerAllTemplate from "../../templates/rest_framework/model_serializers/ModelSerializerAllTemplate";
import ModelSerializerExcludeTemplate from "../../templates/rest_framework/model_serializers/ModelSerializerExcludeTemplate";
import ModelSerializerFieldsTemplate from "../../templates/rest_framework/model_serializers/ModelSerializerFieldsTemplate";
import ModelSerializerHeaderTemplate from "../../templates/rest_framework/model_serializers/ModelSerializerHeaderTemplate";
import ModelSerializerModelTemplate from "../../templates/rest_framework/model_serializers/ModelSerializerModelTemplate";
import ModelSerializerReadOnlyTemplate from "../../templates/rest_framework/model_serializers/ModelSerializerReadOnlyTemplate";
import ModelSerializerWriteOnlyTemplate from "../../templates/rest_framework/model_serializers/ModelSerializerWriteOnlyTemplate";
import SerializerDataTemplate from "../../templates/rest_framework/model_serializers/SerializerDataTemplate";
import SerializerErrorsTemplate from "../../templates/rest_framework/model_serializers/SerializerErrorsTemplate";
import SerializerForeignKeyTemplate from "../../templates/rest_framework/model_serializers/SerializerForeignKeyTemplate";
import SerializerImportTemplate from "../../templates/rest_framework/model_serializers/SerializerImportTemplate";
import SerializerInstantiateDataTemplate from "../../templates/rest_framework/model_serializers/SerializerInstantiateDataTemplate";
import SerializerInstantiateManyTemplate from "../../templates/rest_framework/model_serializers/SerializerInstantiateManyTemplate";
import SerializerMethodFieldTemplate from "../../templates/rest_framework/model_serializers/SerializerMethodFieldTemplate";
import SerializerMethodTemplate from "../../templates/rest_framework/model_serializers/SerializerMethodTemplate";
import SerializerPrimaryKeyRelatedFieldTemplate from "../../templates/rest_framework/model_serializers/SerializerPrimaryKeyRelatedFieldTemplate";
import SerializerSaveTemplate from "../../templates/rest_framework/model_serializers/SerializerSaveTemplate";
import SerializerValidationErrorTemplate from "../../templates/rest_framework/model_serializers/SerializersValidationErrorTemplate";
import SerializerValidateFieldTemplate from "../../templates/rest_framework/model_serializers/SerializerValidateFieldTemplate";
import SerializerValidateObjectTemplate from "../../templates/rest_framework/model_serializers/SerializerValidateObjectTemplate";
import SerializerValidTemplate from "../../templates/rest_framework/model_serializers/SerializerValidTemplate";

const tpcModelSerializers = new Topic('Model Serializers')
export default tpcModelSerializers
tpcModelSerializers.addTemplate(new SerializerImportTemplate())
tpcModelSerializers.addTemplate(new ModelSerializerModelTemplate())
tpcModelSerializers.addTemplate(new ModelSerializerHeaderTemplate())
tpcModelSerializers.addTemplate(new ModelSerializerAllTemplate())
tpcModelSerializers.addTemplate(new ModelSerializerFieldsTemplate())
tpcModelSerializers.addTemplate(new ModelSerializerExcludeTemplate())
tpcModelSerializers.addTemplate(new ModelSerializerReadOnlyTemplate())
tpcModelSerializers.addTemplate(new ModelSerializerWriteOnlyTemplate())
tpcModelSerializers.addTemplate(new SerializerValidTemplate())
tpcModelSerializers.addTemplate(new SerializerSaveTemplate())
tpcModelSerializers.addTemplate(new SerializerDataTemplate())
tpcModelSerializers.addTemplate(new SerializerErrorsTemplate())
tpcModelSerializers.addTemplate(new SerializerPrimaryKeyRelatedFieldTemplate())
tpcModelSerializers.addTemplate(new SerializerMethodFieldTemplate())
tpcModelSerializers.addTemplate(new SerializerMethodTemplate())
tpcModelSerializers.addTemplate(new SerializerInstantiateDataTemplate())
tpcModelSerializers.addTemplate(new SerializerInstantiateManyTemplate())
tpcModelSerializers.addTemplate(new SerializerForeignKeyTemplate())
tpcModelSerializers.addTemplate(new SerializerValidateFieldTemplate())
tpcModelSerializers.addTemplate(new SerializerValidateObjectTemplate())
tpcModelSerializers.addTemplate(new SerializerValidationErrorTemplate())