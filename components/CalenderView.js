import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";
import uuid from 'react-native-uuid';

const CalenderView = (props) => {
    const {birthdays,setbirthday}=props;
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [isDisabled, setDisable] = useState(false);
    const [dob, setdob] = useState("*Day Mon DD YYYY");
    const [name,setName]=useState('');
    const SubmitBirthdate=()=>{
        setbirthday([...birthdays,{id:uuid.v4(),dob:dob,name:name}]);
    }
    

    const toggleDatepicker = () => {
        setShowPicker(!showPicker);
      };
      const onChange = ({ type }, selectedDate) => {
        if (type == "set") {
          const currdate = selectedDate;
          setDate(currdate);
          if (Platform.OS === "android") {
            toggleDatepicker();
            setdob(currdate.toDateString());
          }
        } else {
          toggleDatepicker();
        }
      };

    return ( 
        <View style={styles.container}>
        <TextInput
          onChangeText={(e) => setName(e)}
          value={name}
          style={{ marginLeft: 2, marginTop: 40 }}
          placeholder="Enter a friend's name"
          keyboardType="default"
          cursorColor={"black"}
        />
        <TouchableOpacity style={{backgroundColor:'white'}} onPress={toggleDatepicker}>
            <Text>Select birthday</Text>
            <TextInput
              style={{ marginLeft: 2,borderColor:'black' }}
              placeholder="*birth date"
              keyboardType="default"
              cursorColor={"black"}
              editable={false}
              onChange={setdob}
              value={dob}
            />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>SubmitBirthdate()} style={{margin:5,backgroundColor:'coral',height:40}}>
            <Text style={{color:'#FFF6F1', textAlign: 'center', margin: 10 }}>Submit</Text>
        </TouchableOpacity>
        {showPicker && (
        <DateTimePicker
          mode="date"
          display="calendar"
          value={date}
          onChange={onChange}
          timeZoneName={"Africa/Johannesburg"}
        />
      )}
        </View>
     );
}
 
export default CalenderView;
const styles = StyleSheet.create({
    container: {
      flex: 4,
      backgroundColor: '#FFF6F1',
      
    },
  });