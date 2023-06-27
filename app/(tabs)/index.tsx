import { StyleSheet, Image } from "react-native";
import {
  MessageCircle,
  Repeat2,
  Heart,
  Bookmark,
  Share,
} from "lucide-react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import tweets from "../../assets/tweets";
let tweet = tweets[0];

export default function TabOneScreen() {
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
        <Image source={{ uri: tweet.image }} style={styles.tweetImage} />
        <View style={styles.tweetInteractions}>
          <MessageCircle color="white" size={20} />
          <Repeat2 color="white" size={20} />
          <Heart color="white" size={20} />
          <Bookmark color="white" size={20} />
          <Share color="white" size={20} />
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
    borderColor: "white",
    borderWidth: 0.6,
  },
  profileImage: {
    width: 50,
    height: 50,
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
  },
  tweetText: {
    marginVertical: 10,
  },
  tweetImage: {
    width: "100%",
    height: "60%",
  },
});
