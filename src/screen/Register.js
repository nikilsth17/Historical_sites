import { View, Text, TouchableOpacity, Pressable, Button } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { TextInput } from "react-native-paper";

const Register = () => {
  const navigation = useNavigation();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName,setFullName]=useState("");
  const [location,setLocation]=useState("");
  const [mobileNumber,setMobileNumber]= useState("");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 20 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: "black",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Register Form
          </Text>
        </View>
        <View
          style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
          className="flex-1 bg-white px-8 pt-8"
        >
          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
              }}
            >
              Full Name
            </Text>

            <TextInput
              placeholder="Enter your Full Name"
              placeholderTextColor="black"
              style={{
                width: "100%",
              }}
              onChangeText={(text) => setFullName(text)}
            />
          </View>
          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8,
              }}
            >
              Full Name
            </Text>

            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor="black"
              keyboardType="email-address"
              style={{
                width: "100%",
              }}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8,
              }}
            >
              Password
            </Text>

            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="black"
              secureTextEntry={isPasswordShown}
              style={{
                width: "100%",
              }}
              onChangeText={(text) => setPassword(text)}
            ></TextInput>
            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: "absolute",
                right: 12,
              }}
            >
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={24} color="black" />
              ) : (
                <Ionicons name="eye" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8,
              }}
            >
              Location
            </Text>

            <TextInput
              placeholder="Enter your location"
              placeholderTextColor="black"
              style={{
                width: "100%",
              }}
              onChangeText={(text) => setLocation(text)}
            />
          </View>
          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8,
              }}
            >
              Mobile Number
            </Text>

            <TextInput
              placeholder="Enter your mobile number"
              placeholderTextColor="black"
              style={{
                width: "100%",
              }}
              onChangeText={(number) => setMobileNumber(number)}
            />
          </View>
          <Button
            title="Register"
            filled
            style={{
              marginTop: 18,
              marginBottom: 4,
            }}
            onPress={() => navigation.navigate("Login")}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 22,
            }}
          >
            <Text style={{ fontSize: 16, color: "black" }}>
              Already have a account?{" "}
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  fontWeight: "bold",
                  marginLeft: 6,
                }}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
