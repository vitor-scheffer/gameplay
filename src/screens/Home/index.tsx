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

export function Home() {
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

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd />
        </View>
        <View>
          <CategorySelect
            categorySelected={category}
            setCategory={handleCategorySelect}
          />
          <View style={styles.content}>
            <ListHeader title="Partidas agendadas" subtitle="Total: 6" />
            <FlatList
              data={appointments}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <Appointment data={item} />}
              ItemSeparatorComponent={() => <ListDivider />}
              showsVerticalScrollIndicator={false}
              style={styles.matches}
            />
          </View>
        </View>
      </SafeAreaView>
    </Background>
  );
}
