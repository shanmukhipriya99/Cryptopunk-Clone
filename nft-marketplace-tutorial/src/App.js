import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';

function App() {
  const [punkListData, setPunkListData] = useState([]);

  const getMyNFTs = async () => {
    const openSeaData = await axios.get(
      'https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0xb1bb5732D99C458222302faCB4cD7F925d79A073&order_direction=asc&offset=0'
    );
    setPunkListData(openSeaData.data.assets);
  };

  useEffect(() => {
    getMyNFTs();
  }, []);

  return (
    <div className='app'>
      <Header />
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
