import React from 'react';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
    return (
      <div> 
      <div className='cards'>
        <h1>Experiences and Collaborated Projects</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
               <CardItem
                src='/image-2.jpg'
                text='Undergraduate Innovation and Research Scheme: Drone Control and Navigation Management in Smart 
                Manufacturing'
                path = '/' //project1
              />
              <CardItem
                src='/image-3.jpg'
                text='CLP Generator Inspection Robot : Fabricate a robust inspection robot to examine the generator health without removing the rotor'
                path = '/' //project2
              />
            <CardItem
                src='/image-1.jpg'
                text='Bera Tiles: Mobile Application includes Sri Lankan traditional drums'
                path = '/' //project3
              />
              
              
            </ul>
            <ul className='cards__items'>
            
              
              
            </ul>
          </div>
        </div>
      </div>
      </div>
    );
  }

export default Cards;
