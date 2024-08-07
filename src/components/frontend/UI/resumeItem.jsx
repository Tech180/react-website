import React, { useState, useEffect } from 'react';
import DarkSwitch from './toggle/darkswitch';

function ResumeItem(props) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const [darkMode] = DarkSwitch();

  const styles = () => (
    <style jsx>{`
      .cardsItems,
      .cardsItems-dark {
        padding-top: 20px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex: 1;
        margin: 0 1 1 1rem;
        border-radius: 10px;
        cursor: pointer;
        background-color: #242424;
        transition: transform 0.3s ease-in-out;
      }
    
      .cardsItems-dark {
        background-color: #F4F4F4;
      }

      .cardsItems:hover,
      .cardsItems-dark:hover {
        transform: scale(1.02);
      }
      
      .cardsItems_link,
      .cardsItems_link-dark {
        display: flex;
        flex-flow: column;
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        text-decoration: none;
      }
      
      .cardsItems_pic-wrap,
      .cardsItems_pic-wrap-dark {
        position: relative;
        padding-top: 67%;
        overflow: hidden;
      }
      
      .cardsItems_pic-wrap::after,
      .cardsItems_pic-wrap-dark::after {
        content: attr(data-category);
        position: absolute;
        bottom: 0;
        margin-left: 10px;
        padding: 6px 10px;
        font-size: auto;
        box-sizing: border-box;
        border-radius: 15%;
      }
      
      .cardsItems_img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: block;
        width: 100%;
        max-width: 100%;
        height: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: top center;
      }
    
      .cardsItems_img.expanded {
        object-fit: contain;
        transition: 0.3s ease-out;
      }
      
      .cardsItems_info,
      .cardsItems_info-dark {
        padding: 20px 30px 30px;
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        pointer-events: none;
      }
      
      .cardsItems_text,
      .cardsItems_text-dark {
        color: #F4F4F4;
        font-size: 18px;
        line-height: 24px;
      }
    
      .cardsItems_text-dark {
        color: #242424;
      }
      
      @media (max-width: 5000px) {
        .cardsItems,
        .cardsItems-dark {
          width: 50%;
        }

        .cardsItems_pic-wrap.expanded,
        .cardsItems_pic-wrap-dark.expanded {
          height: 45vw;
        }
      }

      @media (max-width: 3000px) {
        .cardsItems,
        .cardsItems-dark {
          width: 50%;
        }

        .cardsItems_pic-wrap.expanded,
        .cardsItems_pic-wrap-dark.expanded {
          height: 45vw;
        }
      }

      @media (max-width: 2500px) {
        .cardsItems,
        .cardsItems-dark {
          width: 50%;
        }

        .cardsItems_pic-wrap.expanded,
        .cardsItems_pic-wrap-dark.expanded {
          height: 45vw;
        }
      }

      @media (max-width: 2000px) {
        .cardsItems,
        .cardsItems-dark {
          width: 50%;
        }

        .cardsItems_pic-wrap.expanded,
        .cardsItems_pic-wrap-dark.expanded {
          height: 45vw;
        }
      }

      @media (max-width: 1500px) {
        .cardsItems,
        .cardsItems-dark {
          width: 70%;
        }

        .cardsItems_pic-wrap.expanded,
        .cardsItems_pic-wrap-dark.expanded {
          height: 55vw;
        }
      }

      @media (max-width: 1250px) {
        .cardsItems,
        .cardsItems-dark {
          width: 75%;
        }

        .cardsItems_pic-wrap.expanded,
        .cardsItems_pic-wrap-dark.expanded {
          height: 60vw;
        }
      }

      @media (max-width: 1000px) {
        .cardsItems,
        .cardsItems-dark {
          width: 110%;
        }

        .cardsItems_pic-wrap.expanded,
        .cardsItems_pic-wrap-dark.expanded {
          height: 80vw;
        }
      }

      @media (max-width: 800px) {
        .cardsItems,
        .cardsItems-dark {
          width: 80%;
        }

        .cardsItems_pic-wrap.expanded,
        .cardsItems_pic-wrap-dark.expanded {
          height: 60vw;
        }
      }


      @media (max-width: 600px) {
        .cardsItems,
        .cardsItems-dark {
          width: 90%;
        }

        .cardsItems_pic-wrap.expanded,
        .cardsItems_pic-wrap-dark.expanded {
          height: 90vw;
        }
      }


    `}</style>

  );

  return (
    <>
      <li className={`${darkMode ? 'cardsItems-dark' : 'cardsItems'} ${expanded ? 'expanded' : ''}`} onClick={handleClick}>
        <a
          className='cardsItems_link'
          href={props.path}
          target='_blank'
          rel='noopener noreferrer'
        >
          <figure className={`${darkMode ? 'cardsItems_pic-wrap-dark' : 'cardsItems_pic-wrap'} ${expanded ? 'expanded' : ''}`} data-category={props.label}>
            <img
              className={`cardsItems_img ${darkMode ? 'cardsItems_img-dark' : ''} ${expanded ? 'expanded' : ''}`}
              alt='Resume'
              src={props.src}
            />
          </figure>
          <div className={darkMode ? 'cardsItems_info-dark' : 'cardsItems_info'}>
            <h5 className={darkMode ? 'cardsItems_text-dark' : 'cardsItems_text'}>
              {expanded ? 'Click again to go back to reduced view!' : props.text}
            </h5>
          </div>
        </a>
      </li>
      {styles()}
    </>
  );
}

export default ResumeItem;
