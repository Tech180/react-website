import React from 'react';
import './cards.css';
import CardItem from './cardItem';

function cards() {
  return (
    <div className='cards'>
      <h1>Check out what I have been up to!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/mnt/Backup/website/public/images/img-home.jpg'
              text='Explore my GitHub and check out some of the projects that i&apos;ve working on!'
              label='GitHub'
              path='/resume'
            />
            <CardItem
              src='/mnt/Backup/website/public/images/img-home.jpg'
              text='Check out my profile!'
              label='LinkedIn'
              path='/resume'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/mnt/Backup/website/public/images/img-home.jpg'
              text='Want to know what my past looks like? Look no further!'
              label='Resume'
              path='/resume'
            />
            <CardItem
              src='/mnt/Backup/website/public/images/img-home.jpg'
              text='Feel like stalking my personal life? Got ya covered ;)'
              label='Facebook'
              path='/about'
            />
            <CardItem
              src='/mnt/Backup/website/public/images/img-home.jpg'
              text='If your really trying to dig deep... Then I guess you could look here too.'
              label='Instagram'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default cards;