import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
export default createGlobalStyle`
  :root {
    --primary-color: #FFF;
    --second-color: #071B66;
    --bg-color: linear-gradient(90deg, #071B66 0%, #10338C 30.95%, #00AEEF 95.83%);
    --text-primary: #00AEEF;
    --gradient: linear-gradient(90deg, #071B66 0%, #10338C 30.95%, #00AEEF 95.83%);
    font-size: 62.5%;
  } 
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }
    
  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    background: var(--primary-color);
  } 
`;
