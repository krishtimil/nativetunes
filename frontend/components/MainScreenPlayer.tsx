import { StyleSheet, Image, ImageBackground, Pressable } from "react-native";
import { Text, View } from "./Themed";
import { ImageSourcePropType } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";

export function MainScreenPlayer({
  albumArt,
  title,
  time,
}: {
  albumArt: ImageSourcePropType;
  title: string;
  time: string;
}) {
  return (
    <Pressable>
      <View style={styles.mainScreencontainer}>
          <ImageBackground
            source={albumArt}
            style={styles.backgroundImage}
            borderRadius={15}
          >
        <Link style={{
          width:'100%',
          height:'100%',
        }} href="/podcast/f76db82c-6ba6-43e9-9b5f-a983604f12b9/">
            <View style={styles.imagetxt}>
              <Text style={styles.imgtitle}>{title}</Text>
              <View style={styles.time}>
                <EvilIcons
                  name="clock"
                  size={15}
                  color="white"
                  style={styles.clock}
                />
                <Text style={styles.imgtime}>{time}</Text>
              </View>
            </View>
        </Link>
          </ImageBackground>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mainScreencontainer: {
    height: 200,
    margin: 10,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    borderRadius: 10,
  },
  imagetxt: {
    // borderColor:'red',
    // borderWidth:10,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 15,
    width: "90%",
    height: 60,
    marginStart: 20,
    marginBottom: 10,
    padding: 10,
  },
  imgtitle: {
    fontSize: 18,
    color: "#FFFFFF",
    fontStyle: "italic",
  },
  time: {
    backgroundColor: "rgba(0,0,0,0.0)",
    flexDirection: "row",
  },
  clock: {
    marginRight: 5,
    marginTop: 4,
  },
  imgtime: {
    color: "#F5F5F5",
    // font:10,
    opacity: 0.7,
  },
});
