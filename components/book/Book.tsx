import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
interface Book {
  id: string;
  book: string;
  author: string;
  genre: string[];
  stars: number;
  photo: string;
  description: string;
  year: number;
  feedback: number;
}
interface Review {
  id: string;
  text: string;
  stars: number;
  likes: number;
  userName: string;
  userPhoto: string;
}
export default function Book() {
  const [myReviews, setMyReviews] = useState<Review[]>([
    {
      id: "73y1hgjkr",
      text: "Крайне интересная и атмосферная книга! Всем рекомендую к прочтению.",
      stars: 5,
      likes: 100,
      userName: "CyberCritic334",
      userPhoto: "../../assets/user.png",
    },
    {
      id: "73y1htjkr",
      text: "Фе",
      stars: 3,
      likes: 1,
      userName: "Pupupu",
      userPhoto: "../../assets/user.png",
    },
  ]);
  const renderItem = ({ item }: { item: Review }) => (
    <View style={styles.review}>
      <View style={styles.info}>
        <View style={styles.user}>
          {/* <Image source={require(`${item.userPhoto}`)}></Image> */}
          <Text style={styles.username}>{item.userName}</Text>
        </View>
        <View style={styles.stars}>
          <Text style={styles.starsNum}>{item.stars.toString()}</Text>
          <Image
            style={styles.star}
            source={require("../../assets/star.png")}
          ></Image>
        </View>
      </View>
      {/* <View style={styles.text}> */}
      <Text style={styles.reviewText}>{item.text}</Text>
      {/* </View> */}
      <View style={styles.likes}>
        <Text style={styles.likesNum}>{item.likes.toString()}</Text>
        <Image
          style={styles.like}
          source={require("../../assets/love.png")}
        ></Image>
      </View>
    </View>
  );
  const [fontLoaded, fontError] = useFonts({
    ZenDots: require("../../assets/fonts/ZenDots-Regular.ttf"),
    Yaldevi: require("../../assets/fonts/Yaldevi-VariableFont_wght.ttf"),
  });
  const [user, setUser] = useState<Book>({
    id: "734yuig3",
    book: "1984",
    author: "Джордж Оруэлл",
    stars: 4.876,
    genre: ["Фантастика"],
    photo: "#",
    description:
      "Одна из самых знаменитых антиутопий XX века – роман «1984» английского писателя Джорджа Оруэлла продолжает тему «преданной революции». По Оруэллу, нет и не...",
    year: 1948,
    feedback: 3543,
  });
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.heart}
        source={require("../../assets/like.png")}
      ></Image>
      <View style={styles.topCont}>
        <Image
          style={styles.photo}
          source={{
            uri: "https://cdn.book24.ru/v2/AST000000000130417/COVER/cover13d__w820.jpg",
          }}
        ></Image>
        <Text style={styles.nameBook}>{user.book}</Text>
      </View>
      <View style={styles.profileInfo}>
        <View style={styles.name}>
          <Text style={styles.textInfo}>{`Год издания: ${user.year}`}</Text>
        </View>
        <View style={styles.name}>
          <Text style={styles.textInfo}>{`Автор: ${user.author}`}</Text>
        </View>
        <View style={styles.name}>
          <Text style={styles.textInfo}>{`Оценка: ${user.stars}`}</Text>
        </View>
        <View style={styles.name}>
          <Text style={styles.textInfo}>{`Жанр: ${user.genre.map(
            (el) => el + ","
          )}`}</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.textInfo}>Описание:</Text>
          <Text style={styles.textInfo}>{user.description}</Text>
        </View>
      </View>
      <Text style={styles.reviewHeader}>
        {`Рецензии (${user.feedback.toString()})`}
      </Text>
      <View style={styles.leaveReview}>
        <View style={styles.leaveTReview}>
          <Text style={styles.leaveRT}>Оставить рецензию</Text>
        </View>
      </View>
      <FlatList
        data={myReviews}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.reviewCont}
      ></FlatList>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  reviewCont: {
    width: Dimensions.get("window").width,
    padding: 15,
  },
  reviewHeader: {
    width: Dimensions.get("window").width,
    height: 40,
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 15,
    fontSize: 23,
    fontFamily: "Yaldevi",
    fontWeight: "700",
  },
  leaveReview: {
    width: Dimensions.get("window").width,
    height: 55,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  leaveTReview: {
    width: Dimensions.get("window").width - 30,
    height: 55,
    backgroundColor: "#FF9900",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  leaveRT: {
    color: "white",
    fontSize: 25,
    fontFamily: "Yaldevi",
    fontWeight: "700",
  },
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 120,
  },
  heart: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 5,
    right: 5,
    // backgroundColor: "red",
  },
  topCont: {
    width: Dimensions.get("window").width,
    height: 380,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  photo: {
    width: 210,
    height: 310,
    borderWidth: 1,
    borderRadius: 10,
  },
  nameBook: {
    fontFamily: "ZenDots",
    fontSize: 23,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 10,
  },
  profileInfo: {
    width: Dimensions.get("window").width,
    height: "auto",
    backgroundColor: "#FFEACB",
  },
  name: {
    width: Dimensions.get("window").width,
    height: 50,
    borderBottomWidth: 1,
    padding: 10,
    paddingLeft: 20,
  },
  textInfo: {
    fontSize: 18,
  },
  description: {
    width: Dimensions.get("window").width,
    height: "auto",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  review: {
    width: Dimensions.get("window").width - 30,
    height: "auto",
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
    paddingTop: 5,
  },
  info: {
    width: Dimensions.get("window").width - 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
  },
  user: {
    width: Dimensions.get("window").width - 100,
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  username: {
    fontSize: 18,
    fontFamily: "Yaldevi",
    fontWeight: "700",
  },
  stars: {
    width: 40,
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
  star: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  like: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
});
