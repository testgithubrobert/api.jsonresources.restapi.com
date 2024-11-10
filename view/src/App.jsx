import { Route, Routes } from 'react-router-dom';
import Main from './components/routes/Main.component';
import AboutAPI from './components/routes/About.API.component';
import OfflinePage from './components/modules/Offline.page';
import APIGuideComponentSection from './components/routes/API.Guide.component';

function App() {
    // check if client window if offline, if true, then send offline page
    return ( !window.navigator.onLine ? <Routes>
      <Route path='/' Component={Main}></Route>
      <Route path='/about' Component={AboutAPI}></Route>
      <Route path='/guide' Component={APIGuideComponentSection}></Route>
  </Routes> : <OfflinePage message = {String("You are currently offline!")} /> );
}

export default App; 