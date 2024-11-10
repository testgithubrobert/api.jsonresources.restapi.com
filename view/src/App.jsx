import { Route, Routes } from 'react-router-dom';
import Main from './components/Main.component';
import RegisterToken from './components/Token.register.component';
import AboutAPI from './components/About.API.component';
import OfflinePage from './components/Offline.page';
import RefreshToken from './components/Token.refresh.component';
import APIGuideComponentSection from './components/API.Guide.component';

function App() {
    // check if client window if offline, if true, then send offline page
    return ( window.navigator.onLine ? <Routes>
      <Route path='/' Component={Main}></Route>
      <Route path='/token/register' Component={RegisterToken}></Route>
      <Route path='/about' Component={AboutAPI}></Route>
      <Route path='/token/refresh' Component={RefreshToken}></Route>
      <Route path='/guide' Component={APIGuideComponentSection}></Route>
  </Routes> : <OfflinePage message = {String("You are currently offline!")} /> );
}

export default App; 