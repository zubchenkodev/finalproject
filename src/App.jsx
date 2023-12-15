import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Dashboard from './components/Dashboard';
import AppLayout from "./components/AppLayout";
import Folder from "./components/Folder";
import NewFolder from "./components/NewFolder";
import FolderDashboard from "./components/FolderDashboard";
import Note from "./components/Note";
import NewNote from "./components/NewNote";


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
