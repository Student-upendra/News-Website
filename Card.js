import React from 'react';

function Card({ data }) {
  const readMore = (url) => {
    window.open(url, '_blank'); // open in new tab
  };

  return (
    <div className='CardContainer'>
      {data.map((curItem, index) => {
        // Skip item if image or title is missing
        if (!curItem || !curItem.urlToImage || !curItem.title) return null;

        return (
          <div key={index} className='card'>
            <img src={curItem.urlToImage} alt="news" />
            <div className='cardcontent'>
              <h3 className='content'>{curItem.title}</h3>
              
              <p className='title cata' onClick={() => readMore(curItem.url)}>
                {curItem.description}
              </p>
            
              <button  className='s'  onClick={() => readMore(curItem.url)}>Read More</button></div>
        
          </div>
        );
      })}
    </div>
  );
}

export default Card;
