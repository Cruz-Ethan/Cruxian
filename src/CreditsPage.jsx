import LeftSidebar from "./LeftSidebar"
import RightSidebar from "./RightSidebar"
import { Navigate, useParams } from "react-router-dom"
import subjects from "./data/data.js"
import Credits from "./Credits.jsx"

function CreditsPage() {
  const { subjectName } = useParams()

  const subject = subjects.find(subject => subject.name === subjectName)
  if (!subject) return <Navigate to='/404' />

  return (
    <>
      <LeftSidebar subjectName={subjectName} />
      <RightSidebar subjectName={subjectName} topicName="Credits" />
      <Credits subject={subject}></Credits>
    </>
  )
}

export default CreditsPage
