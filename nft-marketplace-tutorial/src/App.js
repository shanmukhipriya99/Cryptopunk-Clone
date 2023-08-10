import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [punkListData, setPunkListData] = useState([]);

  const getMyNFTs = async () => {
    const openSeaData = await axios.get(
      'https://testnets-api.opensea.io/assets?asset_contract_address=0x653D5eea31667C9f97c0B08C99ebF4c8f5715c1D&order_direction=asc'
    );
    setPunkListData(openSeaData.data.assets);
  };

  useEffect(() => {
    getMyNFTs();
  }, []);

  return (
    <div className='app'>
      <Header />
      <CollectionCard
        id={0}
        name={'Bandana Punk'}
        traits={[{ value: 8 }]}
        image='https://i.seadn.io/gcs/files/2d0b5e43da4cce75eb525e4509fa6ec1.jpg?auto=format&dpr=1&w=1000'
      />
    </div>
  );
}

export default App;
