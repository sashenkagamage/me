import React from 'react';
import HeroSection from './HeroSection';
import "../App.css"
import Cards from './Cards';
import './mainCon.css';
import Navbar from './navbar';
import Footer from './Footer'; 
import { Link } from 'react-router-dom';

function Home(){
    return(
        <>
        <div id='main'>
        <HeroSection/>
        </div>
        < div id='aboutme'>
        <div className='about-me_container'>
            <div className ='content'>
                <div className='about-me'>
                <div>
                <h1>About me</h1>
                <div className='about-me-text'>
                Little me was eager to show my new ultimate Lego robot to my parents, and after years, the same enthusiasm embraced me when my version of the Wall- E robot traced the black and white maze, avoiding objects. That’s where I decided to play with electronic circuits implementing real-world applications. 
                I am capable of adapting to new environments quickly and effectively. 
                I have a habit of trying out new methods, while improving myself and correcting my mistakes eagerly. 
                With all my passions, my main intention is to share and use my knowledge and experiences for the betterment of humankind

                </div>
                </div>
                
                <img src='/image-5.png' className='wrapper'/>
                </div>
                
                 
            </div>
        </div>
        </div>
        <div id='education'>
        <div className='education_container'>
            <div className ='content'>
                <h1>Education</h1>
                <div className="education">
            <ul className='education-text'>
            <h1>The Hong Kong Polytechnic University</h1>
                <h7>2022-2026</h7>
                <h3> Undergraduate majoring in BEng Hons Electronic Systems and Internet of Things</h3>
                <p>
                    <li className='education-text'>Secretary General - South Asian Society PolyU</li>
                    <li className='education-text'>Member of the PolyU Orchestra</li>
                </p>
                </ul> 
                <ul className='education-text'><h1>University of Cambridge, Girton College</h1>
                <h7>2023</h7>
                <h3> Girton College Engineering Summer Program</h3>
                <p className='education-text'>Engineering Course comprising three modules in cutting edge technologies, such as nanotechnology, jet engines, and quantum technologies</p>
                </ul>
                <ul className='education-text'>
                <h1>Visakha Vidyalaya, Colombo, Sri Lanka</h1>
                <h7>2007-2021</h7>
                <h3>High School</h3>
                <p className='education-text'>Completed Sri Lankan GCE Advanced Level, obtaining A passes in Combined Mathematics, Physics, and Chemistry</p>
                </ul>
            
            
                    </div>    
            </div>
        </div>
        </div>
        <div id='awards'>
        <div className='awards_container'>
        <h1 className='content'>Awards</h1>
            <div className ='content'> 
               <div className="awards">
               <div>
                <ul className='awards-text'>
                <h3> HKSAR Government Scolarship Fund Reaching Out Award</h3>
                <h7>2023</h7>
                <p className='awards-text'>Issued by Hong Kong SAR Government</p>
                </ul> 
                <ul className='awards-text'>
                <h3> Dean's Honors List</h3>
                <h7>2023</h7>
                <p className='awards-text'>Associated with The Hong Kong Polytechnic University</p>
                </ul> 
                <ul className='awards-text'>
                <h3> Belt and Road Scholarship</h3>
                <h7>2022-2026</h7>
                <p className='awards-text'>Associated with The Hong Kong Polytechnic University</p>
                </ul>
                <ul className='awards-text'>
                <h3> CURI Residential College Scholarship</h3>
                <h7>2023</h7>
                <p className='awards-text'>Associated with The Hong Kong Polytechnic University</p>
                </ul>
                
                </div>

                <div>
                <ul className='award-text'>
                <h3> PolyHack 2023: Third Place</h3>
                <h7>2023</h7>
                <p className='awards-text'>Introducing "GoPark" a web app where you can find the nearest parking slot.</p>
                </ul>
                <ul className='awards-text'>
                <h3> Idealize 2021 - Overall Championship: School Category</h3>
                <h7>2021</h7>
                <p className='awards-text'>Issued by AIESEC in University of Moratuwa</p>
                </ul>
                <ul className='awards-text'>
                <h3> Decipher 2021 - Champions</h3>
                <h7>2021</h7>
                <p className='awards-text'>Issued by AIESEC University of Sri Jayewardenepura</p>
                </ul>
                <ul className='awards-text'>
                <h3> Asia Pacific Innovation Challenge - Semifinalists</h3>
                <h7>2021</h7>
                <p className='awards-text'>Introducing ByeBias. platform to reduce the bias and discrimination in AI algorithms.</p>
                </ul>
               
                
                
                </div>
                <div>
                <ul className='awards-text'>
                <h3> Evolution AI 2nd Runner-Up</h3>
                <h7>2022</h7>
                <p className='awards-text'>Issued by AIESEC Sri Lanka</p>
                </ul>
                <ul className='awards-text'>
                <h3>Susan George Pulimood Memorial Award</h3>
                <h7>2021</h7>
                <p className='awards-text'>Academic Excellence in Physical Science and All Round Performance</p>
                </ul>
                <ul className='awards-text'>
                <h3>President's Guide</h3>
                <h7>2019</h7>
                <p className='awards-text'>Issued by Sri Lanka Girl Guides Association</p>
                </ul>
                <ul className='awards-text'>
                <h3>Upali Dias Memorial Award</h3>
                <h7>2017</h7>
                <p className='awards-text'>Best All Rounder Junior Secondary Section</p>
                </ul>
                </div>
                    </div>    
            </div>
        </div>
        </div>
        <div id='experiences'>
        <Cards />
        </div>
        <div id='music'>
        <div className='music_container'>
            <div className ='content'>
                <div className='music'>
                <div>
                <h1>Music</h1>
                <div className='music-text'>
               <p className='music-text'>I started playing violin when I was twelve years old, under the guidance of renowned musician Mr. Diliup Gabadamudalige. In 2016, I joined the Junior Symphony Orchestra of Sri Lanka and played several concerts in collaboration with the Symphony Orchestra of Sri Lanka under Mrs. Dushyanthi Perera. I was also a violinist in my school, Visakha Vidyalaya orchestra, from 2015 to 2020. Currently, I am learning music under famous violinist and musician Mr. Ananda Dabare. </p>
               <p className='music-text'>In 2022, I joined PolyU Orchestra, which is conducted by Mr. Kin Fung Leung, a world-class musician awarded outstanding recognition around the globe. So far, I have played in three major concerts, including Beethoven's Symphony No. 9 and the "I Love HK" concert. I am looking forward to playing with renowned soloists and musicians at PolyU Orchestra. </p>
                </div>
                </div>
                
                <img src='/image-7.png' className='wrapper'/>
                </div>
                
                 
            </div>
        </div>
        </div>
        <Footer/>
        </>
    );
}
export default Home;