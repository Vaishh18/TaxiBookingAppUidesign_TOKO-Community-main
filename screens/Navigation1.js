import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Navigation1 = () => {
  return (
    <View style={styles.navigation}>
      <Image
        style={[styles.clipPathGroup, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/clip-path-group.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChild6ShadowBox]}>
        <View style={[styles.groupChild, styles.taxoPosition]} />
        <View style={[styles.groupItem, styles.groupShadowBox]} />
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Image
          style={[styles.lineIcon, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-2.png")}
        />
        <Image
          style={[styles.groupChild1, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-2.png")}
        />
        <View style={[styles.taxoParent, styles.groupItemPosition]}>
          <Text style={[styles.taxo, styles.taxoPosition]}>taxo</Text>
          <Image
            style={[styles.ellipseIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
        </View>
        <View style={[styles.rectangleView, styles.groupChild2ShadowBox]} />
        <View style={[styles.groupChild2, styles.groupChild2ShadowBox]} />
        <View style={[styles.groupChild3, styles.groupShadowBox]} />
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-8.png")}
        />
        <Text
          style={[
            styles.broughtonAveBroomfield,
            styles.enterYourDestinationTypo,
          ]}
        >{`144 Broughton Ave, Broomfield `}</Text>
        <Text
          style={[styles.enterYourDestination, styles.enterYourDestinationTypo]}
        >
          Enter Your Destination
        </Text>
        <Image
          style={[styles.pin1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/pin-1.png")}
        />
        <Image
          style={[styles.send1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/send-1.png")}
        />
        <Image
          style={[styles.groupChild4, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/line-6.png")}
        />
      </View>
      <Image
        style={[styles.carTopView1Icon, styles.carIconLayout]}
        contentFit="cover"
        source={require("../assets/cartopview-1.png")}
      />
      <Image
        style={[styles.carTopView2Icon, styles.carIconLayout]}
        contentFit="cover"
        source={require("../assets/cartopview-1.png")}
      />
      <Image
        style={styles.carTopView7Icon}
        contentFit="cover"
        source={require("../assets/cartopview-7.png")}
      />
      <Image
        style={[styles.carTopView3Icon, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/cartopview-3.png")}
      />
      <Image
        style={styles.carTopView4Icon}
        contentFit="cover"
        source={require("../assets/cartopview-4.png")}
      />
      <Image
        style={styles.carTopView5Icon}
        contentFit="cover"
        source={require("../assets/cartopview-5.png")}
      />
      <Image
        style={styles.carTopView6Icon}
        contentFit="cover"
        source={require("../assets/cartopview-6.png")}
      />
      <View style={[styles.ellipseParent, styles.groupChild5Layout]}>
        <Image
          style={[styles.groupChild5, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <Image
          style={[styles.send11, styles.send11Position]}
          contentFit="cover"
          source={require("../assets/send-1-1.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild6, styles.groupChildPosition]} />
        <Image
          style={[styles.target1Icon, styles.send11Position]}
          contentFit="cover"
          source={require("../assets/target-1.png")}
        />
      </View>
      <Image
        style={[styles.navigationChild, styles.childPosition]}
        contentFit="cover"
        source={require("../assets/group-251.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild6ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  taxoPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  lineIconLayout: {
    right: "86.74%",
    width: "6.51%",
    left: "6.74%",
    height: "0.7%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupItemPosition: {
    bottom: "72.54%",
    top: "11.62%",
    height: "15.85%",
  },
  groupChild2ShadowBox: {
    elevation: 6.5,
    shadowRadius: 6.5,
    borderRadius: Border.br_2xs,
    left: "13.95%",
    right: "13.95%",
    width: "72.09%",
    height: "17.61%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  enterYourDestinationTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    left: 74,
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    width: 20,
    left: 20,
    position: "absolute",
  },
  childPosition: {
    left: 30,
    position: "absolute",
  },
  carIconLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  groupLayout: {
    height: 41,
    width: 41,
  },
  groupChild5Layout: {
    height: 30,
    width: 30,
  },
  groupChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  send11Position: {
    top: 8,
    position: "absolute",
  },
  clipPathGroup: {
    height: "72.53%",
    width: "157.21%",
    top: "27.47%",
    right: "-11.16%",
    left: "-46.05%",
    bottom: "0%",
  },
  groupChild: {
    height: "100%",
    borderRadius: Border.br_14xl,
    right: "0%",
    bottom: "0%",
    width: "100%",
    top: "0%",
    backgroundColor: Color.colorGray_100,
  },
  groupItem: {
    width: "10.47%",
    right: "84.88%",
    left: "4.65%",
    borderRadius: Border.br_3xs,
    bottom: "72.54%",
    top: "11.62%",
    height: "15.85%",
  },
  groupInner: {
    width: "3.72%",
    top: "17.61%",
    right: "89.53%",
    bottom: "81.69%",
    left: "6.74%",
    height: "0.7%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lineIcon: {
    top: "19.72%",
    bottom: "79.58%",
  },
  groupChild1: {
    top: "21.83%",
    bottom: "77.46%",
  },
  taxo: {
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  ellipseIcon: {
    height: "11.11%",
    width: "6.67%",
    top: "20%",
    bottom: "68.89%",
    left: "93.33%",
    right: "0%",
  },
  taxoParent: {
    width: "17.44%",
    right: "41.4%",
    left: "41.16%",
    position: "absolute",
  },
  rectangleView: {
    top: "35.56%",
    bottom: "46.83%",
  },
  groupChild2: {
    top: "61.27%",
    bottom: "21.13%",
  },
  groupChild3: {
    height: "8.8%",
    width: "5.81%",
    top: "39.79%",
    right: "16.98%",
    bottom: "51.41%",
    left: "77.21%",
    borderRadius: 5,
  },
  groupIcon: {
    height: "4.23%",
    width: "2.79%",
    top: "42.25%",
    right: "18.37%",
    bottom: "53.52%",
    left: "78.84%",
  },
  broughtonAveBroomfield: {
    top: 118,
    color: "#beb9b9",
  },
  enterYourDestination: {
    top: 191,
    color: Color.colorOrange,
  },
  pin1Icon: {
    top: 116,
  },
  send1Icon: {
    top: 192,
  },
  groupChild4: {
    top: 141,
    width: 0,
    height: 50,
  },
  rectangleParent: {
    height: "30.47%",
    bottom: "69.53%",
    shadowRadius: 12.1,
    elevation: 12.1,
    left: "0%",
    top: "0%",
    position: "absolute",
    right: "0%",
    width: "100%",
  },
  carTopView1Icon: {
    top: 326,
    left: 330,
  },
  carTopView2Icon: {
    top: 626,
    left: 124,
  },
  carTopView7Icon: {
    top: 764,
    left: 62,
    width: 33,
    height: 33,
    position: "absolute",
  },
  carTopView3Icon: {
    top: 379,
    left: 30,
    position: "absolute",
  },
  carTopView4Icon: {
    top: 749,
    left: 364,
    width: 32,
    height: 32,
    position: "absolute",
  },
  carTopView5Icon: {
    top: 614,
    left: 295,
    width: 38,
    height: 38,
    position: "absolute",
  },
  carTopView6Icon: {
    top: 327,
    left: 176,
    width: 39,
    height: 39,
    position: "absolute",
  },
  groupChild5: {
    height: 30,
    width: 30,
  },
  send11: {
    left: 6,
    width: 15,
    height: 15,
  },
  ellipseParent: {
    top: 444,
    left: 181,
    position: "absolute",
  },
  groupChild6: {
    backgroundColor: Color.colorDarkslategray_200,
    shadowRadius: 13,
    elevation: 13,
    height: 41,
    width: 41,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  target1Icon: {
    left: 8,
    width: 25,
    height: 25,
  },
  rectangleGroup: {
    top: 788,
    left: 351,
    position: "absolute",
  },
  navigationChild: {
    top: 853,
    width: 370,
    height: 60,
  },
  navigation: {
    borderRadius: Border.br_41xl,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default Navigation1;
