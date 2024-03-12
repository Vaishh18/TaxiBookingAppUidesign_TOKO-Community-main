import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Account = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.account}>
      <View style={styles.iphone1415ProMax10Wrapper}>
        <View style={[styles.iphone1415ProMax10, styles.groupPosition]}>
          <View
            style={[styles.iphone1415ProMax10Inner, styles.iphone1415Layout]}
          >
            <View style={[styles.groupWrapper, styles.iphone1415Position]}>
              <View style={styles.iphone1415Layout}>
                <View
                  style={[styles.iphone1415ProMax9, styles.iphone1415Layout]}
                >
                  <Image
                    style={[styles.groupIcon, styles.groupLayout]}
                    contentFit="cover"
                    source={require("../assets/group.png")}
                  />
                  <View style={styles.taxoParent}>
                    <Text style={styles.taxo}>taxo</Text>
                    <Image
                      style={[styles.groupChild, styles.groupLayout]}
                      contentFit="cover"
                      source={require("../assets/ellipse-12.png")}
                    />
                  </View>
                  <Text style={[styles.orSignUp, styles.signTypo]}>
                    Or sign Up with
                  </Text>
                  <Text style={[styles.orSignUp1, styles.signTypo]}>
                    Or sign Up with
                  </Text>
                  <View style={[styles.rectangleParent, styles.groupPosition]}>
                    <View style={styles.groupItem} />
                    <Pressable
                      style={styles.groupInner}
                      onPress={() => navigation.navigate("Login")}
                    />
                    <Text style={[styles.createAccount, styles.passwordTypo]}>
                      CREATE ACCOUNT
                    </Text>
                    <View
                      style={[
                        styles.rectangleWrapper,
                        styles.rectanglePosition,
                      ]}
                    >
                      <View
                        style={[
                          styles.rectangleView,
                          styles.groupChildShadowBox,
                        ]}
                      />
                    </View>
                    <View style={styles.rectangleGroup}>
                      <View
                        style={[styles.groupChild1, styles.groupChildShadowBox]}
                      />
                      <View
                        style={[styles.groupContainer, styles.groupPosition]}
                      >
                        <View
                          style={[styles.groupContainer, styles.groupPosition]}
                        >
                          <Text style={[styles.password, styles.passwordTypo]}>
                            Password
                          </Text>
                          <Text
                            style={[
                              styles.emailAddress,
                              styles.emailAddressLayout,
                            ]}
                          >
                            Email Address
                          </Text>
                          <Text
                            style={[styles.alreadyHaveAn, styles.signIn1Typo]}
                          >
                            Already have an account?
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.rectangleContainer,
                        styles.rectanglePosition,
                      ]}
                    >
                      <View
                        style={[styles.groupChild2, styles.groupChildShadowBox]}
                      />
                      <View style={styles.groupFrame}>
                        <View
                          style={[styles.groupContainer, styles.groupPosition]}
                        >
                          <Text
                            style={[
                              styles.confirmPassword,
                              styles.passwordTypo,
                            ]}
                          >
                            Confirm Password
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <Pressable
                    style={styles.signIn}
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text style={[styles.signIn1, styles.signIn1Typo]}>
                      Sign in
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    bottom: "0%",
    right: "0%",
  },
  iphone1415Layout: {
    height: 974,
    width: 463,
  },
  iphone1415Position: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  signTypo: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_mini,
    width: "26.05%",
    height: "2.46%",
    textAlign: "center",
    position: "absolute",
  },
  passwordTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorWhite,
  },
  rectanglePosition: {
    right: "13.93%",
    position: "absolute",
  },
  groupChildShadowBox: {
    borderWidth: 3,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    elevation: 7.5,
    shadowRadius: 7.5,
    shadowColor: "rgba(94, 91, 91, 0.25)",
    borderRadius: Border.br_mini,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: Color.colorGray_100,
    position: "absolute",
  },
  emailAddressLayout: {
    height: "6.34%",
    position: "absolute",
  },
  signIn1Typo: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  groupIcon: {
    height: "22.54%",
    width: "77.73%",
    top: "11.26%",
    right: "11.1%",
    bottom: "66.2%",
    left: "11.17%",
  },
  taxo: {
    width: "95.23%",
    fontSize: FontSize.size_41xl,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  groupChild: {
    height: "13.28%",
    width: "8.21%",
    top: "8.93%",
    bottom: "77.79%",
    left: "91.79%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  taxoParent: {
    height: "9.66%",
    width: "33.95%",
    top: "37.01%",
    right: "34.64%",
    bottom: "53.33%",
    left: "31.4%",
    position: "absolute",
  },
  orSignUp: {
    top: "95.17%",
    left: "29.76%",
  },
  orSignUp1: {
    top: "94.63%",
    left: "33.02%",
  },
  groupItem: {
    width: "97.27%",
    left: "2.73%",
    borderTopLeftRadius: Border.br_14xl,
    borderTopRightRadius: Border.br_14xl,
    backgroundColor: Color.colorGray_100,
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  groupInner: {
    height: "11.86%",
    top: "77.67%",
    right: "13.13%",
    bottom: "10.47%",
    left: "12.21%",
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorOrange,
    shadowColor: "rgba(255, 188, 7, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    width: "74.66%",
    position: "absolute",
  },
  createAccount: {
    height: "5.93%",
    width: "43.72%",
    top: "80.63%",
    left: "31.09%",
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    position: "absolute",
  },
  rectangleView: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    width: "100%",
  },
  rectangleWrapper: {
    height: "11.96%",
    top: "11.46%",
    bottom: "76.58%",
    left: "11.41%",
    width: "74.66%",
    right: "13.93%",
  },
  groupChild1: {
    height: "12.79%",
    width: "85.51%",
    top: "34.25%",
    right: "1.42%",
    bottom: "52.96%",
    left: "13.07%",
  },
  password: {
    height: "6.41%",
    width: "35.37%",
    top: "25.37%",
    left: "9.84%",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  emailAddress: {
    width: "44.3%",
    left: "11.43%",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    top: "0%",
  },
  alreadyHaveAn: {
    top: "93.66%",
    color: Color.colorDarkgray,
    height: "6.34%",
    position: "absolute",
    left: "0%",
    width: "100%",
  },
  groupContainer: {
    left: "0%",
    height: "100%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  rectangleGroup: {
    height: "93.48%",
    width: "87.31%",
    top: "3.56%",
    right: "12.69%",
    bottom: "2.96%",
    left: "0%",
    position: "absolute",
  },
  groupChild2: {
    height: "56.81%",
    width: "96.39%",
    top: "43.19%",
    left: "3.61%",
    bottom: "0%",
    right: "0%",
  },
  confirmPassword: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: "0%",
    height: "100%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  groupFrame: {
    height: "28.17%",
    width: "67.15%",
    right: "32.85%",
    bottom: "71.83%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  rectangleContainer: {
    height: "21.05%",
    width: "77.46%",
    top: "50%",
    bottom: "28.95%",
    left: "8.61%",
  },
  rectangleParent: {
    height: "51.95%",
    width: "102.81%",
    top: "48.05%",
    left: "-2.81%",
    position: "absolute",
  },
  signIn1: {
    height: "2.36%",
    width: "21.38%",
    color: "#299ad9",
  },
  signIn: {
    left: "62.42%",
    top: "95.38%",
    position: "absolute",
  },
  iphone1415ProMax9: {
    borderTopLeftRadius: Border.br_41xl,
    borderTopRightRadius: Border.br_41xl,
    backgroundColor: Color.colorDarkslategray_100,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupWrapper: {
    borderRadius: 30,
    flexDirection: "row",
  },
  iphone1415ProMax10Inner: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  iphone1415ProMax10: {
    backgroundColor: Color.colorDarkslategray_200,
    overflow: "hidden",
    left: "0%",
    height: "100%",
    top: "0%",
    width: "100%",
    position: "absolute",
    borderRadius: Border.br_41xl,
  },
  iphone1415ProMax10Wrapper: {
    height: "104.51%",
    width: "107.67%",
    right: "-3.72%",
    bottom: "-4.51%",
    left: "-3.95%",
    top: "0%",
    position: "absolute",
  },
  account: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    width: "100%",
   
  },
});

export default Account;
