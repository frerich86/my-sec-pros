import { FaArrowsToCircle } from "react-icons/fa6";
import blues from './img/blues.jpg'
import img2 from './img/photo.jpg'
import key from './img/key.jpg'
import wires from './img/wires.jpg'
import alpha from './img/alpha.jpg'
import nature from './img/nature.jpg'
import sweet from './img/sweet.jpg'
import img9 from './img/9.jpg'
import ice from './img/ice.jpg'
import img11 from './img/11.jpg'
import img12 from './img/12.jpg'

function Home() {
    return(
    <div className="banner-onthe_top">
        <div className="nav">
          <div className="logo"><p>KAAYIITRE</p></div>
           <nav>
            <a href="">Home</a>
            <a href="./Header">About</a>
            <a href="./Contact">Contact</a>
            <a href="./Service">Service</a>
           </nav>
           <div className="paragraph"><p type="button">MENU</p></div>
        </div>
        <div className="banner">
            <h1>MY SITE</h1>
        </div>
       
           <header>
           <ul>
                <h3>Casing creative works online</h3>
                <li>Welcome to my site, where creativity meets functionality.</li>
                <li>Also you see some family members are required inside the site</li>
                <li>Explore adviser range of project and design that represent my unique<br></br>
                    and passion for innovative solutions <style></style></li>
            </ul>
            <div className="icon">
            <FaArrowsToCircle />
            </div>
           </header>
            <div className="right-classic-img">
            <img src={img2} alt="" />
        </div>
        {/* </fieldset> */}
        <div className="about-page">
         <h3>Futuristic Design Station</h3>
         <p>WEelcome to our stations. Here you'll find a sekection of my work.Expole my  <br></br>
         projects to learn more about what i do. <br></br>
       </p>
       <div className="const">
       <div className="other-sides-pase">
        <h3>Blue Aestheetics</h3>
        <img src={blues} alt="" />
       </div>
       <div className="one-sides-page">
       <img src={key} alt="" />
       <h3>Y Boxes</h3>
       </div>
       </div>
       <div className="const">
       <div className="other-sides-pase">
        <h3>Noen close-Ups</h3>
        <img src={wires} alt="" />
       </div>
       <div className="one-sides-page">
       <img src={alpha} alt="" />
       <h3>Alpha Source Conference</h3>
       </div>
       </div>
       <div className="const">
       <div className="other-sides-pase">
        <h3>Imaginative Nature</h3>
        <img src={nature} alt="" />
       </div>
       <div className="sides-page">
       <img src={sweet} alt="" />
       <h3>Web Design: Sweet Harmony music feetivel</h3>
       </div>
       </div>
        </div>
        <div className="socialmades">
         <h1>SocialMedia</h1>
         <div className="social-img">
           <img src={img9} alt="" />
           <img src={ice} alt="" />
           <img src={img11} alt="" />
           <img src={img12} alt="" />
         </div>
        </div>
        <div className="services">
            <h2>Services</h2>
            <p>What I Offer</p>
            <p className="par-org">my station showcases a collection of my service includes web design,
            branding.and digital marketing .Each project is a testament to my commitment to
            excellence and creativity</p>
        </div>
             <table row={2} border={1}>
                <tr>
                  <th>Web Design</th>
                  <th>Graphic Design</th>
                </tr>
                <tr>
                    <td>Crafting Digital Expriences</td>
                    <td>Visual Storytelling</td>
                </tr>
                <tr>
                    <td>With expertise in user-cenrtic design, I create Visually<br></br>
                appealing websites that provide seamless user expriences.<br></br>
                from concept to excution each websites reflects my attetion <br></br>
                to detail and passion for innovation.</td>
                <td>Graphicdesign is at the heart of what I do.Convey<br></br>
                messages visually through engaging design that capture<br></br>
                attetion and communicate effectively.Every design is a  <br></br>
                blend of creativity and strategy.</td>
                </tr>
                <tr>
                  <th>Branding</th>
                  <th>Digital marketing</th>
                </tr>
                <tr>
                    <td>Bluilding Memorable Brand</td>
                    <td>Driving Online Success</td>
                </tr>
                <tr>
                    <td>strong brand are built on a solid foundation of stratgy and<br></br>
                creativity.Through brand development and strategy, I help<br></br>
                bussines establish a unique identity that resonates with<br></br>
                thier target audience.</td>
                <td>in digital world marketing is essential . I reverage digital <br></br>
                channels to promote business,increase brand awareness,<br></br>
                and drive engagement. Through data driven sttrategies,I help  <br></br>
                businesses achieve thier marking goals</td>
                </tr>
             </table>
             <div className="footer">
                <div className="left-sides-footer">
                <h4>My Site</h4>
                <h3>My Site</h3>
                <p>Email*2</p>
                <span></span>
                <div className=""><p>yes,subscribe me to your newsletter</p></div>
                </div>
                <div className="right-sides-footer">
                    {/* <br /><br /><br /><br /><br /> */}
                    <p>call</p>
                    <p>Email</p>
                    <p>123 station street.city<br/>
                    Country 12345</p>
                </div>
        </div>

    </div>
    );
}
export default Home;