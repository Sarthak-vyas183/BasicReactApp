import React from 'react'

function footer() {
  return (
    <div className='footer'>
       <section className="head"> Foodies' Adda ! Restaurant </section>
        <section className='container'>
            <div>
               <h3>About Foodies' Adda</h3>
               <ul>
                <li>who we are</li>
                <li>Blog</li>
                <li>work with us</li>
                <li>Investor Relations</li>
                <li>Report Froud</li>
                <li>Press kit</li>
                <li>contact us</li>
               </ul>
                </div>
            <div>
             <h3>Our Franchise :</h3>
             <ul>
                <li>Bhopal - head </li>
                <li>Indore</li>
                <li>lucknow</li>
                <li>Delhi</li>
                <li>Mumbai</li>
             </ul>
            </div>
            <div>
                <h3>Learn More : </h3>
                 <ul>
                    <li>Privacy</li>
                    <li>Security</li>
                    <li>Terms</li>
                    <li>Sitemap</li> 
                 </ul>
            </div>
            <div>
                <h3>Social link : </h3>
                <ul className='social-link'>
                    <a href="/"><i class="fa-brands fa-facebook"></i></a>
                    <a href="/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="/"><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="/"><i class="fa-brands fa-youtube"></i></a>
                </ul>
            </div>
       </section>
       <div className='policy'>
        <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2023-2024 © Foodies' Adda™ Ltd. All rights reserved.</p>
        </div> 
     
    </div>
  )
}

export default footer
