import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const BirthdayList = (props) => {
  const {birthdays,setbirthday}=props;
  const deleteHandler = (key) => {
    setbirthday(() => {
      return birthdays.filter((list) => list.id !== key);
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
     
        {birthdays.map((item)=>(
          <TouchableOpacity key={item.key} onPress={() => deleteHandler(item.id)}>
          <View
            style={{ height: 30, padding: 5, flexDirection: "row" }}
            key={item.id}
          >
            <Text style={{ color: "white", marginRight: 0 }}>{item.name}</Text>
            <Text style={{ color: "white", marginLeft: 50 }}>{item.dob}</Text>
          </View>
          </TouchableOpacity>
        ))}
      
      </ScrollView>
    </View>
  );
};

export default BirthdayList;
const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: "coral",
  },
});
