import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    principal_container: {
        backgroundColor: "#1E90FF",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    components: {
        backgroundColor: "grey",
        height: 600,
        width: 370,
        justifyContent: 'center',
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
        backgroundColor: "#1E90FF",
        textAlign: "center",
        alignItems: "center",
        width: "50%",
        height: "5%",
        margin: 20,
        marginLeft: 90,
        padding: 4
    },
    text_button: {
        color: "white",
        fontWeight: "bold",
    }

})
export default styles;