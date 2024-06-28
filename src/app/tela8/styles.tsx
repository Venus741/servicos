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

    main_container: {
        width: "100%",
        height: "40%",
        justifyContent: "center",

    },

    input: {
        backgroundColor: "#c4c4c4",
        width: 300,
        height: 50,
        borderRadius: 7,
        margin: 10,
        marginLeft: 45,
        paddingLeft: 15,


    },

    button_container: {
        width:"100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },

    button: {
        backgroundColor: "#1E90FF",
        width: 190,
        height: 50,
        justifyContent: "center",
        borderRadius: 7,

    },

    text_button: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",

    },



});