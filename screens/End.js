import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const End = () => {
  return (
    <View style={styles.end}>
      <Image
        style={styles.endChild}
        contentFit="cover"
        source={require("../assets/group-121.png")}
      />
      <View style={styles.rectangleParent}>
        <LinearGradient
          style={styles.groupChild}
          locations={[0, 1]}
          colors={["rgba(53, 63, 84, 0.5)", "rgba(34, 40, 52, 0.5)"]}
        />
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Text style={[styles.wowA5, styles.wowA5Typo]}>Wow! A 5 star!</Text>
        <Text style={[styles.steveJonas, styles.wowA5Typo]}>Steve Jonas</Text>
        <Text style={[styles.wannaAddTip, styles.doneTypo]}>
          Wanna add tip for Adam?
        </Text>
        <View style={[styles.rectangleGroup, styles.groupLayout1]}>
          <View style={[styles.groupItem, styles.groupChildShadowBox]} />
          <Text style={[styles.text, styles.textTypo]}>$1</Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupLayout1]}>
          <View style={[styles.groupInner, styles.groupChildShadowBox]} />
          <Text style={[styles.text1, styles.textTypo]}>$5</Text>
        </View>
        <View style={[styles.groupView, styles.groupLayout1]}>
          <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
          <Text style={[styles.text2, styles.textTypo]}>$7</Text>
        </View>
        <View style={[styles.rectangleParent1, styles.groupLayout1]}>
          <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
          <Text style={[styles.text3, styles.textTypo]}>$10</Text>
        </View>
        <View style={[styles.groupChild2, styles.groupChildShadowBox]} />
        <Text style={[styles.done, styles.doneTypo]}>DONE</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wowA5Typo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    position: "absolute",
  },
  doneTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  groupLayout1: {
    height: 60,
    width: 60,
    top: 355,
    position: "absolute",
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: -5,
      height: -5,
    },
    position: "absolute",
  },
  textTypo: {
    top: 15,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  endChild: {
    height: "100%",
    width: "216.74%",
    top: "0%",
    right: "-48.6%",
    bottom: "0%",
    left: "-68.14%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    borderRadius: Border.br_16xl,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 2,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
    height: 648,
    width: 370,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 44,
    left: 95,
    width: 165,
    height: 150,
    position: "absolute",
  },
  wowA5: {
    top: 274,
    left: 111,
  },
  steveJonas: {
    top: 204,
    left: 121,
  },
  wannaAddTip: {
    top: 304,
    left: 54,
    color: Color.colorWhite,
    textAlign: "left",
  },
  groupItem: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(176, 176, 176, 0.25)",
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_mini,
    shadowOpacity: 1,
    shadowOffset: {
      width: -5,
      height: -5,
    },
    height: 60,
    width: 60,
    left: 0,
    top: 0,
  },
  text: {
    left: 19,
  },
  rectangleGroup: {
    left: 35,
  },
  groupInner: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(176, 176, 176, 0.25)",
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_mini,
    shadowOpacity: 1,
    shadowOffset: {
      width: -5,
      height: -5,
    },
    height: 60,
    width: 60,
    left: 0,
    top: 0,
  },
  text1: {
    left: 17,
  },
  rectangleContainer: {
    left: 116,
  },
  rectangleView: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(176, 176, 176, 0.25)",
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_mini,
    shadowOpacity: 1,
    shadowOffset: {
      width: -5,
      height: -5,
    },
    height: 60,
    width: 60,
    left: 0,
    top: 0,
  },
  text2: {
    left: 18,
  },
  groupView: {
    left: 197,
  },
  groupChild1: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(176, 176, 176, 0.25)",
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_mini,
    shadowOpacity: 1,
    shadowOffset: {
      width: -5,
      height: -5,
    },
    height: 60,
    width: 60,
    left: 0,
    top: 0,
  },
  text3: {
    left: 13,
  },
  rectangleParent1: {
    left: 278,
  },
  groupChild2: {
    marginLeft: -154,
    top: 540,
    left: "50%",
    borderRadius: 18,
    backgroundColor: Color.colorOrange,
    shadowColor: "rgba(255, 188, 7, 0.2)",
    shadowRadius: 10.1,
    elevation: 10.1,
    width: 308,
    height: 68,
    shadowOpacity: 1,
    shadowOffset: {
      width: -5,
      height: -5,
    },
  },
  done: {
    top: 560,
    left: 157,
    color: Color.colorBlack,
  },
  rectangleParent: {
    top: 142,
    left: 30,
    height: 648,
    width: 370,
    position: "absolute",
  },
  end: {
    borderRadius: Border.br_41xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default End;
