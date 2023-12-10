import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Dashboard from './pages/Dashboard';
import AppLayout from "./ui/AppLayout";
import Folder from "./pages/Folder";
import NewFolder from "./pages/NewFolder";
import FolderDashboard from "./features/folders/FolderDashboard";
import Note from "./features/notes/Note";
import NewNote from "./features/notes/NewNote";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route index element={<Navigate replace to="dashboard"/>} />
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="folders/:id" element={<Folder/>}>
              <Route index element={<Navigate replace to="folder-dashboard"/>} />
              <Route path="folder-dashboard" element={<FolderDashboard/>}/>
              <Route path="notes/:id" element={<Note/>}/>
              <Route path="new-note" element={<NewNote/>} />
          </Route>
          <Route path="new-folder" element={<NewFolder/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    )
}


export default App
