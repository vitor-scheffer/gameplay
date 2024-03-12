import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { Guild, GuildProps } from "../../components";
import { ListDivider } from "../../components/ListDivider";

type Props = {
  didTapBtnGuild: (guild: GuildProps) => void;
};

export function Guilds({ didTapBtnGuild }: Props) {
  const guilds = [
    {
      id: 1,
      name: "Lendários",
      icon: "cs",
      owner: true,
    },
    {
      id: 2,
      name: "Lendários",
      icon: null,
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => didTapBtnGuild(item)} />
        )}
        ItemSeparatorComponent={ListDivider}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />
    </View>
  );
}
