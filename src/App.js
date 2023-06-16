import './App.css';
import Login from './components/login/login';
import Technical from './components/technical/technical';
import Nav from "./components/navbar/navbar";
import Main from "./components/mainpage/main";
import Reg from './components/register/reg';
import { BrowserRouter , Routes , Route, Router } from 'react-router-dom';
import Home from './components/home/home';
import Frontend from './components/frontend/frontend';
// import BackEnd from './components/backend/backend';
import FullStack from './components/fullstack/fullstack';
import Operatingsystem from './components/operatingsystem/operatingsystem';
import About from './components/about/about';
import Cart from './components/bookcart/bookcart';
import Inner_IOT from './components/innercard/inner_iot';
import Inner_CLOUD from './components/innercard/inner_cloud';
import Inner_DS from './components/innercard/inner_ds';
import Inner_ML from './components/innercard/inner_ml';
import Inner_DL from './components/innercard/inner_dl';
import Inner_AI from './components/innercard/inner_ai';
import Inner_AR from './components/innercard/inner_ar';
import Inner_VR from './components/innercard/inner_vr';
import Inner_power_bi from './components/innercard/inner_power_bi';
import Inner_BIO from './components/innercard/inner_bio';
import Inner_Windows from './components/innercard/inner_windows';
import Inner_mac from './components/innercard/inner_mac';
import Inner_linux from './components/innercard/inner_linux';
import Inner_ubuntu from './components/innercard/inner_ubuntu';
import Inner_cent from './components/innercard/inner_cent';
import Inner_chrome from './components/innercard/inner_chrome';
import Inner_bsd from './components/innercard/inner_bsd';
import Inner_unix from './components/innercard/inner_unix';
import Inner_deepin from './components/innercard/inner_deepin';
import Inner_fedora from './components/innercard/inner_fedora';
import Inner_js from './components/innercard/inner_js';
import Inner_html from './components/innercard/inner_html';
import Inner_php from './components/innercard/inner_php';
import Inner_java from './components/innercard/inner_java';
import Inner_python from './components/innercard/inner_python';
import Inner_jsserver from './components/innercard/inner_jsserver';
import Inner_sql from './components/innercard/inner_mysql';
import Inner_nosql from './components/innercard/inner_nosql';
import Inner_mongodb from './components/innercard/inner_mongodb';
import Inner_express from './components/innercard/inner_express';
import Inner_flutter from './components/innercard/inner_flutter';
import Inner_reactjs from './components/innercard/inner_reactjs';
import Inner_angular from './components/innercard/inner_angular';
import Inner_reactnative from './components/innercard/inner_reactnative'
import Inner_bootstrap from './components/innercard/inner_bootstrap'
import PaymentPage from './components/payment/payment';
import Inner_npm from './components/innercard/inner_npm';
import Inner_ionic from './components/innercard/inner_ionic';
import Inner_vue from './components/innercard/inner_vue';
import Inner_typescript from './components/innercard/inner_typescript';
import Inner_next from './components/innercard/inner_next';
import Coding from './components/coding/coding';
import Inner_c from './components/innercard/inner_c';
import Inner_cplus from './components/innercard/inner_c++';
import Inner_r from './components/innercard/inner_r';
import Inner_Sharp from './components/innercard/inner_sharp';
import Inner_perl from './components/innercard/inner_perl';

function App() {
    return(
         <>
         {/* <Main/> */}
         <BrowserRouter>
         <Nav/>     
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Reg/>}/>
            <Route path='/about' element={<About/>}/>     
            <Route path='/cart' element={<Cart/>}/>          
            <Route path='/home' element={<Home/>}/>
            <Route path='/pay' element={<PaymentPage/>}/>
            <Route path='/technical' element={<Technical/>}/>
            <Route path='/fullstack' element={<FullStack/>}/>
            <Route path='/frontend' element={<Frontend/>}/>
            {/* <Route path='/backend' element={<BackEnd/>}/>  */}
            <Route path='/os' element={<Operatingsystem/>}/> 
            <Route path='/coding' element={<Coding/>}/> 
            <Route path='/iot' element={<Inner_IOT/>}/>
            <Route path='/csharp' element={<Inner_Sharp/>}/>
            <Route path='/c++' element={<Inner_cplus/>}/>
            <Route path='/perl' element={<Inner_perl/>}/>
            <Route path='/c' element={<Inner_c/>}/>
            <Route path='/r' element={<Inner_r/>}/>
            <Route path='/npm' element={<Inner_npm/>}/>
            <Route path='/vue' element={<Inner_vue/>}/>
            <Route path='/cloud' element={<Inner_CLOUD/>}/>
            <Route path='/ionic' element={<Inner_ionic/>}/>
            <Route path='/nextjs' element={<Inner_next/>}/>
            <Route path='/typescript' element={<Inner_typescript/>}/>
            <Route path='/reactnative' element={<Inner_reactnative/>}/>
            <Route path='/bootstrap' element={<Inner_bootstrap/>}/>
            <Route path='/angular' element={<Inner_angular/>}/>
            <Route path='/flutter' element={<Inner_flutter/>}/>
            <Route path='/jsserver' element={<Inner_jsserver/>}/>
            <Route path='/mysql' element={<Inner_sql/>}/>
            <Route path='/python' element={<Inner_python/>}/>
            <Route path='/ds' element={<Inner_DS/>}/>
            <Route path='/java' element={<Inner_java/>}/>
            <Route path='/reactjs' element={<Inner_reactjs/>}/>
            <Route path='/ml' element={<Inner_ML/>}/>
            <Route path='/php' element={<Inner_php/>}/>
            <Route path='/nosql' element={<Inner_nosql/>}/>
            <Route path='/mongo' element={<Inner_mongodb/>}/>
            <Route path='/expressjs' element={<Inner_express/>}/>
            <Route path='/dl' element={<Inner_DL/>}/>
            <Route path='/ai' element={<Inner_AI/>}/>
            <Route path='/ar' element={<Inner_AR/>}/>
            <Route path='/vr' element={<Inner_VR/>}/>
            <Route path='/js' element={<Inner_js/>}/>
            <Route path='/html' element={<Inner_html/>}/>
            <Route path='/bi' element={<Inner_power_bi/>}/>
            <Route path='/btech' element={<Inner_BIO/>}/>
            <Route path='/win' element={<Inner_Windows/>}/>
            <Route path='/mac' element={<Inner_mac/>}/>
            <Route path='/linux' element={<Inner_linux/>}/>
            <Route path='/ubuntu' element={<Inner_ubuntu/>}/>
            <Route path='/cent' element={<Inner_cent/>}/>
            <Route path='/chrome' element={<Inner_chrome/>}/>
            <Route path='/bsd' element={<Inner_bsd/>}/>
            <Route path='/unix' element={<Inner_unix/>}/>
            <Route path='/deepin' element={<Inner_deepin/>}/>
            <Route path='/fedora' element={<Inner_fedora/>}/>
           
          </Routes> 
         </BrowserRouter>
         </>
    );
    
}
export default App;