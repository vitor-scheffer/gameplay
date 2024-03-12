import { ReactNode } from "react";
import { Modal, ModalProps, View } from "react-native";
import { styles } from "./styles";
import { Background } from "../Background";
import GestureRecognizer from "react-native-swipe-gestures";

export type Props = ModalProps & {
  didSwipeDown: () => void;
  children: ReactNode;
};

export function ModalView({ children, didSwipeDown, ...rest }: Props) {
  return (
    <GestureRecognizer onSwipeDown={didSwipeDown}>
      <Modal transparent animationType="slide" {...rest}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
}
