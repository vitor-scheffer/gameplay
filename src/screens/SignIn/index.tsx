import { View, Image, Text } from "react-native";

import { styles } from "./styles";
import IllustrationImg from "../../assets/illustration.png";

export function SignIn() {
  return (
    <View style={styles.container}>
      <Image source={IllustrationImg} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>
            Conecte-se {`\n`}
            e organize suas {`\n`}
            jogatinas
        </Text>
        <Text style={styles.subtitle}>
        Crie grupos para jogar seus games {`\n`}
        favoritos com seus amigos
        </Text>
      </View>
    </View>
  );
}
