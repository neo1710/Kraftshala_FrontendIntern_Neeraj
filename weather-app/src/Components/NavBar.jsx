import styled from "styled-components";
import "./Nav.css";

 export const NavBar=()=>{


    const handleClick = () => {
        // Scroll to the bottom of the page on image click
        window.scrollTo(0,400);
      }
return <DIV>
<div className="nav1" >
<h2 className='logo'>W E A T H E R</h2>

</div>

<div className="nav2">

<div className="navBut" onClick={handleClick}><button >Get Started</button></div>
</div>

</DIV>

}


const DIV=styled.div`
display:flex;
*font-family: "Outfit", sans-serif;
width:100%;
justify-content:space-between;

align-items:center;
.nav1{
display:flex;
width:50%;
justify-content:space-around;
align-items:baseline;

}

.nav2{
display:flex;
width:40%;
justify-content:space-around;
align-items:center;
}

.navBut{
width:50%;
height:40px;
Padding:13px, 24px, 11px, 24px;
display:flex;
align-items:center;
justify-content:space-around;
filter:blur;
 background-image: linear-gradient(to right, orange,red)
}

.navBut>button{
color: #FFFFFF;
width:80%;
background:transparent;
filter:blur;
border:black;
}

.logo {
 font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  height: 25px; 
 
  color: #FFFFFF;


}

.nav1>div{
color: #FFFFFF;
height:24px;
}



`