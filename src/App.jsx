import LeftSidebar from "./LeftSidebar"
import NotFound from "./NotFound"
import ProblemsPage from "./ProblemsPage"
import RightSidebar from "./RightSidebar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Cruxian/problems/:subjectName/:topicName" element={<ProblemsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
