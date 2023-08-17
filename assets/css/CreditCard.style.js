import { Dimensions, StyleSheet } from "react-native"

const width = Dimensions.get('screen').width

export const styles = StyleSheet.create({
    container: {
        width: width - 20,
        height: (width-20) / 1.586,
        borderRadius: 10,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    bankAndChip: {
        flexDirection: 'row',
        width: width - 20,
        justifyContent: "space-between",
        height: 70,
        top: 15
    },
    chip: {
        width: 55,
        height: 55,
        top: 10,
        right: 15
    },
    bank: {
        width: 95,
        height: 45,
        top: 15, left: 25
    },
    cardNumber: {
        width: width - 20,
        height: 70,
        justifyContent: 'center',
    },
    cardNumberText: {
        fontSize: 25,
        fontWeight: "bold",
        left: 25
    },
    cardNameAndValid: {
        flexDirection: "row",
        width: width - 20,
        height: 70,
        justifyContent: "space-between",
        alignItems: "center",

    },
    cardNameText: {
        left: 15,
        fontSize: 18,
        fontWeight: "bold"
    },
    cardValid: {
        right: 15,
        flexDirection: 'column',
        alignItems: 'center'
    },
    validLabel: {
        fontSize: 16,
        fontWeight: "bold"
    },
    validDate: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    cvv: {
        flexDirection: 'row',
        width: width - 20,
        height: 35,
        backgroundColor: "gray",
        top: 55,
        justifyContent: "flex-end",
    },
    cvvNumberText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
        fontStyle: "italic",

    },
    cvvTextArea: {
        flexDirection: 'row',
        width: width / 2,
    }

})