import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  select: {
    flexDirection: "row",
    width: "100%",
    height: 68,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    paddingRight: 24,
  },
  selectBody: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 64,
    height: 68,
    borderRadius: 8,
    overflow: "hidden",
  },
  label: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
  },
  field: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  divider: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    fontSize: 18,
    paddingRight: 4,
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  description: {
    marginTop: 28,
    gap: 12,
  },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 40,
    marginBottom: 50
  },
});
