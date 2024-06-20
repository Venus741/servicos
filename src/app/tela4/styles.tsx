import { BackHandler, StyleSheet } from "react-native";

export default StyleSheet.create({
    principal_container: {
        backgroundColor: "purple",
        height: "100%",
        width: "100%",
        alignItems: "center",
    },

    appbar: {
        backgroundColor: "yellow",
        width: "100%",
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"


        
    },

    back_button: {
        width: "40%",
        height: 30,
        justifyContent: "center",

    },

    title_bar: {
        width: "60%",
        height: 30,
        justifyContent: "center",
        paddingTop: 4,
        fontSize: 15,
        fontWeight: "bold",

    },

    text_button_back: {
        fontSize: 15,
        fontWeight: "bold",
        paddingLeft: 18,
    },

    main_container: {
        width: "100%",
        height: 600,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },

    card_info: {
        backgroundColor: "cyan ",
        width: "90%",
        height: 30,
        justifyContent: "space-around",
        flexDirection: "row",
    },

    date: {
        height: 30,
        width: "30%",
        backgroundColor: "blue"
    },

    cvv: {
        height: 30,
        width: "30%",
        backgroundColor: "blue"
    },

    container_card_number: {
        width: "90%",
        height: 20,

    },

    card_number: {
        width: "80%",
        height: 20,

    },

    container_credit_debit: {
        width: "90%",
        height: 20,
    },

    confirm_container: {
        width: "90%",
        height: 20,
    },

    confirm_button: {
        width: "90%",
        height: 20,
    },

    text_button_confirm: {

    }

    });