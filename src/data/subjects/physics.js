import Subject from "../../classes/Subject.js"
import tpcPhysicsUAM from "../topics/physics/UAM.js"

const sbjPhysics = new Subject("Physics")
export default sbjPhysics
sbjPhysics.addTopic(tpcPhysicsUAM)

sbjPhysics.addSource("University Physics", "https://openstax.org/books/university-physics-volume-1/pages/preface")