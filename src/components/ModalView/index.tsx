import { ReactNode } from "react";
import { Modal, ModalProps, View, Pressable } from "react-native";
import { styles } from "./styles";
import { Background } from "../Background";

export type Props = ModalProps & {
  didSwipeDown: () => void;
  children: ReactNode;
};

export function ModalView({ children, didSwipeDown, ...rest }: Props) {
  return (
    <Modal transparent animationType="slide" statusBarTranslucent {...rest}>
      <Pressable style={styles.overlay} onPress={didSwipeDown} />
      <View style={styles.container}>
        <Background>
          <View style={styles.bar} />
          {children}
        </Background>
      </View>
    </Modal>
  );
}
