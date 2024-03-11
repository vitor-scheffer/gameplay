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
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 24,
  },
  playersInfo: {
    flexDirection: "row",
    alignItems: "center",
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
    marginLeft: 7,
    marginRight: 24,
  },
});
