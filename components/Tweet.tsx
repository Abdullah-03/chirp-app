import { StyleSheet, Image } from "react-native";
import { MessageCircle, Repeat2, Heart } from "lucide-react-native";

import { Text, View } from "./Themed";
import { TweetType } from "../types/index";

type TweetProps = {
  tweet: TweetType;
};

export default function Tweet({ tweet }: TweetProps) {
  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image source={{ uri: tweet.user.image }} style={styles.profileImage} />
      </View>

      <View style={styles.tweetContainer}>
        <View style={styles.userInfoContainer}>
          <Text>{tweet.user.name}</Text>
          <Text style={styles.username}>@{tweet.user.username}</Text>
        </View>
        <Text style={styles.tweetText}>{tweet.content}</Text>
        {tweet.image ? (
          <Image source={{ uri: tweet.image }} style={styles.tweetImage} />
        ) : null}
        <View style={styles.tweetInteractions}>
          <MessageCircle color="white" size={20} />
          <Repeat2 color="white" size={20} />
          <Heart color="white" size={20} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  profileImageContainer: {
    paddingHorizontal: 10,
  },
  tweetContainer: {
    flexGrow: 1,
    maxWidth: "80%",
  },
  userInfoContainer: {
    display: "flex",
    flexDirection: "row",
  },
  username: {
    color: "grey",
    marginLeft: 5,
  },
  tweetInteractions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tweetText: {
    marginVertical: 10,
  },
  tweetImage: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 20,
  },
});
