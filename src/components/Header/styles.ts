import { StyleSheet, Platform } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: Platform.OS === "android" ? 40 : 14,
    paddingBottom: 16,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 20,
  },
});
