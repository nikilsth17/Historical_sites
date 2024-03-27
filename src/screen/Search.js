import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { Avatar, Card, Button, Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#DEE4EA", flex: 1 }}>
        <View style={{ height: 140, backgroundColor: "green" }}>
          <View style={{ flexDirection: "row", alignItems: "center",marginTop:30 }}>
            <Ionicons
              name="chevron-back-sharp"
              size={30}
              color="white"
              onPress={() => navigation.goBack()}
            />
            <Text style={{ fontSize: 20, color: "white", marginLeft: 20 }}>
              Search the sites
            </Text>
          </View>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{ margin: 20, borderRadius: 10 }}
          />
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ padding: 10, marginTop: 10, gap: 10 }}>
            <Card style={{ padding: 10 }}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Avatar.Image
                  size={100}
                  source={require("../assets/bhaktapur.png")}
                />
                <View style={{ padding: 15, gap: 3 }}>
                  <Text style={{ fontSize: 18, fontWeight: 700 }}>
                    Bhaktapur Durbar Square
                  </Text>
                  <Text style={{ fontWeight: 600 }}>Location: Bhaktapur</Text>
                  <Entypo name="location-pin" size={20} color="black">
                    0.5KM
                  </Entypo>
                  <Button mode="contained-tonal" style={{ width: "80%" }} onPressIn={()=>navigation.navigate("Details")}>
                    See details
                  </Button>
                </View>
              </View>
            </Card>
            <Card style={{ padding: 10 }}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Avatar.Image
                  size={100}
                  source={require("../assets/patan.png")}
                />
                <View style={{ padding: 15, gap: 3 }}>
                  <Text style={{ fontSize: 18, fontWeight: 700 }}>
                    Patan Durbar Square
                  </Text>
                  <Text style={{ fontWeight: 600 }}>
                    Location: Patan,Laltipur
                  </Text>
                  <Entypo name="location-pin" size={20} color="black">
                    1KM
                  </Entypo>
                  <Button mode="contained-tonal" style={{ width: "80%" }}>
                    See details
                  </Button>
                </View>
              </View>
            </Card>

            <Card style={{ padding: 10 }}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Avatar.Image
                  size={100}
                  source={require("../assets/sagarmatha.jpg")}
                />
                <View style={{ padding: 15, gap: 3 }}>
                  <Text style={{ fontSize: 18, fontWeight: 700 }}>
                    Sagarmatha National Park
                  </Text>
                  <Text style={{ fontWeight: 600 }}>Location: Solukhumbu</Text>
                  <Entypo name="location-pin" size={20} color="black">
                    100.5KM
                  </Entypo>
                  <Button mode="contained-tonal" style={{ width: "80%" }}>
                    See details
                  </Button>
                </View>
              </View>
            </Card>
            <Card style={{ padding: 10 }}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Avatar.Image
                  size={100}
                  source={require("../assets/lumbini.png")}
                />
                <View style={{ padding: 15, gap: 3 }}>
                  <Text style={{ fontSize: 18, fontWeight: 700 }}>Lumbini</Text>
                  <Text style={{ fontWeight: 600 }}>Location: Lumbini</Text>
                  <Entypo name="location-pin" size={20} color="black">
                    50.5KM
                  </Entypo>
                  <Button mode="contained-tonal" style={{ width: "80%" }}>
                    See details
                  </Button>
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Search;
