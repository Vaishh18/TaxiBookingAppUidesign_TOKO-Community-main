import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Booking = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.booking}>
      <Image
        style={styles.bookingChild}
        contentFit="cover"
        source={require("../assets/group-122.png")}
      />
      <View style={[styles.bookingItem, styles.bookingItemPosition]} />
      <Text style={styles.broughtAveBroomfield}>
        144 Brought Ave, Broomfield
      </Text>
      <Text style={[styles.e180hSt, styles.pricesTypo]}>
        800 E 180H St, The Brone
      </Text>
      <Image
        style={[styles.bookingInner, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-13.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-14.png")}
      />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-7.png")}
      />
      <View style={styles.pricesWrapper}>
        <Text style={styles.pricesTypo}>Prices</Text>
      </View>
      <View style={[styles.rectangleView, styles.bookingItemPosition]} />
      <View style={[styles.bookingChild1, styles.bookingChildShadowBox]} />
      <View style={[styles.bookingChild2, styles.bookingChildShadowBox]} />
      <View style={[styles.bookingChild3, styles.bookingChildShadowBox]} />
      <View style={[styles.bookingChild4, styles.bookingChildShadowBox]} />
      <Image
        style={styles.pickupTruckIcon}
        contentFit="cover"
        source={require("../assets/pickuptruck.png")}
      />
      <Image
        style={[styles.lorryIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/lorry.png")}
      />
      <Image
        style={[styles.jeepIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/jeep.png")}
      />
      <Image
        style={styles.sedanIcon}
        contentFit="cover"
        source={require("../assets/sedan.png")}
      />
      <Text style={[styles.pickup, styles.textTypo1]}>Pickup</Text>
      <Text style={[styles.text, styles.textTypo]}>$37</Text>
      <Text style={[styles.lorry, styles.lorryTypo]}>Lorry</Text>
      <Text style={[styles.text1, styles.lorryTypo]}>$40</Text>
      <Text style={[styles.x4, styles.x4Typo]}>4x4</Text>
      <Text style={[styles.text2, styles.x4Typo]}>$34</Text>
      <Text style={[styles.comfort, styles.text3Typo]}>Comfort</Text>
      <Text style={[styles.text3, styles.text3Typo]}>$15</Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("End")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.getACar}>GET A CAR</Text>
      </Pressable>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bookingItemPosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  pricesTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
  },
  groupIconLayout: {
    height: 20,
    width: 20,
    left: 32,
    position: "absolute",
  },
  bookingChildShadowBox: {
    height: 77,
    width: 90,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(131, 126, 126, 0.25)",
    borderRadius: Border.br_sm,
    top: 759,
    shadowOpacity: 1,
    shadowOffset: {
      width: -4,
      height: -4,
    },
    backgroundColor: Color.colorDarkslategray_200,
    position: "absolute",
  },
  iconLayout: {
    height: 40,
    width: 40,
    top: 764,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 13,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_3xs,
    top: 815,
  },
  lorryTypo: {
    left: 123,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  x4Typo: {
    left: 233,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  text3Typo: {
    color: Color.colorOrange,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 345,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 53,
    width: 255,
    position: "absolute",
  },
  bookingChild: {
    height: "72.53%",
    width: "157.21%",
    top: "0%",
    right: "-11.16%",
    bottom: "27.47%",
    left: "-46.05%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  bookingItem: {
    top: 585,
    borderRadius: 46,
    height: 347,
    backgroundColor: Color.colorDarkslategray_200,
    width: 430,
    left: 0,
  },
  broughtAveBroomfield: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    left: 73,
    top: 620,
    position: "absolute",
  },
  e180hSt: {
    top: 680,
    left: 73,
    fontFamily: FontFamily.poppinsSemiBold,
    position: "absolute",
  },
  bookingInner: {
    top: 622,
  },
  groupIcon: {
    top: 682,
  },
  lineIcon: {
    top: 650,
    left: 42,
    width: 0,
    height: 26,
    position: "absolute",
  },
  pricesWrapper: {
    left: 346,
    borderRadius: 20,
    backgroundColor: "#515151",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 9,
    paddingVertical: 2,
    top: 620,
    position: "absolute",
  },
  rectangleView: {
    top: 729,
    borderRadius: 32,
    height: 203,
    width: 430,
    left: 0,
    backgroundColor: Color.colorGray_100,
  },
  bookingChild1: {
    left: 7,
  },
  bookingChild2: {
    left: 117,
  },
  bookingChild3: {
    left: 227,
  },
  bookingChild4: {
    left: 337,
  },
  pickupTruckIcon: {
    left: 14,
    height: 50,
    width: 50,
    top: 759,
    position: "absolute",
  },
  lorryIcon: {
    left: 124,
  },
  jeepIcon: {
    left: 235,
  },
  sedanIcon: {
    left: 345,
    height: 50,
    width: 50,
    top: 759,
    position: "absolute",
  },
  pickup: {
    fontSize: FontSize.size_xs,
    top: 800,
  },
  text: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 13,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  lorry: {
    fontSize: FontSize.size_xs,
    top: 800,
  },
  text1: {
    fontSize: FontSize.size_3xs,
    top: 815,
  },
  x4: {
    fontSize: FontSize.size_xs,
    top: 800,
  },
  text2: {
    fontSize: FontSize.size_3xs,
    top: 815,
  },
  comfort: {
    fontSize: FontSize.size_xs,
    top: 800,
  },
  text3: {
    fontSize: FontSize.size_3xs,
    top: 815,
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorOrange,
    shadowColor: "rgba(255, 188, 7, 0.25)",
    shadowRadius: 5.8,
    elevation: 5.8,
    shadowOpacity: 1,
    shadowOffset: {
      width: -4,
      height: -4,
    },
    width: 255,
    left: 0,
  },
  getACar: {
    top: 18,
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    left: 87,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  rectangleParent: {
    top: 861,
    left: 87,
  },
  vectorIcon: {
    top: 191,
    left: 137,
    borderRadius: 3,
    width: 66,
    height: 184,
    position: "absolute",
  },
  booking: {
    borderRadius: Border.br_41xl,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
});

export default Booking;
