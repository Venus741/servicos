import { BackHandler, StyleSheet } from "react-native";

export default StyleSheet.create({
    principal_container: {
        height: "100%",
        width: "100%",
        alignItems: "center",
    },

    appbar: {
        backgroundColor: "#1E90FF",
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
        fontSize: 18,
        fontWeight: "bold",
        color: "white",

    },

    text_button_back: {
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 18,
        color: "white"
    },

    image_container: {
        height: 150,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        

    },

    image: {
        height: 90,
        width: 90,
    },

    main_container: {
        width: "100%",
        height: 690,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
        marginTop: 100
    },

    card_info: {
        backgroundColor: "cyan ",
        width: "90%",
        height: 70,
        justifyContent: "space-around",
        flexDirection: "row",
        
    },

    date: {
        height: 40,
        width: "30%",
        backgroundColor: "#c4c4c4",
        padding: 6,
        borderRadius: 4,

    },

    cvv: {
        height: 40,
        width: "30%",
        backgroundColor: "#c4c4c4",
        padding: 6,
        borderRadius: 4,
    },

    container_card_number: {
        width: "90%",
        height: 40,
        alignItems: "center"

    },

    card_number: {
        width: "80%",
        height: 40,
        backgroundColor: "#c4c4c4",
        padding: 6,
        borderRadius: 4,

    },

    container_credit_debit: {
        width: "90%",
        height: 20,
    },

    confirm_container: {
        width: "90%",
        height: 40,
        alignItems: "center",
        margin: 20
    },

    confirm_button: {
        width: "60%",
        height: 40,
        backgroundColor: "#1E90FF",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },

    text_button_confirm: {
        fontSize: 15,
        color: "white",


    }

    });