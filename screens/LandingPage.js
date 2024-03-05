import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border } from "../GlobalStyles";

const LandingPage = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.landingPage}
      onPress={() => navigation.navigate("Page1")}
    >
      <Text style={styles.taxo}>taxo</Text>
      <Image
        style={styles.landingPageChild}
        contentFit="cover"
        source={require("../assets/ellipse-17.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  taxo: {
    top: 406,
    left: 122,
    fontSize: 80,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  landingPageChild: {
    top: 427,
    left: 300,
    width: 20,
    height: 20,
    position: "absolute",
  },
  landingPage: {
    borderRadius: Border.br_41xl,
    backgroundColor: Color.colorDarkslategray_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default LandingPage;
