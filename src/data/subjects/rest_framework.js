import Subject from "../../classes/Subject";
import tpcModelSerializers from "../topics/rest_framework/modelSerializers";

const sbjRestFramework = new Subject("Django REST Framework")
export default sbjRestFramework
sbjRestFramework.addTopic(tpcModelSerializers)

sbjRestFramework.addSource('DRF Documentation', 'https://www.django-rest-framework.org/')
sbjRestFramework.addSource('BugBytes YouTube Channel', 'https://www.youtube.com/@bugbytes3923')