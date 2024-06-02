import { View, Button,StyleSheet ,Text,Image, ImageBase, TextInput, TouchableOpacity } from "react-native";

function Search(){
  return(
    <View style={styles.searchFrame}>
      <View style={styles.search}>
        <Image source={require("../assets/mynaui_search.png")} />
        <TextInput placeholder="Search" placeholderTextColor="black" style={styles.inputStyles}/>
      </View>
      <TouchableOpacity style={{backgroundColor:"red", padding:10, borderRadius:10}}>
       <Image source={require("../assets/Vector.png")}/>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  searchFrame:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginVertical:20, 
  },
  search:{
    backgroundColor:"white",
    padding:5,
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    width:"76%",
    borderRadius:20
  },
  inputStyles:{
    width:"80%",
    padding:10
  }
})
export default Search;