import { View, Text, StyleSheet, Dimensions } from "react-native";
import Header from "../header/Header";
import { ImageSlider } from "react-native-image-slider-banner";
import Top from "../top/Top";
import { useFonts } from "expo-font";
export default function Main() {
  const [fontLoaded, fontError] = useFonts({
    Yaldevi: require("../../assets/fonts/Yaldevi-VariableFont_wght.ttf"),
  });
  return (
    <View style={styles.main}>
      <View style={styles.slider}>
        <ImageSlider
          data={[
            {
              img: require("../../assets/banner1.jpg"),
            },
            {
              img: require("../../assets/banner2.jpg"),
            },
            {
              img: require("../../assets/banner1.jpg"),
            },
          ]}
          localImg={true}
          showHeader
          preview={false}
          onItemChanged={(item) => console.log("item", item)}
          onClick={(item, index) => {
            alert("Перенаправление на книгу");
          }}
        />
      </View>
      <Text style={styles.headerText}>В тренде</Text>
      <Top />
    </View>
  );
}
const styles = StyleSheet.create({
  slider: {
    width: Dimensions.get("window").width,
    height: 300,
  },
  headerText: {
    fontFamily: "Yaldevi",
    color: "black",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 15,
    marginLeft: 20,
    zIndex: 2,
    backgroundColor: "white",
    width: Dimensions.get("window").width,
  },
  main: {
    height: Dimensions.get("window").height - 120,
    width: Dimensions.get("window").width,
  },
});
