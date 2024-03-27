import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const Details = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#DEE4EA" }}>
        <View style={{ height: 90, backgroundColor: "green" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <Ionicons
              name="chevron-back-sharp"
              size={30}
              color="white"
              onPress={() => navigation.goBack()}
            />
            <Text style={{ fontSize: 20, color: "white", marginLeft: 20 }}>
              Details
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          padding: 10,
          gap: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text style={{ color: "black", fontWeight: 600, fontSize: 19 }}>
          Bhaktapur Durbar Square
        </Text>

        <Image
          style={{ width: 340, height: 250 }}
          source={require("../assets/bhaktapur.jpeg")}
        />
        <Text style={{ fontSize: 18, fontWeight: 500 }}>Description:</Text>
        <Text>
          Bhaktapur Durbar Square" the city is also known, is a museum of
          medieval art and architecture with many examples of sculpture,
          woodcarving and colossal pagoda temples consecrated to different gods
          and goddesses which is 15 km far from Kathmandu.
        </Text>
        <Text>Price: Rs 200</Text>
        <View
          style={{ display: "flex", flexDirection: "row", gap: 10, padding: 5 }}
        >
          <Button mode="contained-tonal" style={{ width: "50%" }}>
            Book Ticket
          </Button>
          <Button mode="contained-tonal" style={{ width: "50%" }}>
            Location
          </Button>
        </View>
        <Button mode="outlined">Hire Guide</Button>

      </View>
    </SafeAreaView>
  );
};

export default Details;
