import { Image } from "react-native";
import { theme } from "../../global/styles/theme";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

type Props = {
  urlImage: string;
};

export function Avatar({ urlImage }: Props) {
  const { secondary80, primary } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, primary]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
}
