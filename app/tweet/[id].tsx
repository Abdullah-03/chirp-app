import tweets from "../../assets/tweets";
import Tweet from "../../components/Tweet";
import { useLocalSearchParams } from "expo-router";
import { Text } from "../../components/Themed";

export default function TweetView() {
  const { id } = useLocalSearchParams();

  const tweet = tweets.find((tweet) => tweet.id === id);

  if (!tweet) return <Text>Tweet does not exist</Text>;

  return <Tweet tweet={tweet} />;
}
