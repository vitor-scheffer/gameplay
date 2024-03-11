import { View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./styles";
import { GuildIcon } from "../GuildIcon";

export type GuildProps = {
  name: string;
};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export function Appointment({ data, ...rest }: Props) {
  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />
      </View>
      ;
    </RectButton>
  );
}
