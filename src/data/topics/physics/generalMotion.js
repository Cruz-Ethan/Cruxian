import Topic from "../../../classes/Topic";
import ProjectileTimeTemplate from "../../templates/physics/general_motion/ProjectileTimeTemplate";

const tpcPhysicsGeneralMotion = new Topic("General Motion")
export default tpcPhysicsGeneralMotion
tpcPhysicsGeneralMotion.addTemplate(new ProjectileTimeTemplate())