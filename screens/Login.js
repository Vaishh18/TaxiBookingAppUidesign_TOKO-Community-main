import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group3.png")}
      />
      <View style={styles.taxoParent}>
        <Text style={[styles.taxo, styles.taxoFlexBox]}>taxo</Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-16.png")}
        />
      </View>
      <View style={[styles.loginInner, styles.loginPosition]}>
        <View style={styles.groupShadowBox} />
      </View>
      <View style={[styles.loginChild, styles.loginPosition]}>
        <View style={styles.groupShadowBox} />
      </View>
      <View style={styles.loginItem} />
      <Text style={[styles.orSignUp, styles.taxoFlexBox]}>Or sign Up with</Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <Image
          style={[styles.googleIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/google.png")}
        />
        <Image
          style={[styles.facebookIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/facebook.png")}
        />
      </View>
      <Pressable
        style={[styles.wrapper, styles.frameLayout]}
        onPress={() => navigation.navigate("Navigation1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/rectangle-8.png")}
        />
      </Pressable>
      <Text style={styles.login1}>LOGIN</Text>
      <Text style={[styles.emailAddress, styles.passwordTypo]}>
        Email address
      </Text>
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taxoFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  loginPosition: {
    left: "6.05%",
    right: "7.91%",
    width: "86.05%",
    height: "6.44%",
    position: "absolute",
  },
  frameLayout: {
    height: 60,
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    width: 30,
    top: 10,
    position: "absolute",
  },
  passwordTypo: {
    width: "35.58%",
    height: "3.25%",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupIcon: {
    height: "22.53%",
    width: "77.72%",
    top: "11.27%",
    right: "11.12%",
    bottom: "66.2%",
    left: "11.16%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  taxo: {
    fontSize: FontSize.size_41xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "0%",
    top: "0%",
    textAlign: "center",
  },
  groupChild: {
    height: "13.33%",
    width: "8.22%",
    top: "8.89%",
    bottom: "77.78%",
    left: "91.78%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  taxoParent: {
    height: "9.66%",
    width: "33.95%",
    top: "40.24%",
    right: "33.02%",
    bottom: "50.11%",
    left: "33.02%",
    position: "absolute",
  },
  groupShadowBox: {
    borderWidth: 3,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 7.5,
    shadowRadius: 7.5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(94, 91, 91, 0.25)",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGray_100,
    bottom: "0%",
    height: "100%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  loginInner: {
    top: "53%",
    bottom: "40.56%",
  },
  loginChild: {
    top: "64.7%",
    bottom: "28.86%",
  },
  loginItem: {
    height: "27.58%",
    top: "72.42%",
    borderRadius: Border.br_14xl,
    backgroundColor: Color.colorGray_100,
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  orSignUp: {
    top: 693,
    left: 148,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDimgray_100,
  },
  frameChild: {
    left: 175,
    width: 60,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(102, 101, 101, 0.25)",
    top: -5,
    height: 60,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_mini,
  },
  frameItem: {
    left: 265,
    width: 60,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(102, 101, 101, 0.25)",
    top: -5,
    height: 60,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_mini,
  },
  googleIcon: {
    left: 190,
  },
  facebookIcon: {
    left: 280,
  },
  rectangleParent: {
    top: 732,
    left: -47,
    width: 320,
    height: 50,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_smi,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 40,
    top: 822,
    width: 370,
  },
  login1: {
    top: 834,
    left: 184,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  emailAddress: {
    top: "49.79%",
    left: "9.07%",
  },
  password: {
    top: "61.48%",
    left: "2.79%",
  },
  login: {
    borderRadius: Border.br_41xl,
    backgroundColor: Color.colorDarkslategray_100,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
