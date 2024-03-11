import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 234,
    marginBottom: 24
  },
  bannerContent: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 24,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 28,
  },
  subtitle: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    fontSize: 13,
  },
  members: {
    marginLeft: 24,
    marginTop: 24,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 6,
    paddingTop: 20
  }
});
