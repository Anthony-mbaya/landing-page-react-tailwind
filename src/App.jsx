import React from 'react';
import "./App.css";
import { FaFacebook,FaYoutube,FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';
import logo from './media/logo.svg';
import avatar_ali from './media/avatar-ali.png';
import avatar_anisha from './media/avatar-anisha.png';
import avatar_richard from './media/avatar-richard.png'; 
import hamburger_icon from './media/icon-hamburger.svg';
import illustration from './media/illustration-intro.svg'; 


export const App = () => {
  return (
    <div class="mycontainer">
      <div class="navbar">
        <span class="logo-menu">
          <img src={logo} alt="manage logo" class="icon" />
          <img src={hamburger_icon} alt="menu icon" class="menu" />
        </span>
        <ul class="nav-items">
          <li>Pricing</li>
          <li>Product</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Community</li>
        </ul>
        <button class="start-btn">Get Started</button>
      </div>

      <div class="welcome-disp">
        <div class="disp1">
          <h2>Bring everyone together to build better products.</h2>
          <p>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button>Get Started</button>
        </div>
        <div class="disp2">
          <img src={illustration} alt="illustration-intro" />
        </div>
      </div>
      <div class="info-page">
        <div class="info1">
          <h2>What’s different about Manage?</h2>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div class="info2">
          <div class="point">
            <span class="point-head">
              <p>01</p>
              <h3>Track company-wide progress</h3>
            </span>

            <h4>
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </h4>
          </div>
          <div class="point">
            <span class="point-head">
              <p>02</p>
              <h3>Advanced built-in reports</h3>
            </span>

            <h4>
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </h4>
          </div>

          <div class="point">
            <span class="point-head">
              <p>03</p>
              <h3>Everything you need in one place</h3>
            </span>
            <h4>
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </h4>
          </div>
        </div>
      </div>
      <div class="profiles">
        <h1>What they’ve said</h1>
        <div class="members">
          <div class="anisha">
            <span>
              <img src={avatar_anisha} alt="anisha image" />
            </span>
            <h4>Anisha Li</h4>
            <p>
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          <div class="bravo">
            <span>
              <img src={avatar_ali} alt="bravo image" />
            </span>
            <h4>Ali Bravo</h4>
            <p>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
            <div class="dots">
              <div></div>
              <div class="index2"></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="richards">
            <span>
              <img src={avatar_richard} alt="richards image" />
            </span>
            <h4>Richard Watts</h4>
            <p>
              “Manage allows us to provide structure and process. It keeps us
              organized and focused. I can’t stop recommending them to everyone
              I talk to!”
            </p>
          </div>
        </div>
        <button class="footer-btn">Get Started</button>
      </div>
      <div class="comment">
        <h2>Simplify how your team works today.</h2>
        <button>Get Started</button>
      </div>
      <div class="footer">
        <div class="bar1">
          <p>Copyright 2050. All Rights Reserved</p>
          <span>
            <img src={logo} alt="manage logo" />
          </span>
          <ul>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaPinterest />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
        <div class="middlebars">
          <div class="bar2">
            <ul>
              <li>Home</li>
              <li>Pricing</li>
              <li>Products</li>
              <li>About Us</li>
            </ul>
          </div>
          <div class="bar3">
            <ul>
              <li>Careers</li>
              <li>Community</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div class="bar4">
          <div class="inputs">
            <input type="email" placeholder="Updates in your inbox…" />
            <button>Go</button>
          </div>
          <p>Copyright 2050. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};
