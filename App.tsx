import { StyleSheet, View } from "react-native";
import Header from "./components/header/Header";
import Review from "./components/review/Review";
import { useFonts } from "expo-font";
import Bottom from "./components/bottom/Bottom";
import Main from "./components/main/main";
import Likes from "./components/likes/Likes";
import Profile from "./components/profile/Profile";
import Search from "./components/search/Search";
import Book from "./components/book/Book";
import LeaveReview from "./components/leaveReview/leaveReview";
export default function App() {
  const [fontLoaded, fontError] = useFonts({
    Yaldevi: require("./assets/fonts/Yaldevi-VariableFont_wght.ttf"),
  });
  return (
    <View style={styles.container}>
      <Header />
      {/* <Main /> */}
      {/* <Review /> */}
      {/* <Likes /> */}
      {/* <Profile /> */}
      {/* <Search /> */}
      {/* <Book /> */}
      <LeaveReview />
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
});
