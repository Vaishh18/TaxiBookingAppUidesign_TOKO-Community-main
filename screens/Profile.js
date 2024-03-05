import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <Image
        style={[styles.profileChild, styles.profileChildLayout]}
        contentFit="cover"
        source={require("../assets/group-12.png")}
      />
      <View style={styles.profileInner}>
        <View style={styles.rectangleParent}>
          <LinearGradient
            style={[styles.groupChild, styles.groupChildBorder]}
            locations={[0, 1]}
            colors={["rgba(53, 63, 84, 0.5)", "rgba(34, 40, 52, 0.5)"]}
          />
          <Image
            style={[styles.maskGroupIcon, styles.profileChildLayout]}
            contentFit="cover"
            source={require("../assets/mask-group.png")}
          />
          <Text style={[styles.editProfile, styles.homeTypo]}>
            Edit Profile
          </Text>
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          <Text style={[styles.work, styles.homeTypo]}>Work</Text>
          <Text style={[styles.steveJonas, styles.favoritesTypo]}>
            Steve Jonas
          </Text>
          <Text style={[styles.favorites, styles.favoritesTypo]}>
            FAVORITES
          </Text>
          <Text style={[styles.notifications, styles.pastRidesTypo]}>
            Notifications
          </Text>
          <Text style={[styles.pastRides, styles.pastRidesTypo]}>
            Past Rides
          </Text>
          <Text style={[styles.paymentOptions, styles.pastRidesTypo]}>
            Payment Options
          </Text>
        </View>
      </View>
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <Image
        style={[styles.frameIcon1, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame1.png")}
      />
      <View style={[styles.profileItem, styles.groupChildBorder]} />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-9.png")}
      />
      <Image
        style={styles.profileChild1}
        contentFit="cover"
        source={require("../assets/line-10.png")}
      />
      <Image
        style={[styles.profileChild2, styles.profileChildPosition]}
        contentFit="cover"
        source={require("../assets/line-10.png")}
      />
      <Image
        style={[styles.profileChild3, styles.profileChildPosition]}
        contentFit="cover"
        source={require("../assets/line-10.png")}
      />
      <Image
        style={[styles.frameIcon2, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/frame2.png")}
      />
      <Image
        style={[styles.frameIcon3, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/frame2.png")}
      />
      <Image
        style={styles.frameIcon4}
        contentFit="cover"
        source={require("../assets/frame3.png")}
      />
      <Image
        style={[styles.frameIcon5, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame4.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-25.png")}
      />
      <Image
        style={styles.frameIcon6}
        contentFit="cover"
        source={require("../assets/frame5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChildBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  homeTypo: {
    textAlign: "center",
    color: Color.colorGainsboro,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    width: "39.1%",
    height: "4.64%",
    position: "absolute",
  },
  favoritesTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    width: "32.98%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    height: "4.64%",
    position: "absolute",
  },
  pastRidesTypo: {
    fontSize: FontSize.size_lg,
    height: "4.65%",
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  frameIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  profileChildPosition: {
    left: 60,
    width: 296,
    maxHeight: "100%",
    position: "absolute",
  },
  frameIconPosition: {
    left: 335,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  profileChild: {
    width: "216.74%",
    right: "-45.12%",
    left: "-71.63%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  groupChild: {
    width: "98.4%",
    left: "1.6%",
    borderRadius: Border.br_16xl,
    borderColor: Color.colorGray_200,
    borderWidth: 2,
    backgroundColor: "transparent",
    right: "0%",
    borderStyle: "solid",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  maskGroupIcon: {
    height: "21.11%",
    width: "49.2%",
    top: "12.69%",
    right: "26.33%",
    bottom: "66.21%",
    left: "24.47%",
  },
  editProfile: {
    top: "39.57%",
    left: "29.79%",
  },
  home: {
    top: "52.14%",
    left: "18.35%",
  },
  work: {
    top: "58.92%",
    left: "17.55%",
  },
  steveJonas: {
    top: "35%",
    left: "34.31%",
  },
  favorites: {
    top: "45.35%",
    left: "12.5%",
  },
  notifications: {
    top: "68.84%",
    left: "2.93%",
    fontSize: FontSize.size_lg,
    height: "4.65%",
    width: "44.41%",
  },
  pastRides: {
    top: "75.63%",
    width: "44.41%",
    fontSize: FontSize.size_lg,
    height: "4.65%",
    left: "0%",
  },
  paymentOptions: {
    width: "55.05%",
    top: "83.54%",
    left: "2.93%",
    fontSize: FontSize.size_lg,
    height: "4.65%",
  },
  rectangleParent: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  profileInner: {
    height: "85.41%",
    width: "87.44%",
    top: "3.11%",
    right: "7.91%",
    bottom: "11.48%",
    left: "4.65%",
    position: "absolute",
  },
  frameIcon: {
    top: 456,
    left: 83,
    height: 24,
    width: 24,
  },
  frameIcon1: {
    top: 509,
    left: 83,
    height: 24,
    width: 24,
  },
  profileItem: {
    top: 493,
    left: 136,
    borderColor: Color.colorDarkgray,
    borderTopWidth: 1,
    width: 236,
    height: 1,
  },
  lineIcon: {
    top: 546,
    left: 133,
    width: 235,
    height: 0,
    position: "absolute",
  },
  profileChild1: {
    top: 630,
    left: 62,
    width: 296,
    maxHeight: "100%",
    position: "absolute",
  },
  profileChild2: {
    top: 686,
  },
  profileChild3: {
    top: 757,
  },
  frameIcon2: {
    top: 462,
  },
  frameIcon3: {
    top: 515,
  },
  frameIcon4: {
    top: 591,
    left: 320,
    width: 31,
    height: 25,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon5: {
    top: 646,
    left: 323,
  },
  groupIcon: {
    top: 846,
    left: 23,
    width: 370,
    height: 60,
    position: "absolute",
  },
  frameIcon6: {
    top: 708,
    left: 321,
    width: 28,
    height: 32,
    position: "absolute",
    overflow: "hidden",
  },
  profile: {
    borderRadius: Border.br_41xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile;
