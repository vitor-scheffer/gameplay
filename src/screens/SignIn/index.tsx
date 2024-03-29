import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import IllustrationImg from "../../assets/illustration.png";
import { Background, ButtonIcon } from "../../components";
import { useAppNavigation } from "../../utils/useAppNavigation";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const navigation = useAppNavigation();
  const { user } = useAuth();

  const didTapBtnSignIn = () => {
    navigation.navigate("Home");
  };

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {"\n"}e organize suas {"\n"}
            jogatinas
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {"\n"}
            favoritos com seus amigos
          </Text>
          <ButtonIcon title="Entrar com Discord" onPress={didTapBtnSignIn} />
        </View>
      </View>
    </Background>
  );
}
