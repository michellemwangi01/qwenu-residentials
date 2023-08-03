import React from "react";
function Footer(){
return (
    <div>
          <footer>
        <div id="quik">
            <h2>QuickLinks</h2>
                <ul>
                    <div style={{listStyle:"none"}}>
                <li class="list-group-item">ABOUT US</li>
                <li class="list-group-item">CONTACT US</li>
                <li class="list-group-item">FACEBOOK</li>
                <li class="list-group-item">INSTAGRAM</li>
                </div>
                </ul>
        </div>
                 
        <div class="icons">
            <h2>Social Media platforms</h2>
            <i class="fa fa-facebook" style={{fontSize:"48px"}}></i>
            <i class="fa fa-instagram"  style={{fontSize:"48px"}}></i>
            <i class="fa fa-twitter"  style={{fontSize:"48px"}}></i>
        </div>
       
    </footer>
    </div>
)
}
export default Footer;