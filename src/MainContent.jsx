import React from 'react';
import './MainContent.css';
import self from './Component/Assets/self.jpg';
import { TiSocialInstagram, TiSocialYoutube,TiSocialPinterest, TiSocialFacebook } from "react-icons/ti";

function MainContent() {
  return (
    <main>
      <div className="hero-section">
        <h2><span>TIE </span> & DYE IN</h2>
           <p>GHANA</p>
      </div>
      <div className='description'>
      <div>
        <h2 className='section-wrap'>section</h2>
      </div>
      <hr className='horizon'/>
        <h2>DESCRIPTION</h2>
        <p>The West African country of Senegal is renowned for its terenga--a Wolof word roughly translated as hospitality but with shades of meaning that include respect, community and sharing. In fact, the national soccer team is called the Lions of Teranga.
           Senegal takes pride in its religious tolerance and culture of peace. Most Senegalese are Muslim, but some are Christian, and this provides opportunities to observe Muslim-Christian relations in another culture. An SST experience in Senegal challenges American stereotypes about Islam and offers the opportunity to learn about peacemaking from a Muslim perspective. For example, students participate in an annual festival where Muslim and Christian neighbors visit each other offering food and asking for forgiveness for whatever may have transpired between them that year.</p>
          
           <div className='image'></div>
           <img src={self} alt="Author" className="author-image" />
        </div>
        <div className='Program'>
         <div>
        <h2>Program Overview</h2>
        <h3>Upcoming terms & Trip Leaders</h3>
         <p>MAY - JUNE - JULY</p>

         <h3>Courses Included</h3>
          <p>course 1</p>
         </div>
         <div>
         <h3>Theme(s)</h3>
         </div>

        </div>
      
      <div className='footer'>
      <div className='footer-head'>
        <h2>The Batik Training</h2>
        <p>Goshen is a nationally-ranked college and Hispanic-Serving Institution in Indiana renowned for its distinctive hands-on, real-world educational opportunities that educate the head and heart, and prepare graduates to create positive change in the community and the world.</p>
        </div>
        <div className='additional-info'>
       <div className='direction'>
       <p>Map and direction</p>
       <p>Bookstore</p>
       <p>employment</p>
       </div>
        <div className='socials'>
        <ul>
            <li><a href="#"><i class="fa fa-instagram"><TiSocialInstagram /></i></a></li>
            <li><a href="#"><i class="fa fa-youtube"><TiSocialYoutube /></i></a></li>
            <li><a href="#"><i class="fa fa-facebook"><TiSocialFacebook /></i></a></li>
            <li><a href="#"><i class="fa fa-pintrest"><TiSocialPinterest /></i></a></li>
          </ul>
          
          </div>
          </div>
          </div>
          
    </main>
  );
}

export default MainContent;
