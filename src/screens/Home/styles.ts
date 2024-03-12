import { StyleSheet } from "react-native";
import { Platform } from "react-native";

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    overflow: "hidden",
  },
  listHeader: {
    paddingHorizontal: 24,
    marginTop: 40,
    marginBottom: 24,
  },
  header: {
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Platform.OS === "android" ? 50 : 26,
    marginBottom: 40,
  },
  matches: {
    paddingHorizontal: 24,
  },
});
