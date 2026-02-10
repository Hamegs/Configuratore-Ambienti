import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TemplateSelector from './pages/TemplateSelector'
import ApartmentEditor from './pages/ApartmentEditor'
import RoomDetail from './pages/RoomDetail'
import Room3DConfig from './pages/Room3DConfig'
import Catalog from './pages/Catalog'
import Configurations from './pages/Configurations'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="templates" element={<TemplateSelector />} />
        <Route path="editor/:configId" element={<ApartmentEditor />} />
        <Route path="room/:configId/:roomId" element={<RoomDetail />} />
        <Route path="room3d/:configId/:roomId" element={<Room3DConfig />} />
        <Route path="catalog/:configId" element={<Catalog />} />
        <Route path="configurations" element={<Configurations />} />
      </Route>
    </Routes>
  )
}

export default App
