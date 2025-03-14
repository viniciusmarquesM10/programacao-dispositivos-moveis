import { StyleSheet, Text, View } from "react-native";

function ListScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Listagem de Itens</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Título do Item 1</Text>
        <Text style={styles.itemSubtitle}>Descrição breve do item 1.</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Título do Item 2</Text>
        <Text style={styles.itemSubtitle}>Descrição breve do item 2.</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Título do Item 3</Text>
        <Text style={styles.itemSubtitle}>Descrição breve do item 3.</Text>
      </View>
      <View>
        <Text style={styles.itemTitle}>Título do Item 4</Text>
        <Text style={styles.itemSubtitle}>Descrição breve do item 4.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBFE",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  appTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "400",
    lineHeight: 28,
    alignSelf: "center",
  },
  itemTitle: {
    color: "#1D1B20",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
  itemSubtitle: {
    color: "#49454F",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
  },
});

export default ListScreen;
