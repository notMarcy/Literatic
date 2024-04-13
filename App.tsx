import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, Dimensions } from "react-native";
import Header from "./components/header/Header";
import { ImageSlider } from "react-native-image-slider-banner";
import Top from "./components/Top";
import { useFonts } from "expo-font";
import Bottom from "./components/bottom/Bottom";
export default function App() {
  const [fontLoaded, fontError] = useFonts({
    Yaldevi: require("./assets/fonts/Yaldevi-VariableFont_wght.ttf"),
  });
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.slider}>
        <ImageSlider
          data={[
            {
              img: require("./assets/banner1.jpg"),
            },
            {
              img: require("./assets/banner2.jpg"),
            },
            {
              img: require("./assets/banner1.jpg"),
            },
          ]}
          localImg={true}
          showHeader
          preview={false}
          onItemChanged={(item) => console.log("item", item)}
          // previewImageContainerStyle
          // caroselImageStyle={{ resizeMode: "cover" }}
          onClick={(item, index) => {
            alert("Перенаправление на книгу");
          }}
        />
      </View>
      <Text style={styles.headerText}>В тренде</Text>
      <Top />
      <Bottom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  slider: {
    width: Dimensions.get("window").width,
    height: 300,
  },
  headerText: {
    fontFamily: "Yaldevi",
    color: "black",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
    marginLeft: 20,
    zIndex: 2,
    backgroundColor: "white",
    width: Dimensions.get("window").width,
  },
});
