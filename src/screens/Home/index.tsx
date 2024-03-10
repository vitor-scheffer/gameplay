import { SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { Background, Profile } from "../../components";

export function Home() {
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Profile />
        </View>
      </SafeAreaView>
    </Background>
  );
}
