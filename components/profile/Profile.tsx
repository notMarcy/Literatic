import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
interface User {
  id: string;
  name: string;
  birthday: string;
  reviews: number;
  level: string;
  photo: string;
  sex: "М" | "Ж";
}
export default function Profile() {
  const [fontLoaded, fontError] = useFonts({
    Yaldevi: require("../../assets/fonts/Yaldevi-VariableFont_wght.ttf"),
  });
  const [user, setUser] = useState<User>({
    id: "734yuig3",
    name: "GreatBookReader345",
    birthday: "10 января 1987",
    reviews: 1,
    level: "Новичок",
    photo: "#",
    sex: "М",
  });
  return (
    <View style={styles.profileCont}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/user.png")}
          style={styles.userPng}
        ></Image>
        <Text style={styles.headerText}>Мой профиль</Text>
      </View>
      <View style={styles.info}>
        <View style={styles.photoCont}>
          <Image
            style={styles.photo}
            source={require("../../assets/user.png")}
          ></Image>
          <View style={styles.changePhoto}>
            <Image
              style={styles.changePhotoPic}
              source={require("../../assets/image-gallery.png")}
            ></Image>
            <View style={styles.textCh}>
              <Text style={styles.change}>Изменить фото</Text>
            </View>
          </View>
        </View>
        <View style={styles.profileInfo}>
          <View style={styles.name}>
            <Text style={styles.textInfo}>{`Имя: ${user.name}`}</Text>
          </View>
          <View style={styles.name}>
            <Text
              style={styles.textInfo}
            >{`День рождения: ${user.birthday}`}</Text>
          </View>
          <View style={styles.name}>
            <Text
              style={styles.textInfo}
            >{`Количество рецензий: ${user.reviews}`}</Text>
          </View>
          <View style={styles.name}>
            <Text style={styles.textInfo}>{`Уровень: ${user.level}`}</Text>
          </View>
          <View style={styles.name}>
            <Text style={styles.textInfo}>{`Пол: ${user.sex}`}</Text>
          </View>
          <View style={styles.button}>
            <View style={styles.but}>
              <Text style={styles.butText}>Выйти из аккаунта</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  profileCont: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 120,
    paddingTop: 10,
  },
  header: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 50,
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
  },
  headerText: {
    fontSize: 23,
    fontFamily: "Yaldevi",
    fontWeight: "700",
  },
  info: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
  photoCont: {
    width: Dimensions.get("window").width,
    height: "43%",
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    width: 230,
    height: 230,
    borderRadius: 150,
  },
  changePhoto: {
    width: "45%",
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#FFFCEA",
    justifyContent: "center",
  },
  changePhotoPic: {
    width: "25%",
    height: 35,
  },
  textCh: {
    width: "75%",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  change: {
    fontSize: 17,
    fontFamily: "Yaldevi",
    fontWeight: "700",
  },
  profileInfo: {
    width: Dimensions.get("window").width,
    height: "55%",
    backgroundColor: "#FFEACB",
  },
  name: {
    width: Dimensions.get("window").width,
    height: 50,
    borderBottomWidth: 1,
    padding: 10,
    paddingLeft: 30,
  },
  textInfo: {
    fontSize: 18,
    fontFamily: "Yaldevi",
    fontWeight: "700",
  },
  button: {
    width: Dimensions.get("window").width,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  but: {
    width: 250,
    height: 60,
    backgroundColor: "#FB6D6D",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 20,
  },
  butText: {
    color: "white",
    fontSize: 21,
    fontFamily: "Yaldevi",
    fontWeight: "700",
  },
  userPng: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
});
