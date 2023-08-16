//#region Imports
import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { styles } from './assets/css/Index.style';

import CreditCard from './component/CreditCard';
import FillCard from './component/FillCard';
import { DataProvider } from './context/DataContext';
//#endregion
const App = () => {
  return (
    <DataProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{`Muhammed Miraç Ergenç\nKredi Kartı Numara Validasyon Uygulaması`}</Text>
        <CreditCard />
        <FillCard />
      </SafeAreaView>
    </DataProvider>
  );
}



export default App;
