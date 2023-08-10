import React, { useState, useEffect } from 'react';
import insta from '../assets/owner/instagram.png';
import twitter from '../assets/owner/twitter.png';
import more from '../assets/owner/more.png';
import './Main.css';

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className='main'>
      <div className='mainContent'>
        <div className='punkHighlight'>
          <div className='punkContainer'>
            <img
              className='selectedPunk'
              src={activePunk.image_url}
              alt='SelectedNFTimage'
            />
          </div>
        </div>
        <div className='punkDetails' style={{ color: '#fff' }}>
          <div className='title'>{activePunk.name}</div>
          <span className='itemNumber'>#{activePunk.token_id}</span>
          <div className='ownerNameAndHandle'>
            <div className='ownerAddress'>{activePunk.creator.address}</div>
            <div className='ownerHandle'>@ShanmukhiPriya</div>
          </div>
        </div>
        <div className='socialMedia'>
          <div className='ownerLink'>
            <img src={insta} alt='' />
          </div>
          <div className='ownerLink'>
            <img src={twitter} alt='' />
          </div>
          <div className='ownerLink'>
            <img src={more} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
