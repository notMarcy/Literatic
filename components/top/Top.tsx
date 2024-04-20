import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
interface Book {
  name: string;
  author: string;
  rank: number;
  photo: string;
  feedback: number;
  genre: string;
  place: number;
  id: string;
}
export default function Top() {
  const trendBooks = useState<Book[]>([
    {
      name: "1984",
      author: "Джордж Оруэлл",
      rank: 4.99,
      photo:
        "https://cdn.book24.ru/v2/AST000000000130417/COVER/cover13d__w820.jpg",
      feedback: 3456,
      genre: "Роман-антиутопия",
      place: 1,
      id: "b76tfjyh",
    },
    {
      name: "Гордость и предубеждение",
      author: "Джейн Остин",
      rank: 4.98,
      photo:
        "https://th.bing.com/th/id/R.78b4f290d66534733740341e203ab032?rik=SWWXI4YMhYYK1Q&pid=ImgRaw&r=0",
      feedback: 3656,
      genre: "Роман",
      place: 2,
      id: "876tfjyh",
    },
    {
      name: "Оно",
      author: "Стивен Кинг",
      rank: 4.97,
      photo:
        "https://img4.labirint.ru/rc/e7b09ad7fe7144fac9b33e9598174766/363x561q80/books30/294422/cover.jpg?1612524322",
      feedback: 6556,
      genre: "Роман",
      place: 3,
      id: "856tfjyh",
    },
  ]);
  const [trendBooksArray] = trendBooks;
  const renderItem = ({ item }: { item: Book }) => (
    <View style={styles.book}>
      <View style={styles.numberCont}>
        <View style={styles.number}>
          <Text style={styles.numberT}>{item.place}</Text>
        </View>
      </View>
      <Image source={{ uri: item.photo }} style={styles.image}></Image>
      <View style={styles.name}>
        <View style={styles.textCont}>
          <Text style={styles.bookName}>
            {item.name}/{item.author}
          </Text>
          <Text style={styles.bookGenre}>{item.genre}</Text>
        </View>
        <Text style={styles.feedbacks}>{item.feedback + " рецензий"} </Text>
      </View>
      <View style={styles.star}>
        <Image
          style={styles.starImg}
          source={require("../../assets/star.png")}
        ></Image>
        <Text style={styles.rank}>{item.rank}</Text>
      </View>
    </View>
  );
  return (
    <FlatList
      data={trendBooksArray}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.topCont}
    />
  );
}
const styles = StyleSheet.create({
  trend: {
    height: 200,
    width: Dimensions.get("window").width,
    backgroundColor: "black",
    overflow: "visible",
  },
  book: {
    width: Dimensions.get("window").width - 40,
    height: 120,
    backgroundColor: "#D9D9D9",
    flexDirection: "row",
    padding: 10,
    paddingLeft: 0,
    marginBottom: 20,
    overflow: "visible",
    borderRadius: 10,
  },
  topCont: {
    width: Dimensions.get("window").width,
    height: "auto",
    paddingLeft: 20,
    paddingRight: 20,
    overflow: "hidden",
  },
  numberCont: {
    height: "100%",
    width: "auto",
    top: -10,
  },
  number: {
    height: 25,
    width: 25,
    backgroundColor: "#FF9900",
    borderRadius: 15,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
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
    width: 40,
    height: 40,
  },
  star: {
    height: "100%",
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  rank: {
    color: "black",
    position: "relative",
    top: -30,
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
    marginRight: 10,
  },
});
