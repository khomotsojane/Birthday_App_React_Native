import { StyleSheet, Text, View } from 'react-native';
import TitleMsg from './components/TitleMsg';
import CalenderView from './components/CalenderView';
import BirthdayList from './components/BirthdayList';
import { useState } from 'react';

export default function App() {
  const[birthdays,setbirthday]=useState([

    {id:'1',dob:'22 march 2022',name:'Thabo'},
    {id:'2',dob:'22 march 2022',name:'Thabo'},
    {id:'3',dob:'22 march 2022',name:'Thabo'},
    {id:'4',dob:'22 march 2022',name:'Thabo'},
    {id:'5',dob:'22 march 2022',name:'Thabo'},
    {id:'6',dob:'22 march 2022',name:'Thabo'},
    {id:'7',dob:'22 march 2022',name:'Thabo'},
    {id:'8',dob:'22 march 2022',name:'Thabo'},
    {id:'9',dob:'22 march 2022',name:'Thabo'},
    {id:'10',dob:'22 march 2022',name:'Thabo'},
    {id:'11',dob:'22 march 2022',name:'Thato'},
    {id:'12',dob:'22 march 2022',name:'Thabo'},
    {id:'13',dob:'22 march 2022',name:'Thabo'},
    {id:'14',dob:'22 march 2022',name:'Steven'},
]);


  return (
    
    <View style={styles.container}>
      <TitleMsg/>
      <CalenderView birthdays={birthdays} setbirthday={setbirthday}/>
      <BirthdayList birthdays={birthdays} setbirthday={setbirthday}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
