import { StyleSheet, FlatList } from "react-native";

import { Text, View } from "../../components/Themed";
import tweets from "../../assets/tweets";
import Tweet from "../../components/Tweet";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
});
