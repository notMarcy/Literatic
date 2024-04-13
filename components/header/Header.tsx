import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { useFonts } from "expo-font";

export default function Header() {
  const [fontLoaded, fontError] = useFonts({
    ZenDots: require("../../assets/fonts/ZenDots-Regular.ttf"),
  });
  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <Image source={require("../../assets/logo.jpg")} style={styles.image} />
        <Text style={styles.name}>Literatic</Text>
      </View>
      <Image source={require("../../assets/search.png")} style={styles.image} />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 100,
    width: Dimensions.get("window").width,
    backgroundColor: "#ffeb80",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingBottom: 10,
    overflow: "visible",
  },
  logo: {
    width: 200,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  name: {
    fontSize: 21,
    fontFamily: "ZenDots",
  },
});
