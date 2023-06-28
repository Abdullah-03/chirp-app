import { StyleSheet, Image, Pressable } from "react-native";
import { MessageCircle, Repeat2, Heart } from "lucide-react-native";
import { Feather } from "@expo/vector-icons";

import { Text, View } from "./Themed";
import { TweetType } from "../types/index";
import { Link } from "expo-router";

type TweetProps = {
  tweet: TweetType;
};

function liked() {
  return null;
}

export default function Tweet({ tweet }: TweetProps) {
  return (
    <Link href={`/tweet/${tweet.id}`} asChild>
      <Pressable style={styles.container}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: tweet.user.image }}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.tweetContainer}>
          <View style={styles.userInfoContainer}>
            <Text style={{ fontWeight: "bold" }}>{tweet.user.name}</Text>
            <Text style={styles.username}>@{tweet.user.username}</Text>
            <Feather
              name="more-horizontal"
              size={15}
              color="white"
              style={{
                marginLeft: "auto",
                marginRight: 5,
                paddingTop: 2,
                paddingRight: 5,
              }}
            />
          </View>
          <Text style={styles.tweetText}>{tweet.content}</Text>
          {tweet.image && (
            <Image source={{ uri: tweet.image }} style={styles.tweetImage} />
          )}
          <View style={styles.tweetInteractionContainer}>
            <View style={styles.tweetInteraction}>
              <MessageCircle color="white" size={17} />
              <Text>{tweet.numberOfComments && tweet.numberOfComments}</Text>
            </View>
            <View style={styles.tweetInteraction}>
              <Feather
                name="message-circle"
                size={15}
                color={"white"}
                // onPress={liked}
              />
              <Text>{tweet.numberOfRetweets && tweet.numberOfRetweets}</Text>
            </View>
            <View style={styles.tweetInteraction}>
              <Feather name="heart" size={15} color={"white"} onPress={liked} />
              <Text>{tweet.numberOfLikes && tweet.numberOfLikes}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 10,
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
  tweetInteractionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingRight: 10,
  },
  tweetText: {
    marginVertical: 10,
  },
  tweetImage: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 20,
    marginBottom: 10,
  },
  tweetInteraction: {
    display: "flex",
    flexDirection: "row",
    width: "16%",
    justifyContent: "space-between",
  },
});
