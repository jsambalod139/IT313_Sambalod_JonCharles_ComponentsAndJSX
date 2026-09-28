import { View, Text, StyleSheet } from "react-native";

export default function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>Course: {course}</Text>
      <Text style={styles.info}>Units Enrolled: {units}</Text>

      {isFullLoad && <Text style={styles.fullLoad}>Full Load</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  info: {
    fontSize: 16,
    marginBottom: 5,
  },

  fullLoad: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold",
  },
});