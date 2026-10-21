import Subject from "../../classes/Subject";
import tpcModelSerializers from "../topics/rest_framework/modelSerializers";
import tpcViewSets from "../topics/rest_framework/viewSets";

const sbjRestFramework = new Subject("Django REST Framework")
export default sbjRestFramework
sbjRestFramework.addTopic(tpcModelSerializers)
sbjRestFramework.addTopic(tpcViewSets)

sbjRestFramework.addSource('DRF Documentation', 'https://www.django-rest-framework.org/')
sbjRestFramework.addSource('BugBytes YouTube Channel', 'https://www.youtube.com/@bugbytes3923')