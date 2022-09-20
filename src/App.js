import './App.css';
import Navbar from './Navbar';
import Logo from './Logo';
import Footer from './Footer';
import Maincontent from './Maincontent';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Login from './Login';
import Createemp from './Createemp';
import Deleteemp from './Deleteemp';
import './style.css';

import {UseNavigate } from 'react-router-dom'; 
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Welcome from './Welcome';
import Changepwd from './Changepwd';
import Orgtree from './Orgtree';
import OrganisationTree from './OrganisationTree';
import Searchemp from './Searchemp';
import Createmeeting from './Createmeeting';
import Showmeeting from './Showmeeting';

function App() {
  return (
<>

<BrowserRouter>
<Logo/>
<Navbar/>
<div className='page-container'>
<div className='content-wrap'>
<Routes>
  <Route path="/" element={<Maincontent />} />
   <Route path="/Login" element={<Login />} />
   <Route path="/Aboutus" element={<Aboutus />} />
   <Route path="/Contactus" element={<Contactus />} />
   <Route path="/Welcome" element={<Welcome />} />
   <Route path="/Changepwd" element={<Changepwd />} />
   {/* <Route path="/Orgtree" element={<Orgtree />} /> */}
   <Route path="/Createemp" element={<Createemp />} />
   <Route path="/Deleteemp" element={<Deleteemp />} />
   <Route path="/OrganisationTree" element={<OrganisationTree />} />
   <Route path="/Searchemp" element={<Searchemp />} />
   <Route path="/Createmeeting" element={<Createmeeting />} />
   <Route path="/Showmeeting" element={< Showmeeting/>} />
    
   </Routes>
<Footer/>
</div>

</div>
</BrowserRouter>

</>

     );
}

export default App;
