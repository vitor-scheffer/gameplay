import { SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { Profile } from "../../components";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Profile />
      </View>
    </SafeAreaView>
  );
}
