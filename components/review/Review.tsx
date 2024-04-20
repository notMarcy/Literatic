import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font";
// import { styles } from "react-native-image-slider-banner/src/style";
interface Review {
  id: string;
  book: string;
  author: string;
  text: string;
  stars: number;
  likes: number;
  userId: string;
}
export default function Review() {
  const [fontLoaded, fontError] = useFonts({
    Yaldevi: require("../../assets/fonts/Yaldevi-VariableFont_wght.ttf"),
  });
  const [myReviews, setMyReviews] = useState<Review[]>([
    {
      id: "73y1hgjkr",
      book: "Оно",
      author: "Стивен Кинг",
      text: "Крайне интересная и атмосферная книга! Всем рекомендую к прочтению.",
      stars: 5,
      likes: 100,
      userId: "848hgu5g",
    },
  ]);
  const renderItem = ({ item }: { item: Review }) => (
    <View style={styles.review}>
      <View style={styles.info}>
        <View style={styles.user}>
          <Image
            source={require("../../assets/user.png")}
            style={styles.icon}
          ></Image>
          <Text style={styles.name}>
            {item.book}/{item.author}
          </Text>
        </View>
        <View style={styles.stars}>
          <Text style={styles.starsNum}>{item.stars.toString()}</Text>
          <Image
            source={require("../../assets/star.png")}
            style={styles.star}
          ></Image>
        </View>
      </View>
      {/* <View style={styles.text}> */}
      <Text style={styles.reviewText}>{item.text}</Text>
      {/* </View> */}
      <View style={styles.likes}>
        <Text style={styles.likesNum}>{item.likes.toString()}</Text>
        <Image
          source={require("../../assets/love.png")}
          style={styles.star}
        ></Image>
      </View>
    </View>
  );
  return (
    <View style={styles.reviewsCont}>
      <View style={styles.header}>
        <View style={styles.headerPodCont}>
          <Image
            source={require("../../assets/chat.png")}
            style={styles.chat}
          ></Image>
          <Text style={styles.headerText}>Мои рецензии</Text>
        </View>
        {/* <Image source={require}></Image> */}
      </View>
      <FlatList
        data={myReviews}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.reviewCont}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  reviewsCont: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 120,
    padding: 15,
  },
  header: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    alignItems: "center",
    marginBottom: 10,
  },
  headerPodCont: {
    width: Dimensions.get("window").width / 2,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 23,
    fontFamily: "Yaldevi",
    fontWeight: "700",
  },
  reviewCont: {
    width: Dimensions.get("window").width - 30,
    minHeight: 0,
    height: "auto",
  },
  review: {
    width: Dimensions.get("window").width - 30,
    height: "auto",
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    padding: 10,
    // paddingTop: 5,
  },
  info: {
    width: Dimensions.get("window").width - 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
  },
  user: {
    width: Dimensions.get("window").width - 110,
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontFamily: "Yaldevi",
    fontWeight: "700",
  },
  stars: {
    width: 45,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  starsNum: { fontSize: 18, fontFamily: "Yaldevi", fontWeight: "700" },
  //   text: {},
  reviewText: {
    fontSize: 17,
    // fontFamily: "Yaldevi",
    fontStyle: "normal",
    // fontWeight: "600",
    marginBottom: 10,
  },
  likes: {
    width: Dimensions.get("window").width,
    height: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  likesNum: {
    fontSize: 17,
    fontFamily: "Yaldevi",
    fontWeight: "700",
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  star: {
    width: 30,
    height: 30,
  },
  chat: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
});
