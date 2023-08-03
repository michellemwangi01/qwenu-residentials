import React from "react";
function Footer(){
return (
    <div>
          <footer>
        <div id="quik">
            <h2>Team and Policies</h2>
                <ul>
                    <div style={{listStyle:"none"}}>
                <li class="list-group-item">Terms of service</li>
                <li class="list-group-item">Privacy policy</li>
                <li class="list-group-item">Security</li>
                <li class="list-group-item">Location</li>
                </div>
                </ul>
        </div>
                <div>
                    <h2>Features</h2>
                    <ul>
                    <div style={{listStyle:"none"}}>
                        <li>Home</li>
                        <li>Become a Host</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        </div>
                    </ul>
                    </div> 

                    <div>
                    <h2>Company</h2>
                    <ul>
                    <div style={{listStyle:"none"}}>
                        <li>About us</li>
                        <li>Press</li>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Services</li>
                        </div>
                    </ul>
                    </div> 



        <div class="icons" style={{listStyle:"none"}}>
            <h2>Social Media platforms</h2>
            <li>instagram</li>
            <li>facebook</li>
            <li>twitter</li>
            <i class="fa fa-facebook" style={{fontSize:"35px"}}></i>
            <i class="fa fa-instagram"  style={{fontSize:"35px"}}></i>
            <i class="fa fa-twitter"  style={{fontSize:"35px"}}></i>
        </div>
       
    </footer>
    </div>
)
}
export default Footer;