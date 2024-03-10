import { View, Image, Text } from "react-native";

import { styles } from "./styles";
import IllustrationImg from "../../assets/illustration.png";
import { Background, ButtonIcon } from "../../components";

export function SignIn() {
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
            Conecte-se {'\n'}e organize suas {'\n'}
            jogatinas
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>
          <ButtonIcon title="Entrar com Discord" activeOpacity={0.8} />
        </View>
      </View>
    </Background>
  );
}
