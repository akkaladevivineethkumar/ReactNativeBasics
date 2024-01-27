import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50, // Adjust the padding based on the header height
  },
});

const Home = ({ navigation }) => {

  const list = [
    { id: 1, value: "https://reactnative.dev/img/tiny_logo.png" },
    { id: 2, value: "https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" },
    { id: 3, value: "https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" },
    { id: 4, value: "https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" },
    { id: 5, value: "https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" },
    { id: 6, value: "https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" },
    { id: 7, value: "https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" },
    { id: 8, value: "https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" },
    { id: 9, value: "https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" },
    { id: 10, value: "https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" },
    { id: 11, value: "https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" },
    { id: 12, value: "https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" },

  ];


  const [showMore, setShowMore] = useState(false);

  const sliced = [...list.slice(0, 7)];

  const toggleShowMore = () => {
    setShowMore(prevState => !prevState);
  };

  const down =  {margin: 16, height: 50, width: 50, alignItems:'center', justifyContent:'center'}
  const up = {height: 50, width: 50, marginLeft: '45%', alignItems: 'center',justifyContent:'center'}
  const setUpDown = showMore ? up : down
  
  const renderItem = ({ item }) => {
    if (item.icons) {
      return (
        <TouchableOpacity style={setUpDown} onPress={toggleShowMore}>
          <View>
            <Icon name={item.icons} size={28} />
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <View>
          <Image source={{ uri: item.value }} style={{ margin: 16, height: 50, width: 50 }} />
        </View>
      );
    }
  };


  return (
    <View style={{height: '100vh', justifyContent: 'center', alignItems:'center'}}>
    <FlatList
        contentContainerStyle={{padding: 4}}
        numColumns={4}
        data={showMore ? [...list,{ id: sliced.length + 1, icons: "chevrons-up" }] : [...list.slice(0, 7),{ id: sliced.length + 1, icons: "chevrons-down" }]}
        renderItem={ renderItem }
        ListFooterComponent={() => (
          <View style={styles.content}>
            <Text>Home</Text>
            <Button
              onPress={() => {
                navigation.navigate('about', { id: "shrvan" });
              }}
              title="Go to About"
            />
          </View>
        )}
      />
      </View>
  );
};

export default Home;
