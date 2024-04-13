import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
export default function Bottom() {
  return (
    <View style={styles.bottom}>
      <View style={styles.cont1}>
        <Image
          style={styles.icon}
          source={require("../../assets/home.png")}
        ></Image>
        <Image
          style={styles.icon}
          source={require("../../assets/chat.png")}
        ></Image>
      </View>
      <Image
        style={styles.profile}
        source={require("../../assets/user.png")}
      ></Image>
      <View style={styles.cont2}>
        <Image
          style={styles.icon}
          source={require("../../assets/circle.png")}
        ></Image>
        <Image
          style={styles.icon}
          source={require("../../assets/dots.png")}
        ></Image>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bottom: {
    width: Dimensions.get("window").width,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  cont1: {
    width: "40%",
    height: 70,
    borderTopColor: "black",
    borderTopWidth: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  cont2: {
    width: "40%",
    height: 70,
    borderTopColor: "black",
    borderTopWidth: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  profile: {
    width: 60,
    height: 60,
  },
  icon: {
    width: 50,
    height: 50,
  },
});
