import {View, Text, StyleSheet} from 'react-native';


const taskData = [
  { key: 1, name: "Web Development" },
  { key: 2, name: "Mobile App Development" },
  { key: 3, name: "Push-ups" },
  { key: 4, name: "Develop a blog section with CRUD functionality" },
  { key: 5, name: "Implement user profile creation and editing" },
  { key: 6, name: "Add social media login options (e.g., Facebook, Google)" },
  { key: 7, name: "Set up automated database backups" },
  { key: 8, name: "Deploy the app to a production environment" },
  { key: 9, name: "Optimize images for various screen sizes" },
  { key: 10, name: "Set up in-app notifications for user activity" },
  { key: 11, name: "Add a search bar to allow users to search content" },
  { key: 12, name: "Set up caching to improve load times" },
  { key: 13, name: "Attend a weekly yoga session to improve flexibility" },
  { key: 14, name: "Follow a strength training routine three times a week" },
  { key: 15, name: "Meditate for 10 minutes every day" },
];






function OngoingTask() {
  return(
    <View style={styles.ongoingStyles}>
      <Text style={styles.title}>Ongoing Tasks</Text>
      <View>
        {taskData.map((tasks)=>{
          return(
            <View style={styles.ongoingContainer}>
              <Text style={styles.ongoingtask}>{tasks.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ongoingStyles:{
    marginVertical:20
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical:20
  },
  ongoingContainer:{
    backgroundColor:"white",
    marginBottom:10,
    padding:30,
    borderRadius:10,
    borderWidth:3,
    borderColor:"gold"
  },
  ongoingtask:{
    fontSize:18,
    fontWeight:"bold"
  }
})
export default OngoingTask;