import { BackHandler, StyleSheet } from "react-native";

export default StyleSheet.create({
    principal_container: {
        height: "100%",
        width: "100%",
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

    title_container: {
        width: "60%",
        height: 30,
        justifyContent: "center",
        paddingTop: 4,
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },

    title: {
        color: "white",
        fontSize: 19,
    },


    text_button_back: {
        fontSize: 19,
        paddingLeft: 18,
        color: "white"
    },
    
    options_container: {
        height: 600,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-evenly"

    },

    button: {
        height: 200,
        width: 310,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1E90FF",
        borderRadius: 7,
    },

    text_button: {
        color: "white",
        fontSize: 25
    },

    image1: {
        height: 90,
        width: 90,
    },

    image2: {
        height: 90,
        width: 90,
    },
    
});