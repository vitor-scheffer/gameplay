import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    fontSize: 13,
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  bulletStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});
