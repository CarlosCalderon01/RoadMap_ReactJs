import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { app } from '../Api/ConnectFireBase.Js'
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'SF');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

export default getCities