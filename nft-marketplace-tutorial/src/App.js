import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

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
      {punkListData.length > 0 && (
        <>
          <Main selectedPunk={selectedPunk} punkListData={punkListData} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
