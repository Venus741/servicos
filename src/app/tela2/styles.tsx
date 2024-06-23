import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 0,
        alignItems: "center",
        flex: 1
        
    },

    appBar: {
        width: "100%",
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#1E90FF",
        padding: 15,
        marginTop: 30,
        


    },

    userIcon: {
        width: 45,
        height: 45,
        margin: 10
    },

    userName: {
        fontSize: 20,
        color: "white"
    },
    
    options_service: {
        backgroundColor: "white", //cor da view em que estãos as rows
        height: 698,
        width: "100%",
        padding: 10,
    },

    info_box: {
        justifyContent: "center",
        height: 30,
    },

    info_text: {
        fontWeight: "bold",
        textAlign: "center",
        
    },

    list_buttons: {
        padding: 3,
        backgroundColor: "white", // cor da row  em que estão os dois botoes em cada linha
        height: 600,

        
    },
    row: {
        backgroundColor: "white",
        justifyContent: "space-around",
        flexDirection: "row",
        marginBottom: 3

    },
    button1: {
        flex: 1,
        margin: 3,
        aspectRatio: 1,
        padding: 2,
        backgroundColor: "#1E90FF", // cor do botão
        textAlign: "center",
        fontWeight: "bold"
    },
    TextButtons: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 75,
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        
      },
});