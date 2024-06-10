import styled from "styled-components";


 export const Footer=()=>{



return <DIV>
<div className="nav1" >
<h2 className='logo'>W E A T H E R</h2>

</div>
<div className="nav12">
   < h3>This website is free and its only for the use of Checking Weather details of different locations.</h3>
</div>
<div className="nav2">

<div className="navBut"><button >Contact</button></div>
</div>

</DIV>

}


const DIV=styled.div`
display:flex;
*font-family: "Outfit", sans-serif;
width:100%;
justify-content:space-between;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
margin-top:10px;

align-items:center;
.nav1{
display:flex;
width:30%;
justify-content:space-around;
align-items:baseline;

}
.nav12{
width:35%;
}


.nav2{
display:flex;
width:15%;
justify-content:space-around;
align-items:center;
}

.navBut{
width:45%;
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