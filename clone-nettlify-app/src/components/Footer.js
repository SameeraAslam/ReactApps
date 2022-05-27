import React from "react";
import logo from '../images/appLogo.png';

function Footer(){
    return(
        <footer class="ct-footer">
        <div className="container">
          <form name="contentForm" method="post" action="">
            <div class="ct-footer-pre text-center-lg">
              <div class="inner">
                <span>Join MetaVerse to receive updates, news & events!</span>
              </div>
              <div class="inner">
                <div class="form-group">
                  <input name="formfields[nl_email]" id="nl_email" class="validate[required]" placeholder="Enter your email address" 
                  type="text" value="" /> <label for="nl_email" class="sr-only" >Email Address</label> <button type="submit" class="btn btn-motive">Join</button>
                </div>
              </div>
            </div>
          </form>
          <ul class="ct-footer-list text-center-sm">
            <li>
              <h2 class="ct-footer-list-header">Learn More</h2>
              <ul>
                <li>
                  <a href="">Company</a>
                </li>
                <li>
                  <a href="">Clients</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
              </ul>
            </li>
            <li>
              <h2 class="ct-footer-list-header">Services</h2>
              <ul>
                <li>
                  <a href="">Design</a>
                </li>
                <li>
                  <a href="">Marketing</a>
                </li>
                <li>
                  <a href="">Sales</a>
                </li>
                <li>
                  <a href="">Programming</a>
                </li>
                <li>
                  <a href="">Support</a>
                </li>
              </ul>
            </li>
            <li>
              <h2 class="ct-footer-list-header">The Industry</h2>
              <ul>
                <li>
                  <a href="">Thought Leadership</a>
                </li>
                <li>
                  <a href="">Webinars</a>
                </li>
                <li>
                  <a href="">Events</a>
                </li>
                <li>
                  <a href="">Sponsorships</a>
                </li>
                <li>
                  <a href="">Advisors</a>
                </li>
                <li>
                  <a href="">Training Program</a>
                </li>
                <li>
                  <a href="">Activities & Campaigns</a>
                </li>
              </ul>
            </li>
            <li>
              <h2 class="ct-footer-list-header">Public Relations</h2>
              <ul>
                <li>
                  <a href="">R.A.B.P Blog</a>
                </li>
                <li>
                  <a href="">Hackathons</a>
                </li>
                <li>
                  <a href="">Videos</a>
                </li>
                <li>
                  <a href="">News Releases</a>
                </li>
                <li>
                  <a href="">Newsletters</a>
                </li>
              </ul>
            </li>
            <li>
              <h2 class="ct-footer-list-header">About</h2>
              <ul>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Our Board</a>
                </li>
                <li>
                  <a href="">Our Staff</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="ct-footer-meta text-center-sm">
            <div class="row">
              <div class="col-sm-6 col-md-2">
                <img alt="logo" src={logo} />
              </div>
              <div class="col-sm-6 col-md-3">
                
              </div>
            
              
            </div>
            
          </div>
          
        </div>
        <div class="ct-footer-post">
          <div class="container">
            <div class="inner-left">
              <ul>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="inner-right">
              <p>Copyright © 2022 Refined Apes Block Party (R.A.B.P) .&nbsp;<a href="">Privacy Policy</a></p>
            
            </div>
          </div>
        </div>
        
      </footer>

    );
}
export default Footer;