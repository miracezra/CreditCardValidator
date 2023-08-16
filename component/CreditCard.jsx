//#region Imports
import React from 'react';
import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../assets/css/CreditCard.style';
import { useData } from '../context/DataContext';

//#endregion
const CreditCard = () => {
    //#region Constants

    //context'ten gelen veriler
    const { cardNumber, name, validMonth, validYear, cvv, isFlipped } = useData();
   
    //kartın başlangıç numarasına göre banka imagenin gelmesini sağlayan yer
    const getCardType = (cardNumber) => {
        if (cardNumber.startsWith('4')) {
            return require("../assets/img/visa.png");
        } else if (cardNumber.startsWith('9')) {
            return require("../assets/img/troy.png");
        } else if (cardNumber.startsWith('5')) {
            return require("../assets/img/masterCard.png");
        } else if (cardNumber.startsWith('3')) {
            return require("../assets/img/amex.png");
        }
    };
    //Banka kart numarasının kontrolünü sağlar
    const cardTypeImage = getCardType(cardNumber);

    //Kredi Kart Numarasını 4 lü gösterme regex'i
    const formatCardNumber = (cardNumber) => {
        const groups = cardNumber.match(/.{1,4}/g);
        if (groups) {
            return groups.join(' ');
        }
        return cardNumber;
    };
    //#endregion
    return (
        <>
            {isFlipped ?
                <LinearGradient colors={['#454598', '#0b93af']} style={styles.container} >
                    <View style={styles.cvv}>
                        <View style={styles.cvvTextArea}>
                            <Text style={{ fontSize: 20, fontStyle: "italic", top: 3, right: 15 }}>Cvv
                            </Text><Text style={styles.cvvNumberText}>{formatCardNumber(cvv)}
                            </Text>
                        </View>
                    </View>
                </LinearGradient> :

                <LinearGradient colors={['#454598', '#0b93af']} style={styles.container} >
                    <View style={styles.bankAndChip}>
                        {
                            <Image style={cardTypeImage && styles.bank} source={getCardType(cardNumber)} />
                        }
                        <Image style={styles.chip}
                            source={require("../assets/img/chipCard.png")} />
                    </View>
                    <View style={styles.cardNumber}>
                        <Text style={styles.cardNumberText}>{formatCardNumber(cardNumber)}</Text>
                    </View>
                    <View style={styles.cardNameAndValid}>
                        <Text style={styles.cardNameText}>{name.toUpperCase()}</Text>
                        <View style={styles.cardValid}>
                            <Text style={styles.validLabel}>Valid Thru</Text>
                            <Text style={styles.validDate}>{`${validMonth}/${validYear}`}</Text>
                        </View>
                    </View>
                    <View>

                    </View>
                </LinearGradient>
            }
        </>

    );
}


export default CreditCard;
