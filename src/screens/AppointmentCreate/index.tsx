import { SafeAreaView, View } from "react-native";
import { Background, ButtonIcon, Header } from "../../components";
import { styles } from "./styles";

export function AppointmentCreate() {
  return (
    <Background>
      <Header title="Agendar partida" />
      <SafeAreaView>
        <View style={styles.footer}>
          <ButtonIcon title="Agendar" />
        </View>
      </SafeAreaView>
    </Background>
  );
}
