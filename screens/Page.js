import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View,Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Page = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.page2}
      onPress={() => navigation.navigate("Page3")}
    >
    <View style={styles.page2}>
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
          source={require("../assets/ellipse-13.png")}
        />
      </View>
      <Image
        style={styles.page2Child}
        contentFit="cover"
        source={require("../assets/group-3.png")}
      />
      <View style={styles.exceptionalParent}>
        <Text style={[styles.exceptional, styles.bonusesPosition]}>
          Exceptional
        </Text>
        <Text style={[styles.bonuses, styles.bonusesPosition]}>bonuses</Text>
        <Text
          style={[styles.upTo100, styles.bonusesPosition]}
        >{`Up to 100$ welcome bonus
the fast week.`}</Text>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
      </View>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group1.png")}
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
  bonusesPosition: {
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
  page2Child: {
    top: -1,
    left: 333,
    width: 149,
    height: 952,
    position: "absolute",
  },
  exceptional: {
    color: Color.colorOrange,
    fontSize: FontSize.size_21xl,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    top: 0,
  },
  bonuses: {
    top: 52,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_21xl,
    textAlign: "left",
    color: Color.colorWhite,
  },
  upTo100: {
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
  exceptionalParent: {
    top: 556,
    left: 41,
    width: 273,
    height: 158,
    position: "absolute",
  },
  groupIcon: {
    height: "19.64%",
    width: "68.23%",
    top: "28.97%",
    right: "19.44%",
    bottom: "51.39%",
    left: "12.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  page2: {
    
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Page;
