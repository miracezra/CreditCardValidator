//#region Imports
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useData } from '../context/DataContext';
import validateCreditCard from "test-creditcardvalidator" //kendi yazdığım validasyonum
import { styles } from '../assets/css/FillCard.style';
//#endregion
const FillCard = () => {

    //#region Constants
    const { setCardNumber, setName, setValidMonth, setValidYear, setCvv, setIsFlipped } = useData();
    const [newData, setNewData] = useState({
        cardNumber: '',
        name: '',
        validMonth: '',
        validYear: '',
        cvv: '',
    });
    //#endregion

    //#region Alert Fonksiyonu
    //Alert Fonksiyonunu daha kısa çağrmak için bir fonksiyon
    const errorFunc = (title, message) => {
        Alert.alert(title, message, [{
            text: "Anladım", onPress: () => console.log("Alert Kapatıldı")
        }])
    }
    //#endregion
    //#region Tüm dataları atama kısmı
    const handleUpdateData = () => {
        //boş geçilemez kontrolümü yapıyorum
        if (newData.cardNumber != '' && newData.name != '' && newData.validMonth != '' && newData.validYear != '' && newData.cvv != '') {
            //kredi Kartı numarası doğru ise diğer atama işlemlerini yapıyor
            if (validateCreditCard(newData.cardNumber) == true) {
                setCardNumber(newData.cardNumber);

                //ay Geçerliliğini 1-12 arasında kontrol ettim
                newData.validMonth <= 12 && newData.validMonth >= 1 ? setValidMonth(newData.validMonth) : errorFunc('Ay Değeri Hatalı', 'Ay değerini 1-12 arasında giriniz')

                //10 yıllık bir kart geçerlilik süresi tanımladım internette baktığımda farklı tarihler gördüm 
                newData.validYear >= 2023 && newData.validYear <= 2033 ? setValidYear(newData.validYear) : errorFunc('Yıl Değer Girişi', 'Yıl Değerini 4 haneli ve 2023-2033 Tarihleri Arasında Giriniz')

                setCvv(newData.cvv);
                setName(newData.name);
            }
            else {
                errorFunc('Kart Numarası Hatası', 'Kredi Kart Numaranız Hatalı')

            }
            setIsFlipped(false)
        }
        else {
            errorFunc('Boş Bırakılamaz', 'Lütfen Tüm Alanları Doğru ve Eksiksiz Doldurduğunuzdan Emin olunuz')
        }
    };
    //#endregion
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Kart Bilgileriniz</Text>
            <TextInput style={[styles.textInput]}
                placeholder={"Kart Numaranızı Giriniz"}
                keyboardType='number-pad'
                maxLength={16}
                onChangeText={(value) => setNewData({ ...newData, cardNumber: value })}
                returnKeyType="done"
            />

            <TextInput
                style={styles.textInput}
                placeholder={"Adınızı Giriniz"}
                keyboardType="name-phone-pad"
                onChangeText={(value) => setNewData({ ...newData, name: value })}
                returnKeyType="done"
            />
            <View style={{ flexDirection: 'row' }}>
                <TextInput style={styles.validInput}
                    placeholder={"Ay"}
                    keyboardType="number-pad"
                    onChangeText={(value) => setNewData({ ...newData, validMonth: value })}
                    returnKeyType="done"
                    maxLength={2}
                />
                <TextInput style={[styles.validInput, { marginLeft: 5 }]}
                    placeholder={"Yıl 2023"}
                    keyboardType="number-pad"
                    onChangeText={(value) => setNewData({ ...newData, validYear: value })}
                    returnKeyType="done"
                    maxLength={4}

                />
                <Text style={styles.cvvLabel}>Cvv</Text>
                <TextInput style={[styles.validInput, { marginLeft: 15 }]}
                    onFocus={() => { setIsFlipped(true) }}
                    onBlur={() => { setIsFlipped(false) }}
                    keyboardType="number-pad"
                    maxLength={3}
                    onChangeText={(value) => setNewData({ ...newData, cvv: value })}
                    returnKeyType="done"
                />
            </View>
            <TouchableOpacity style={styles.validateButton} onPress={handleUpdateData} >
                <Text style={styles.validateButtonText}>Kart Bilgilerimi Doğrula</Text>
            </TouchableOpacity>
        </View>
    );
}


export default FillCard;
