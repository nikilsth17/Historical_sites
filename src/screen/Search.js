import { View, Text, ScrollView, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { Ionicons,Entypo } from "@expo/vector-icons";
import { Avatar, Card, IconButton,Searchbar } from "react-native-paper";
import { useNavigation } from '@react-navigation/native'
const Search = () => {
    const navigation=useNavigation();
    const [searchQuery, setSearchQuery] = React.useState("");
    const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
    <View style={{ backgroundColor: "#DEE4EA" }}>
      <View
        style={{
          height: 100,
          backgroundColor: "green",
        }}
      >
        <View style={{ justifyContent: "row" }}>
          <Ionicons
            name="chevron-back-sharp"
            size={30}
            color="white"
            paddingTop={40}
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: -29,
              marginLeft: 50,
            }}
          >
            Search the sites
          </Text>
        </View>
   <Searchbar 
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:"white",
            width:250,
            height:50,
            left:50,
            top:10,
            borderRadius:10,

     }}
  />
        <View style={{ padding: 10,marginTop:20,gap:10 }}>
          <Card style={{ padding: 10 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Avatar.Image
                size={100}
                source={require("../assets/bhaktapur.png")}
              />
              <View style={{padding:15}}>
                <Text style={{fontSize:18,fontWeight:700}}>Bhaktapur Durbar Square</Text>
                <Text style={{fontWeight:600}}>Location: Bhaktapur</Text>
                <Entypo name="location-pin" size={20} color="black">
                    0.5KM
                </Entypo>

              </View>
            </View>
          </Card>
          <Card style={{ padding: 10 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Avatar.Image
                size={100}
                source={require("../assets/patan.png")}
              />
              <View style={{padding:15}}>
                <Text style={{fontSize:18,fontWeight:700}}>Patan Durbar Square</Text>
                <Text style={{fontWeight:600}}>Location: Patan,Laltipur</Text>
                <Entypo name="location-pin" size={20} color="black">
                    1KM
                </Entypo>

              </View>
            </View>
          </Card>
          
          <Card style={{ padding: 10 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Avatar.Image
                size={100}
                source={require("../assets/sagarmatha.jpg")}
              />
              <View style={{padding:15}}>
                <Text style={{fontSize:18,fontWeight:700}}>Sagarmatha National Park</Text>
                <Text style={{fontWeight:600}}>Location: Solukhumbu</Text>
                <Entypo name="location-pin" size={20} color="black">
                    100.5KM
                </Entypo>

              </View>
            </View>
          </Card>
          <Card style={{ padding: 10 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Avatar.Image
                size={100}
                source={require("../assets/lumbini.png")}
              />
              <View style={{padding:15}}>
                <Text style={{fontSize:18,fontWeight:700}}>Lumbini</Text>
                <Text style={{fontWeight:600}}>Location: Lumbini</Text>
                <Entypo name="location-pin" size={20} color="black">
                    50.5KM
                </Entypo>

              </View>
            </View>
          </Card>
        </View>
      </View>
    </View>
    </>
        
  


  
  );
};



export default Search;