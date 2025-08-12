const ProfileScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Perfil</Text>
        <Text style={styles.headerMenu}>⋮</Text>
      </View>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarIcon}>👤</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Usuario</Text>
          <Text style={styles.value}>JEFE DE SISTEMAS</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>RUC</Text>
          <Text style={styles.value}>201234567890</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Empresa:</Text>
          <Text style={styles.value}>CORP. PERU HOUSE E.I.R.L.</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Teléfono</Text>
          <Text style={styles.value}>-</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Celular</Text>
          <Text style={styles.value}>-</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Correo</Text>
          <Text style={styles.value}>marco98.vega@gmail.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingHorizontal: 0,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
  },
  headerMenu: {
    fontSize: 28,
    color: "#222",
    fontWeight: "bold",
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  avatarIcon: {
    fontSize: 64,
    color: "#444",
  },
  infoContainer: {
    marginHorizontal: 32,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  label: {
    fontWeight: "bold",
    color: "#555",
    fontSize: 16,
  },
  value: {
    color: "#333",
    fontSize: 16,
  },
});

export default ProfileScreen;
import React from "react";
import { StyleSheet, Text, View } from "react-native";
