import React, {createContext, useContext, useState} from 'react';
const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({children}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [validMonth, setValidMonth] = useState('');
  const [validYear, setValidYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <DataContext.Provider
      value={{
        cardNumber,
        setCardNumber,
        name,
        setName,
        validMonth,
        setValidMonth,
        validYear,
        setValidYear,
        cvv,
        setCvv,
        isFlipped,
        setIsFlipped,
      }}>
      {children}
    </DataContext.Provider>
  );
};
