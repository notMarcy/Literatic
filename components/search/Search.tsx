import { useState } from "react";
import {
  View,
  TextInput,
  Image,
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
// import { styles } from "react-native-image-slider-banner/src/style";
import { useFonts } from "expo-font";
interface Book {
  id: string;
  book: string;
  author: string;
  genre: string;
  stars: number;
  photo: string;
  feedback: number;
}
export default function Search() {
  const [fontLoaded, fontError] = useFonts({
    Yaldevi: require("../../assets/fonts/Yaldevi-VariableFont_wght.ttf"),
  });
  const [inputText, setInputText] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);
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
    {
      id: "78y1hgjkr",
      book: "1984",
      author: "Джордж Оруэлл",
      genre: "Роман-антиутопия",
      stars: 5,
      feedback: 7683,
      photo:
        "https://cdn.book24.ru/v2/AST000000000130417/COVER/cover13d__w820.jpg",
    },
  ]);
  const findBooks = (text: string) => {
    setBooks(myReviews.filter((el: Book) => el.book == text));
  };
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
    <View style={styles.container}>
      <View style={styles.searchCont}>
        <TextInput
          style={styles.input}
          onChangeText={setInputText}
          value={inputText}
          placeholder="Введите название книги..."
        ></TextInput>
        <TouchableOpacity onPress={() => findBooks(inputText)}>
          <Image
            source={require("../../assets/search.png")}
            style={styles.loop}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={books}
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
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 120,
    padding: 15,
  },
  searchCont: {
    width: Dimensions.get("window").width - 30,
    height: 90,
    paddingBottom: 15,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    width: "83%",
    height: 70,
    backgroundColor: "#FBFFCF",
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    fontSize: 20,
  },
  loop: {
    width: 50,
    height: 50,
    borderRadius: 70,
  },
  reviewCont: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 210,
    paddingTop: 15,
  },
});
