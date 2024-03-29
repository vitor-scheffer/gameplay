import { SafeAreaView, View, FlatList, Text } from "react-native";
import { styles } from "./styles";
import {
  Background,
  Profile,
  ButtonAdd,
  CategorySelect,
  ListHeader,
  Appointment,
} from "../../components";
import { useState } from "react";
import { ListDivider } from "../../components/ListDivider";
import { useAppNavigation } from "../../utils/useAppNavigation";

export function Home() {
  const navigation = useAppNavigation();
  const [category, setCategory] = useState("");
  const appointments = [
    {
      id: 1,
      guild: {
        id: 1,
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: 2,
      guild: {
        id: 1,
        name: "Lendários",
        icon: null,
        owner: false,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: 3,
      guild: {
        id: 1,
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: 4,
      guild: {
        id: 1,
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: 5,
      guild: {
        id: 1,
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  };

  const didTapAppointmentDetails = () => {
    navigation.navigate("AppointmentDetails");
  };

  const didTapBtnCreate = () => {
    navigation.navigate("AppointmentCreate");
  };

  return (
    <Background>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Profile />
            <ButtonAdd onPress={didTapBtnCreate} />
          </View>
          <CategorySelect
            categorySelected={category}
            setCategory={handleCategorySelect}
          />
          <View style={styles.listHeader}>
            <ListHeader title="Partidas agendadas" subtitle="Total: 6" />
          </View>
          <FlatList
            data={appointments}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Appointment data={item} onPress={didTapAppointmentDetails} />
            )}
            ItemSeparatorComponent={ListDivider}
            showsVerticalScrollIndicator={false}
            style={styles.matches}
            contentContainerStyle={{ paddingBottom: 40 }}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
}
