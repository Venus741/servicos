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

    image_container: {
        height: 80,
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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        
    },
    enter_containers: {
        justifyContent: "center",
        width: "90%",
        height: "70%",
        padding: 5

    },

    input_container: {
        padding: 7
    },

    input: {
        backgroundColor: "#c4c4c4",
        width: "100%",
        height: 70,
        fontSize: 18,
        borderRadius: 7,
        padding: 10
    },

    num_container: {
        padding: 7,
    },

    num_input: {
        backgroundColor: "#c4c4c4",
        borderRadius: 7,
        height: 70,
        fontSize: 18,

    },

    complement_container: {
        backgroundColor: "#c4c4c4",
        borderRadius: 7,
        width: "98%",
    },

    complement_input: {
        height: 70,
        fontSize: 15,

    },

    button: {
        backgroundColor: "#1E90FF",
        width: "80%",
        height: "7%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,

    },

    text_button: {
        color: "white",
        fontSize: 15,

    },
    

});