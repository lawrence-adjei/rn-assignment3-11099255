import { View, Button,StyleSheet ,Text,Image, ImageBase } from "react-native";

function Header(){
  return(
    <View style={styles.frame}>
      <View>
        <Text style={styles.hello}>Hello, Devs</Text>
        <Text>14 task today</Text>
      </View>
      <View style={styles.imgStyle}>
        <Image source={require("../assets/person.png")}/>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  frame:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:20 
  },
  hello:{
    fontSize:20,
    fontWeight:"bold",
    marginVertical:2
  },
  imgStyle:{
    backgroundColor:"white",
    width:50,
    height:50,
    borderRadius:50,
    display:"flex", 
    justifyContent:"center",
    alignItems:"center",
  }
})
export default Header;