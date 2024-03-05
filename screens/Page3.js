import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View,Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Page3 = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.page3}
      onPress={() => navigation.navigate("Login")}
    >
    <View style={styles.page3}>
      <Image
        style={styles.objectsIcon}
        contentFit="cover"
        source={require("../assets/objects.png")}
      />
      <View style={styles.taxoParent}>
        <Text style={[styles.taxo, styles.taxoTypo]}>taxo</Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </View>
      <Image
        style={styles.page3Child}
        contentFit="cover"
        source={require("../assets/group-3.png")}
      />
      <View style={styles.quickParent}>
        <Text style={[styles.quick, styles.quickPosition]}>Quick</Text>
        <Text style={[styles.start, styles.quickPosition]}>Start</Text>
        <Text
          style={[styles.yourRegistrationIs, styles.quickPosition]}
        >{`Your registration is validate
within 12 hours.`}</Text>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
      </View>
      <Image
        style={styles.objectsIcon1}
        contentFit="cover"
        source={require("../assets/objects11.png")}
      />
    </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  taxoTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    top: 0,
  },
  quickPosition: {
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  objectsIcon: {
    top: 453,
    left: -28,
    width: 651,
    height: 479,
    position: "absolute",
    overflow: "hidden",
  },
  taxo: {
    fontSize: FontSize.size_11xl,
    textAlign: "center",
    color: Color.colorWhite,
    left: 0,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: 10,
    left: 70,
    width: 9,
    height: 9,
    position: "absolute",
  },
  taxoParent: {
    top: 30,
    left: 175,
    width: 79,
    height: 45,
    position: "absolute",
  },
  page3Child: {
    top: -1,
    left: 333,
    width: 149,
    height: 952,
    position: "absolute",
  },
  quick: {
    color: Color.colorOrange,
    fontSize: FontSize.size_21xl,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    top: 0,
  },
  start: {
    top: 52,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_21xl,
    textAlign: "left",
    color: Color.colorWhite,
  },
  yourRegistrationIs: {
    top: 116,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorSilver_100,
  },
  groupItem: {
    top: 102,
    left: 263,
    width: 10,
    height: 10,
    position: "absolute",
  },
  quickParent: {
    top: 556,
    left: 41,
    width: 273,
    height: 158,
    position: "absolute",
  },
  objectsIcon1: {
    top: 296,
    left: 37,
    width: 345,
    height: 143,
    position: "absolute",
    overflow: "hidden",
  },
  page3: {
    borderRadius: Border.br_41xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Page3;
