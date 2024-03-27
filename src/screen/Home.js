import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Avatar, Card, IconButton, Surface } from "react-native-paper";
import {
  Ionicons,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";



const Home = () => {
  const navigation= useNavigation();
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#DEE4EA" }}>
        <View
          style={{
            borderColor: "white",
            backgroundColor: "green",
            shadowColor: "white",
            height: 180,
            flexDirection: "row", // Use flexDirection to align items horizontally
            justifyContent: "space-between", // Adjust as needed
            alignItems: "center", // Adjust as needed
          }}
        >
          <Avatar.Image
            size={100}
            source={require("../assets/avatar.jpeg")}
            style={{ marginLeft: 20, backgroundColor: "grey" }}
          />
          <View>
            <Text style={{ fontSize: 30, color: "white" }}>Hello User</Text>
            <Text style={{ fontSize: 20, color: "white" }}>
              Welcome to You...
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Notifications")}
          >
            <FontAwesome5 name="bell" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{marginLeft:10,fontSize: 20 }}>Near by you,</Text>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginLeft: 20,
              marginRight: 20,
              display: "flex",
              flexWrap: "wrap",
              paddingTop: 10,
              gap: 10,
            }}
          >
            <TouchableOpacity>
              <Surface
                style={{
                  padding: 8,
                  height: 100,
                  width: 100,
                  alignItems: "center",
                  borderRadius: 10,
                  justifyContent: "center",
                  backgroundColor: "white",
                }}
              >
                <FontAwesome5 name="hotel" size={24} color="green" />
                <Text paddingTop={10}>Hotel</Text>
              </Surface>
            </TouchableOpacity>
            <TouchableOpacity>
              <Surface
                style={{
                  padding: 8,
                  height: 100,
                  width: 100,
                  alignItems: "center",
                  borderRadius: 10,
                  justifyContent: "center",
                  backgroundColor: "white",
                }}
              >
                <Ionicons name="restaurant-sharp" size={24} color="black" />
                <Text paddingTop={10}>Restaurant</Text>
              </Surface>
            </TouchableOpacity>
            <TouchableOpacity>
              <Surface
                style={{
                  padding: 8,
                  height: 100,
                  width: 100,
                  alignItems: "center",
                  borderRadius: 10,
                  justifyContent: "center",
                  backgroundColor: "white",
                }}
                elevation={5}
              >
                <MaterialCommunityIcons
                  name="hospital"
                  size={24}
                  color="green"
                />
                <Text paddingTop={10}>Hospital</Text>
              </Surface>
            </TouchableOpacity>
            <TouchableOpacity>
              <Surface
                style={{
                  padding: 8,
                  height: 100,
                  width: 100,
                  alignItems: "center",
                  borderRadius: 10,
                  justifyContent: "center",
                  backgroundColor: "white",
                }}
                elevation={5}
              >
                <MaterialCommunityIcons
                  name="bus"
                  size={24}
                  color="green"
                />
                <Text paddingTop={10}>Bus station</Text>
              </Surface>
            </TouchableOpacity>
          </View>
          <View style={{margin:10,gap:10 }}>
          <Text>Explore the Nepal's Historical Sites</Text>

          <Card onPress={()=>navigation.navigate("SiteMap")}>
            <Card.Cover source={require("../assets/map.png")} />
          </Card>
          </View>

        
        </View>
      </View>
    </>
  );
};

export default Home;
