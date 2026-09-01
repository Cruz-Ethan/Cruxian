import LeftSidebar from "./LeftSidebar"
import RightSidebar from "./RightSidebar"
import Problem from "./Problem.jsx"
import { Navigate, useParams } from "react-router-dom"
import { MathJaxContext } from 'better-react-mathjax';
import subjects from "./data/data.js"
import { useState } from "react";

function ProblemsPage() {
  const { subjectName, topicName } = useParams()
  const [update, setUpdate] = useState(0)

  const rerender = () => setUpdate(update + 1)

  const subject = subjects.find(subject => subject.name === subjectName)
  if (!subject) return <Navigate to='/404' />

  const topic = subject.topics.find(topic => topic.name === topicName)
  if (!topic) return <Navigate to='/404' />

  const template = topic.getRandomTemplate()
  const problem = template.generateProblem()

  return (
    <>
      <LeftSidebar subjectName={subjectName} />
      <RightSidebar subjectName={subjectName} topicName={topicName} />
      <MathJaxContext>
        <Problem template={template} problem={problem} rerender={rerender} />
      </MathJaxContext>
    </>
  )
}

export default ProblemsPage
