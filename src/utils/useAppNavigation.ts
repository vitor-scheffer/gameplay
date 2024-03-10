import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../routes/auth.routes";

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<RootStackParamList>>();
};
