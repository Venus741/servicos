import { StyleSheet } from "react-native";

export default StyleSheet.create({
    principal_container: {
        
        backgroundColor: "white",
        justifyContent: "center",
      },

      container_title: {
        backgroundColor: "#FFFF00",
        height: 100,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20

      },

      title: {
        fontSize: 18,
        color: "black",
        marginTop: 20,
        fontWeight: 'bold',
      },

      extreme_buttons_title: {
        fontSize: 18,
        fontWeight: "bold",
      },

      extreme_buttons: {
        justifyContent: "center",
        marginTop: 18
      },

      scrollViewContent: {
        flexGrow: 1,
        paddingBottom: 15,
        height: "140%"
      },

      list_service: {
        flex: 1,
        backgroundColor: "white",
      },

      item: {
        height: 50,
        width: "90%",
        backgroundColor: "#1E90FF",
        marginLeft: 20,
        marginTop: 15,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
      },

      selectedItem: {
        backgroundColor: "blue",
      },

      text: {
        fontWeight: "bold",
        color: "white",
      },

      container_confirm: {
        backgroundColor: "white",
        height: 120,
        justifyContent: "center",
        alignItems: "center",
      },

      confirm_button: {
        backgroundColor: "#1E90FF",
        height: 50,
        width: 200,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -50
      },

      text_confirm_button: {
        fontSize: 20,
        color: "white",
      },
      
    });