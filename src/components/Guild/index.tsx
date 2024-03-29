import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";
import { GuildIcon } from "../GuildIcon";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

export type GuildProps = {
  id: number;
  name: string;
  icon: string | null;
  owner: boolean;
};

type Props = TouchableOpacityProps & {
  data: GuildProps;
};

export function Guild({ data, ...rest }: Props) {
  const { heading } = theme.colors;
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      <GuildIcon />

      <View style={styles.content}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.type}>
          {data.owner ? "Administrador" : "Convidado"}
        </Text>
      </View>

      <Feather name="chevron-right" size={24} color={heading} />
    </TouchableOpacity>
  );
}
