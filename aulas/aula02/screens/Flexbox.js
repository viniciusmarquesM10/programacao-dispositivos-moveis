import { View } from "react-native";

function Flexbox() {
  return <View style={{ flex : 1,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "streatch",
  backgroundColor: "green"}} >

    <View style={{
        marginTop: 100,
        width: "100%",
        borderColor: "white",
        borderWidth: 2,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
       backgroundColor: "blue" }}>
    </View>
  <View style={{height:50, width: 50, backgroundColor: "red" }}>
  </View>
  <View style={{height:50, width: 50, backgroundColor: "brown" }}></View>
  </View>; 
}

export default Flexbox;