import { StyleSheet, Text, View } from "react-native";

const TitleMsg = () => {
    return ( 
        <View style={styles.container}>
            <Text style={{marginTop: 55, color: '#FFF6F1', fontSize: 20, fontStyle:'normal'}} >Birthday Reminder</Text> 
        </View>
    
    );
}
 
export default TitleMsg;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'coral',
      marginTop: 20,
    },
  });