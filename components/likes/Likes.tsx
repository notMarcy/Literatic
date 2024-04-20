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
interface Book {
  id: string;
  book: string;
  author: string;
  genre: string;
  stars: number;
  photo: string;
  feedback: number;
}
export default function Likes() {
  const [fontLoaded, fontError] = useFonts({
    Yaldevi: require("../../assets/fonts/Yaldevi-VariableFont_wght.ttf"),
  });
  const [myReviews, setMyReviews] = useState<Book[]>([
    {
      id: "73y1hgjkr",
      book: "Оно",
      author: "Стивен Кинг",
      genre: "Роман",
      stars: 5,
      feedback: 6483,
      photo:
        "https://img4.labirint.ru/rc/e7b09ad7fe7144fac9b33e9598174766/363x561q80/books30/294422/cover.jpg?1612524322",
    },
  ]);
  const renderItem = ({ item }: { item: Book }) => (
    <View style={styles.book}>
      <Image source={{ uri: item.photo }} style={styles.image}></Image>
      <View style={styles.name}>
        <View style={styles.textCont}>
          <Text style={styles.bookName}>
            {item.book}/{item.author}
          </Text>
          <Text style={styles.bookGenre}>{item.genre}</Text>
        </View>
        <Text style={styles.feedbacks}>{item.feedback + " рецензий"} </Text>
      </View>
      <View style={styles.star}>
        <Image
          style={styles.starImg}
          source={require("../../assets/love.png")}
        ></Image>
        <View style={styles.starCont}>
          <Image
            style={styles.starImg}
            source={require("../../assets/star.png")}
          ></Image>
          <Text style={styles.rank}>{item.stars}</Text>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.reviewsCont}>
      <View style={styles.header}>
        <View style={styles.headerPodCont}>
          <Image
            source={require("../../assets/circle.png")}
            style={styles.circle}
          ></Image>
          <Text
            style={styles.headerText}
          >{`Избранное (${myReviews.length})`}</Text>
        </View>
        <Image
          source={require("../../assets/setting-lines.png")}
          style={styles.settings}
        ></Image>
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
  book: {
    width: Dimensions.get("window").width - 20,
    height: 120,
    backgroundColor: "#D9D9D9",
    flexDirection: "row",
    padding: 10,
    marginBottom: 20,
    overflow: "visible",
    borderRadius: 10,
  },
  reviewsCont: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 120,
    padding: 10,
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
    width: Dimensions.get("window").width - 20,
    minHeight: 0,
    height: "auto",
  },
  name: {
    justifyContent: "space-between",
    paddingBottom: 10,
    flex: 1,
  },
  textCont: {
    flex: 1,
  },
  bookName: {
    fontWeight: "700",
    fontSize: 16,
  },
  bookGenre: {
    fontSize: 15,
  },
  feedbacks: {
    fontSize: 15,
  },
  starImg: {
    width: 30,
    height: 30,
  },
  star: {
    height: "100%",
    width: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  rank: {
    color: "black",
    position: "relative",
    top: -5,
    fontSize: 20,
    fontWeight: "700",
  },
  numberT: {
    fontSize: 13,
    color: "white",
    fontWeight: "900",
  },
  image: {
    width: 70,
    height: 100,
    objectFit: "contain",
    marginRight: 15,
  },
  starCont: {
    height: "50%",
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  settings: {
    width: 30,
    height: 30,
    marginRight: 30,
  },
});
