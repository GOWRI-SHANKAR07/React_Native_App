import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const App = () => {

  const [task, setTask] = useState([]);
  const [newtask, setNewTask] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>TODO</Text>
      <View style={styles.inpCont}>
        <TextInput
          style={styles.txtInp}
          placeholder='Enter a Task'
          placeholderTextColor={'#000'}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={{fontSize: 30}}>→</Text>  
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },

  txt: {
    color: '#000',
    padding: '10%',
  },

  txtInp: {
    borderWidth: 1,
    width: 280,
    borderColor: '#000',
    paddingLeft: '5%',
    borderRadius: 10,
  },

  inpCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },

  btn: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00A8E8',
  }
})