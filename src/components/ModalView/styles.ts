import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  overlay: {
    height: 200,
    backgroundColor: theme.colors.overlay,
    marginBottom: -20,
  },
  bar: {
    width: 39,
    height: 5,
    borderRadius: 2,
    backgroundColor: theme.colors.secondary30,
    alignSelf: "center",
    marginTop: 13,
    marginBottom: 24,
  },
});
