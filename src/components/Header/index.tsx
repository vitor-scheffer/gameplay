import { ReactNode } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { useAppNavigation } from "../../utils/useAppNavigation";

type Props = {
  title: string;
  action?: ReactNode;
};

export function Header({ title, action }: Props) {
  const navigation = useAppNavigation();
  const { secondary100, secondary40, heading } = theme.colors;

  const didTapBtnBack = () => navigation.goBack();

  return (
    <LinearGradient colors={[secondary100, secondary40]}>
      <SafeAreaView>
        <View style={styles.container}>
          <BorderlessButton onPress={didTapBtnBack}>
            <Feather name="arrow-left" size={24} color={heading} />
          </BorderlessButton>

          <Text style={styles.title}>{title}</Text>

          {action ? <View>{action}</View> : <View style={{ width: 24 }} />}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
