import React,{useContext} from 'react';
import "./header.scss"
import { Container,Row,Col } from 'react-bootstrap';
import Logo from "../../assets/images/logo.png"
import PostLogo from "../../assets/images/post-logo.svg"
import {FiSearch} from 'react-icons/fi';
import {BsPlusLg} from 'react-icons/bs';
import {MdOutlineArrowForwardIos} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useNavigate,useLocation } from 'react-router-dom';
import {VscArrowLeft} from "react-icons/vsc"
import { GlobalContext } from '../../Context';


const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {setSignUpModalOpen} = useContext(GlobalContext)
    
    const onloginPopup = ()=>{
        setSignUpModalOpen(true)
        document.querySelector("body").style.overflowY = "hidden"
    }

    const checkSubMenu = 
  (location.pathname === "/post" || location.pathname === "/attributes"  ? 
    null : 
    <ul className="sub-menu">
    <li>
      <a href="">
      <svg xmlns="http://www.w3.org/2000/svg"  height="24" viewBox="0 0 48 20" alt="OLX Mall" ><path d="M3.04 16.93v-6.45a.47.47 0 0 1 .25-.41 1.85 1.85 0 0 1-1.62-1.83V8.2a.17.17 0 0 1 0-.03v-.02-.04l.01-.04L3.3 3.64a.18.18 0 0 1 0-.02l.02-.04.03-.05.01-.01.01-.02a.17.17 0 0 1 .02-.02.17.17 0 0 1 .02-.02l.04-.03.13.16-.13-.17.03-.02h.01l.01-.01.08-.04h.02l.02-.01H17.1l.03.01h.01l.06.03.01.01.02.01.04.03.04.04v.01l.02.02.01.02h.01l.02.04.01.02.01.02.01.02v.01l1.63 4.46v.03l.01.03v.1a1.85 1.85 0 0 1-1.64 1.82.47.47 0 0 1 .28.42v6.44H3.03zm.68-6.87a.47.47 0 0 1 .26.42v5.5h12.76v-5.5a.47.47 0 0 1 .27-.42 1.83 1.83 0 0 1-1.16-.6 1.83 1.83 0 0 1-1.37.61 1.83 1.83 0 0 1-1.38-.61A1.83 1.83 0 0 1 11 9.9a1.83 1.83 0 0 1-.63-.45 1.84 1.84 0 0 1-2.73 0 1.83 1.83 0 0 1-1.38.61 1.83 1.83 0 0 1-1.37-.61 1.83 1.83 0 0 1-1.16.6zM16.3 8.07l.02.09v.05a.9.9 0 0 0 1.8.1l-1.48-4.05h-1.21l.87 3.81zm-2.72.14v.02a.9.9 0 0 0 .9.9.9.9 0 0 0 .9-.85l-.92-4.02h-1.17l.3 3.95zm-2.74.02a.9.9 0 0 0 .9.9.9.9 0 0 0 .9-.88l-.3-3.99h-1.5v3.97zm-2.74.02a.9.9 0 0 0 1.8-.02V4.26h-1.5l-.3 3.99zm-2.74.03a.9.9 0 0 0 .9.85.9.9 0 0 0 .9-.92V8.2l.29-3.94H6.27l-.92 4.02zm-2.74.03a.9.9 0 0 0 1.53.56.9.9 0 0 0 .27-.64v-.08a.25.25 0 0 1 0-.03l.89-3.85H4.08L2.61 8.3zM24 13.48h1.14V8.72l2.13 4.76h.79l2.12-4.76v4.76h1.14V6.53H30.1l-2.43 5.45-2.44-5.45H24v6.95zm13.5 0h1.2l-2.48-6.96H34.9l-2.5 6.96h1.2l.5-1.42H37l.5 1.42zm-.81-2.35h-2.27l1.14-3.23 1.13 3.23zm3.1-4.6v6.95h3.5v-.92h-2.36V6.53H39.8zm4.44 0v6.95h3.5v-.92h-2.36V6.53h-1.14z"></path></svg> 
      </a>
    </li>
    <li>
      <a href="">
     <svg xmlns="http://www.w3.org/2000/svg"  height="24" viewBox="0 0 66 20" alt="OLX Motors" ><path d="M4.9 10a1.33 1.33 0 1 0 0 2.66 1.33 1.33 0 0 0 0-2.67zm0 1.8a.48.48 0 1 1 0-.95.48.48 0 0 1 0 .96zM15.65 10a1.33 1.33 0 1 0 0 2.66 1.33 1.33 0 0 0 0-2.67zm0 1.8a.48.48 0 1 1 0-.95.48.48 0 0 1 0 .96zm-2.03.22H7v.85h6.63v-.85zM24 13.48h1.14V8.72l2.13 4.76h.79l2.12-4.76v4.76h1.14V6.53H30.1l-2.43 5.45-2.44-5.45H24v6.95zM39.54 10a3.46 3.46 0 0 0-3.55-3.55A3.48 3.48 0 0 0 32.44 10a3.48 3.48 0 0 0 3.55 3.56A3.47 3.47 0 0 0 39.54 10zm-5.93 0c0-1.57 1-2.55 2.38-2.55s2.38.98 2.38 2.55c0 1.57-1 2.57-2.38 2.57s-2.38-1-2.38-2.57zm6.69-2.53h1.86v6.02h1.14V7.46h1.85v-.93H40.3v.93zM53.02 10a3.46 3.46 0 0 0-3.55-3.55A3.48 3.48 0 0 0 45.94 10a3.48 3.48 0 0 0 3.55 3.56A3.47 3.47 0 0 0 53.02 10zm-5.93 0c0-1.57 1-2.55 2.38-2.55s2.39.98 2.39 2.55c0 1.57-1 2.57-2.38 2.57s-2.38-1-2.38-2.57zm10.75-1.38c0 .7-.4 1.18-1.3 1.18H55.3V7.46h1.26c.89 0 1.29.45 1.29 1.15zm-3.7-2.08v6.95h1.15V10.7h.87l1.6 2.79h1.36L57.4 10.6A1.98 1.98 0 0 0 59 8.63c0-1.13-.8-2.08-2.45-2.08h-2.4zm11.02 4.98c0-2.54-3.68-1.56-3.68-3.13 0-.67.5-.99 1.17-.97.72.02 1.13.45 1.17.92h1.26c-.1-1.19-1.04-1.89-2.37-1.89-1.42 0-2.4.76-2.4 1.98 0 2.56 3.7 1.47 3.7 3.15 0 .6-.45 1.02-1.25 1.02s-1.2-.46-1.24-1.03H60.3c0 1.23 1.07 2 2.46 2 1.55 0 2.4-1 2.4-2.05z"></path><path d="M19.09 7.26a1.23 1.23 0 0 0-1.54-.8l-.68.21L15.7 4.2l-.37-.12a17.75 17.75 0 0 0-5.3-.74 13.32 13.32 0 0 0-4.84.76l-.33.13-1.12 2.6-.48-.16a1.23 1.23 0 1 0-.74 2.34l.1.03-.08.14a4.5 4.5 0 0 0-.45 1.67c-.01.27 0 .82.02 1.35l.01 2.96v.03c-.02.26.01.53.08.8a.82.82 0 0 0 .83.54h1.75a.82.82 0 0 0 .82-.55c.07-.26.1-.53.09-.8v-.32c2.04.18 3.35.27 4.64.27 1.29 0 2.55-.09 4.5-.26v.32c-.02.26.01.53.09.8a.82.82 0 0 0 .82.54h1.75a.81.81 0 0 0 .82-.55c.08-.26.1-.53.09-.8V12.24c.05-.54.09-1.1.08-1.42A4.14 4.14 0 0 0 18 9.07l-.08-.16.35-.1a1.23 1.23 0 0 0 .8-1.55zM5.5 4.89h.02a12.48 12.48 0 0 1 4.5-.7c1.7-.02 3.4.21 5.03.7h.03l.96 2.03a19.57 19.57 0 0 1-4.74.46h-.79a31.31 31.31 0 0 1-5.94-.33l.93-2.16zm-.67 10.3a2.41 2.41 0 0 1-.03.48H3a2.4 2.4 0 0 1-.03-.49v-.64c.12.06.25.1.38.1l1.48.14v.4zm12.72-.04v.04a2.39 2.39 0 0 1-.03.48h-1.8a2.41 2.41 0 0 1-.03-.49v-.4l1.39-.12c.17-.02.33-.07.47-.15v.64zM18.03 8l-1.3.41.52 1.06c.22.43.35.9.38 1.37 0 .27-.03.78-.06 1.25h-.01v.15l-.05.78c-.01.32-.21.78-.51.8-3.32.32-4.99.47-6.67.47-1.7 0-3.43-.16-6.9-.47-.21-.02-.35-.36-.4-.66a11.35 11.35 0 0 1-.07-.97v-.1a18.51 18.51 0 0 1-.02-1.2 3.6 3.6 0 0 1 .36-1.3l.57-1.03-1.09-.34a.37.37 0 0 1 .23-.72l1.21.39.01-.03c1.82.32 3.66.45 5.5.39h1.57a19.82 19.82 0 0 0 5.12-.52l1.4-.44a.38.38 0 0 1 .46.24.37.37 0 0 1-.25.47z"></path></svg>
      </a>
    </li>
    <li>
        <a href="">
        <svg xmlns="http://www.w3.org/2000/svg"  height="24" viewBox="0 0 73 20" alt="OLX Property" ><path d="M17.42 17.72H2.5V16.7h.4V2.5h8.47v14.21h5.04v-8.7l-4.03-1.35V5.6l5.04 1.68v9.43h.4v1h-.4zM3.92 16.7h6.44V3.51H3.91v13.2zm10.31-2.94v-.81h.82v.81h-.82zm-1.63 0v-.81h.82v.81h-.82zm-4.88 0v-.81h1.63v.81H7.72zm-2.45 0v-.81H6.9v.81H5.27zm8.96-2.44v-.81h.82v.81h-.82zm-1.63 0v-.81h.82v.81h-.82zm-4.88 0v-.81h1.63v.81H7.72zm-2.45 0v-.81H6.9v.81H5.27zm8.96-1.63V8.9h.82v.81h-.82zm-1.63 0V8.9h.82v.81h-.82zm-4.88 0V8.9h1.63v.81H7.72zm-2.45 0V8.9H6.9v.81H5.27zm2.45-2.44v-.82h1.63v.82H7.7zm-2.45 0v-.82H6.9v.82H5.27zm2.45-1.63v-.81h1.63v.8H7.7zm-2.45 0v-.81H6.9v.8H5.27zm19.87 4.1V7.46h1.26c.89 0 1.29.42 1.29 1.14 0 .7-.4 1.14-1.29 1.14h-1.26zm3.72-1.13c0-1.12-.81-2.06-2.46-2.06H24v6.95h1.14v-2.83h1.26c1.81 0 2.46-1.07 2.46-2.06zm4.78.02c0 .69-.4 1.18-1.3 1.18H31.1V7.46h1.26c.89 0 1.29.45 1.29 1.15zm-3.7-2.08v6.95h1.15V10.7h.87l1.6 2.79h1.36L33.2 10.6a1.98 1.98 0 0 0 1.6-1.98c0-1.13-.8-2.08-2.45-2.08h-2.4zM43 10a3.46 3.46 0 0 0-3.55-3.55A3.48 3.48 0 0 0 35.89 10a3.48 3.48 0 0 0 3.55 3.56A3.47 3.47 0 0 0 42.99 10zm-5.93 0c0-1.57 1-2.55 2.38-2.55s2.38.98 2.38 2.55c0 1.57-1 2.57-2.38 2.57s-2.38-1-2.38-2.57zm8.19-.26V7.47h1.26c.89 0 1.29.42 1.29 1.14 0 .7-.4 1.13-1.3 1.13h-1.25zm3.72-1.13c0-1.13-.81-2.07-2.46-2.07h-2.4v6.95h1.14v-2.83h1.26c1.8 0 2.46-1.07 2.46-2.06zm4.92-2.08h-3.84v6.96h3.84v-.94h-2.7v-2.13h2.4V9.5h-2.4V7.46h2.7v-.93zM59 8.6c0 .7-.4 1.19-1.3 1.19h-1.25V7.46h1.26c.89 0 1.29.45 1.29 1.15zm-3.7-2.07v6.95h1.15V10.7h.87l1.6 2.79h1.36l-1.72-2.89a1.98 1.98 0 0 0 1.6-1.98c0-1.13-.8-2.08-2.45-2.08h-2.4zm5.97.93h1.86v6.01h1.14V7.46h1.85v-.93h-4.85v.93zm7.71 3.5v2.51h1.14v-2.52l2.3-4.43h-1.26l-1.6 3.42-1.62-3.41h-1.27l2.31 4.42z"></path></svg> 
        </a>
    </li>
   </ul> )

   const checkHeaderBottom = (
   location.pathname === "/post" || location.pathname === "/attributes"  ?
   null :
   <div className="header-bottom">
                    <Row>
                       <Col md={3}>
                         <div className="searchbycity">
                          
                               <FiSearch/>
                                <select name="" id="">
                                    <option value="" >Search City</option>
                                </select>
                          
                         </div>
                       </Col> 
                       <Col md={7}>

                           <div className="search-fld">
                               <input type="text" name="search-items" placeholder='Find Cars, Mobile Phones and more....' />
                                <button type='click'>
                                <FiSearch/>
                                </button>
                          
                           </div>
                       
                       </Col> 
                       <Col md={2}>
                           <div className="header-btn">
                              <button onClick={onloginPopup}>
                                  Login
                              </button>
                              <button className="sellButton" onClick={()=>navigate("/post")}>
                                   <BsPlusLg/> SELL
                              </button>
                           </div>
                       
                       </Col>  
                    </Row> 
    </div>
   )

  
  return (
     <header className={location.pathname === "/post" || location.pathname === "/attributes" ? 'main_header header-post' : "main_header"}>
         <Container>
             <Row className="align-items-center">
                 <div className="header-top">
                  <Row>   
                 <Col md={6} className="p-0">
                     <div className="header-top-wrapper">
                     {location.pathname === "/post" || location.pathname === "/attributes" ?  <VscArrowLeft className="vsArrow" onClick={()=>navigate("/")}/> : null }
                     <div className="logo">
                         {location.pathname === "/post" || location.pathname === "/attributes" ?
                         <Link to="/"><img src={PostLogo} alt="logo"/></Link> :
                         
                         <Link to="/"><img src={Logo} alt="logo"/></Link> 
                         }
                     </div>
                         {checkSubMenu}
                         
                         </div>
                   
                 </Col>
                 <Col md={6}></Col>
                 </Row>
                 </div> 
                   { checkHeaderBottom}
                  


             </Row>
         </Container>
         
     </header>
  )
};

export default Header;