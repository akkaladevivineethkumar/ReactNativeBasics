import React,{useState} from 'react'
import { StyleSheet,SafeAreaView, Text, View, TextInput, FlatList, Button } from 'react-native'
import uuid from 'react-native-uuid'

const styles = StyleSheet.create({
  container: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  },
  heading: {
  fontFamily: "Roboto",
  fontWeight: "bold",
  padding:16,
  }
,
textbox: {
  borderWidth:1,
  borderColor: "black",
  borderStyle: "solid",

  height: 40,
  width: '70%',
  textAlign: 'center',
  borderRadius: 8,
}
})

const Todos = () => {
  const [todoList,setTodoList] = useState([])
  const [text, setText] = useState("")

  const data ={
    textvalue: text,
    id: uuid.v4()
  }

  const settingData = () => {
    setTodoList([...todoList, data])
  }

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.heading}>Todos Application</Text>
      <TextInput placeholder="Type here" onChangeText={(val) => setText(val)} defaultValue={text}  style={styles.textbox} />
      <Button onPress={settingData} title="Add" />
      <FlatList
      data={todoList} 
      numColumns={3}
      keyExtractor={items => items.id.toString()}
      renderItem={({item}) => 
      <View>
      <Text>{item?.textvalue}</Text>
      </View>}
      />

    </View>
    </SafeAreaView>
  )
}

export default Todos