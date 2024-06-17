import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    principal_container: {
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    components: {
        backgroundColor: "#1E90FF",
        height: 600,
        width: 370,
        justifyContent: 'center',
        borderRadius: 15
    },

    image_view: {
        backgroundColor: "white",
        height: 120,
        width: 120,
        marginLeft: 125,
        alignItems: "center",
        marginTop: 0,
        borderRadius: 65
    },

    image_logo:{
        height: 135,
        width: 135,
        margin: 0
    },

    login: {
        backgroundColor: "white",
        margin: 10,
        marginLeft: 25,
        height: 50,
        width: "86%",
        textAlign: "left",
        borderRadius: 5,
        padding: 13,
        

    },
    security_row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "white",
        height: 50,
        width: "86%",
        marginLeft: 25,
        borderRadius: 5,

    },
    password: {
        backgroundColor: "white",
        margin: 10,
        height: 50,
        width: "75%",
        borderRadius: 5,
        padding: 2,
        marginLeft: 3,
        borderColor: "black",
    },
    security_eye: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    enter_button: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: "8%",
        margin: 20,
        marginLeft: 90,
        padding: 4,
        borderRadius: 4,
    },
    text_button: {
        color: "black",
        fontWeight: "bold",
        fontSize: 15,
    }

})
export default styles;