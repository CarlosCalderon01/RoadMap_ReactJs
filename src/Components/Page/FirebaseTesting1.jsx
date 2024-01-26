import { useEffect, useState } from 'react';
import getCities from '../Api/getCitiesFIle';

function FirebaseTesting1() {
  const [citiesData, setCitiesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCities();
        setCitiesData(data);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className='component_FirebaseTesting1'>
      <div className='component_Contenido'>
        <p>{JSON.stringify(citiesData)}</p>
      </div>
    </div>
  );
}

export default FirebaseTesting1;
