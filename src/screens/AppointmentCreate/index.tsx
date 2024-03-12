import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  Background,
  Button,
  CategorySelect,
  GuildProps,
  Header,
  ListHeader,
  ModalView,
  SmallInput,
  TextArea,
} from "../../components";
import { styles } from "./styles";
import { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { LinearGradient } from "expo-linear-gradient";
import { GuildIcon } from "../../components";
import { Guilds } from "../Guilds";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");
  const [openGuildsModal, setOpenGuildsModal] = useState<boolean>(false);
  const [guildSelected, setGuildSelected] = useState<GuildProps>(
    {} as GuildProps
  );

  const { heading, secondary40, secondary60, secondary100 } = theme.colors;

  const didTapBtnSelectGuilds = () => {
    setOpenGuildsModal(true);
  };

  const didTapBtnGuild = (guildSelected: GuildProps) => {
    setOpenGuildsModal(false);
    setGuildSelected(guildSelected);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Background>
        <Header title="Agendar partida" />
        <ScrollView>
          <Text
            style={[
              styles.label,
              { marginTop: 32, marginLeft: 24, marginBottom: 12 },
            ]}
          >
            Categoria
          </Text>
          <CategorySelect
            hasCheckBox
            setCategory={setCategory}
            categorySelected={category}
          />
          <View style={styles.form}>
            <RectButton onPress={didTapBtnSelectGuilds}>
              <View style={styles.select}>
                <LinearGradient
                  style={styles.image}
                  colors={[secondary60, secondary40]}
                >
                  {
                    guildSelected.icon 
                    ? (<GuildIcon />) 
                    : (<View style={styles.image} />)
                  }
                </LinearGradient>
                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {
                      guildSelected.name
                      ? guildSelected.name
                      : "Selecione um servidor"
                    }
                  </Text>
                </View>
                <Feather name="chevron-right" size={18} color={heading} />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={styles.label}>Dia e mês</Text>
                <View style={styles.column}>
                  <SmallInput keyboardType="numeric" maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput keyboardType="numeric" maxLength={2} />
                </View>
              </View>
              <View>
                <Text style={styles.label}>Horário</Text>
                <View style={styles.column}>
                  <SmallInput keyboardType="numeric" maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput keyboardType="numeric" maxLength={2} />
                </View>
              </View>
            </View>
            <View style={styles.description}>
              <ListHeader title="Descrição" subtitle="Max 100 caracteres" />
              <TextArea />
            </View>
          </View>
          <View style={styles.footer}>
            <Button title="Agendar" />
          </View>
        </ScrollView>
      </Background>
      <ModalView visible={openGuildsModal}>
        <Guilds didTapBtnGuild={(guild) => didTapBtnGuild(guild)} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
