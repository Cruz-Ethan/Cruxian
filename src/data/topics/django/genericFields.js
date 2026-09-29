import Topic from "../../../classes/Topic";
import BooleanFieldTemplate from "../../templates/django/models/BooleanFieldTemplate";
import CharFieldTemplate from "../../templates/django/models/CharFieldTemplate";
import DateFieldTemplate from "../../templates/django/models/DateFieldTemplate";
import DateTimeFieldTemplate from "../../templates/django/models/DateTimeFieldTemplate";
import DecimalFieldTemplate from "../../templates/django/models/DecimalFieldTemplate";
import ForeignKeyTemplate from "../../templates/django/models/ForeignKeyTemplate";
import IntegerFieldTemplate from "../../templates/django/models/IntegerFieldTemplate";
import ManyToManyFieldTemplate from "../../templates/django/models/ManyToManyFieldTemplate";
import OneToOneFieldTemplate from "../../templates/django/models/OneToOneFieldTemplate";
import TextFieldTemplate from "../../templates/django/models/TextFieldTemplate";

const tpcDjangoGenericFields = new Topic("Generic Model Fields")
export default tpcDjangoGenericFields
tpcDjangoGenericFields.addTemplate(new IntegerFieldTemplate())
tpcDjangoGenericFields.addTemplate(new CharFieldTemplate())
tpcDjangoGenericFields.addTemplate(new TextFieldTemplate())
tpcDjangoGenericFields.addTemplate(new DecimalFieldTemplate())
tpcDjangoGenericFields.addTemplate(new BooleanFieldTemplate())
tpcDjangoGenericFields.addTemplate(new DateFieldTemplate())
tpcDjangoGenericFields.addTemplate(new DateTimeFieldTemplate())
tpcDjangoGenericFields.addTemplate(new ForeignKeyTemplate())
tpcDjangoGenericFields.addTemplate(new OneToOneFieldTemplate())
tpcDjangoGenericFields.addTemplate(new ManyToManyFieldTemplate())