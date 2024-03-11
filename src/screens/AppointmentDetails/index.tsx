import {
  FlatList,
  ImageBackground,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import {
  Background,
  ButtonIcon,
  Header,
  ListHeader,
  Member,
} from "../../components";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import BannerImg from "../../assets/banner.png";
import { styles } from "./styles";
import { ListDivider } from "../../components/ListDivider";

export function AppointmentDetails() {
  const members = [
    {
      id: 1,
      username: "Vitor",
      avatar_url: "https://github.com/vitor-scheffer.png",
      status: "online",
    },
    {
      id: 2,
      username: "Vitor",
      avatar_url: "https://github.com/vitor-scheffer.png",
      status: "online",
    },
    {
      id: 3,
      username: "Vitor",
      avatar_url: "https://github.com/vitor-scheffer.png",
      status: "online",
    },
    {
      id: 4,
      username: "Vitor",
      avatar_url: "https://github.com/vitor-scheffer.png",
      status: "online",
    },
    {
      id: 5,
      username: "Vitor",
      avatar_url: "https://github.com/vitor-scheffer.png",
      status: "online",
    },
  ];
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" color={theme.colors.primary} size={18} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total: 3" />
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={ListDivider}
        style={styles.members}
      />
      <SafeAreaView>
        <View style={styles.footer}>
          <ButtonIcon title="Entrar na Partida" />
        </View>
      </SafeAreaView>
    </Background>
  );
}
