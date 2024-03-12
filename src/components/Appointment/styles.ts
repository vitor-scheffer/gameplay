import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignSelf: "center",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    marginLeft: 24,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  playersInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  date: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 13,
    marginLeft: 8,
  },
  players: {
    fontFamily: theme.fonts.title500,
    fontSize: 13,
  },
});
