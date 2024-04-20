import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Dimensions,
} from "react-native";
import Review from "../review/Review";
// import { styles } from "react-native-image-slider-banner/src/style";

export default function LeaveReview() {
  const name: string = "1984";
  const author: string = "Джордж Оруэлл";
  const [stars, setStars] = useState<number>(5);
  const [inputText, setInputText] = useState<string>("");
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Oставить рецензию</Text>
      <Text style={styles.continue}>{`на книгу ${name}/${author}`}</Text>
      <View style={styles.reviewCont}>
        <View style={styles.starCont}>
          <Image
            style={styles.starPic}
            source={require("../../assets/star.png")}
          ></Image>
          <View style={styles.arrows}>
            <Text style={styles.arrow}>{"<"}</Text>
            <Text style={styles.stars}>{stars}</Text>
            <Text style={styles.arrow}>{">"}</Text>
          </View>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={setInputText}
          value={inputText}
          placeholder="Напишите свое мнение о книге"
        />
      </View>
      <View style={styles.button}>
        <Text style={styles.send}>Отправить рецензию</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 120,
    padding: 10,
    alignItems: "center",
  },
  header: {
    fontSize: 23,
    fontFamily: "Yaldevi",
    fontWeight: "700",
    width: Dimensions.get("window").width - 40,
    height: 30,
  },
  continue: {
    fontSize: 20,
    width: Dimensions.get("window").width - 40,
    marginBottom: 20,
  },
  reviewCont: {
    width: Dimensions.get("window").width - 40,
    height: 200,
    backgroundColor: "#FFF5BF",
    borderRadius: 5,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
  },
  starCont: {
    width: Dimensions.get("window").width - 80,
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  starPic: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
  },
  arrows: {
    width: "30%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrow: {
    width: 30,
    height: 30,
    backgroundColor: "#FF9900",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 5,
  },
  stars: {
    fontSize: 23,
  },
  input: {
    width: Dimensions.get("window").width - 80,
    height: 80,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: 20,
  },
  button: {
    width: Dimensions.get("window").width - 40,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF8A00",
    borderRadius: 5,
  },
  send: {
    color: "white",
    fontSize: 23,
    fontFamily: "Yaldevi",
    fontWeight: "700",
  },
});
