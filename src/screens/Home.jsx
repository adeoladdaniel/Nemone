import React from "react";
// import Seo from "../shared/Seo";
import Navbar from "../components/Navbar"
import { Container } from "react-bootstrap";
import {Users} from "../components/users.js"
import { useState } from "react";
// import ContactForm from "./contact";






function Home(){


  const [query, setQuery] = useState("");
  // console.log(query)

    return(

        <React.Fragment>

            {/* <Seo page="Home"> */}
              <Navbar/>

              <div className="side_decor">
                <img src="asset/img/Group 156 (1).svg" className="sider_img" alt="stripes"/>

              </div>

              <Container>

                <div className="section">
                <span className="header_text"> Menu</span>

                <form className="search_box">
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.275 2.714a8.561 8.561 0 1 1 0 17.122 8.561 8.561 0 0 1 0-17.122ZM19.899 18.488a1.411 1.411 0 1 1-.001 2.822 1.411 1.411 0 0 1 .001-2.822Z" stroke="#989fa5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  <input placeholder="Search..... "
                   onChange={(e) => setQuery(e.target.value)} 
                   />
                  <button> Search  </button>

                </form>

                {/* <button className="loader"> Load Iphone</button> */}
                </div>
                {Users.filter(user=>user.header_text.toLowerCase().includes(query)).map((user)=>(
                     <div className="food_section">
                     <div>
                      <div className="l_section">
                       <img src={user.img} width="14%" alt="foodimg"/> 
                       <div className="l_text_section">
                       <h5 key={user.id}>{user.header_text}</h5>
                       <p  >{user.paragragh}</p>
                       <span> {user.price}</span> 
                      <a href="/contact">  <button>{user.button}</button> </a>
                       </div>
                       
                       </div>
                       
                     </div>
   
                   </div>
                  
                ))}
             
  
        {/* <ContactForm /> */}
           
              </Container>
            


            {/* </Seo> */}
          
        </React.Fragment>
    );
}

export default Home;