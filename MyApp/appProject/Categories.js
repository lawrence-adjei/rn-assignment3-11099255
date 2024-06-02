import { View, Text, StyleSheet,Image, FlatList } from 'react-native';

const categoryData = [
    { key: 1, name: "Exercise" },
    { key: 2, name: "Code" },
    { key: 3, name: "Study" },
    { key: 4, name: "Run" },
    { key: 5, name: "Debug" },
    { key: 6, name: "Read" },
    { key: 7, name: "Yoga" },
    { key: 8, name: "Refactor" },
  ];
  

function renderCategoryData({item}){
  return(
      <View style={styles.listItem}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text  style={styles.itemNameSmall}>12 tasks</Text>
        <View>
          <Image source={require("../assets/working.png")}/>
        </View>
      </View>
  );
};


function Categories() {
  return (
    <View>
      <Text style={styles.categories}>Categories</Text>
      <FlatList
          data={categoryData}
          horizontal={true}
          renderItem={renderCategoryData}
          showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categories: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical:10
  },
  listItem:{
    backgroundColor:"white",
    marginRight:10,
    padding:10,
    borderRadius:20
  },
  itemName:{
    fontSize:16,
    fontWeight:"bold"
  },
  itemNameSmall:{
    fontSize:11,
  }
});

export default Categories;