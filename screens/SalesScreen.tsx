import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const salesData = [
  {
    id: "1",
    client: "DON PEPITO SAC",
    doc: "FT F001-0002670",
    date: "15/07/2025",
    type: "CONTADO",
    code: "VENMZ74909",
    amount: "S/ 42.50",
  },
  {
    id: "2",
    client: "DON PEPITO SAC",
    doc: "FT F001-0002670",
    date: "15/07/2025",
    type: "CONTADO",
    code: "VENMZ74909",
    amount: "S/ 42.50",
  },
  {
    id: "3",
    client: "DON PEPITO SAC",
    doc: "FT F001-0002670",
    date: "15/07/2025",
    type: "CONTADO",
    code: "VENMZ74909",
    amount: "S/ 42.50",
  },
];

const mockDetail = {
  client: "TIENDAS DON JUANITO SAC",
  voucher: "VENMZ74909",
  date: "15/07/2025",
  payment: "CONTADO",
  docType: "FACTURA",
  doc: "FT F001-0002670",
  items: [
    {
      code: "CL00012",
      desc: "CLORURO DE SODIO 0.9% 250ML",
      qty: "5 FCO",
      price: "S/ 3.90",
      total: "S/ 19.50",
    },
    {
      code: "CL00012",
      desc: "CLORURO DE SODIO 0.9% 250ML",
      qty: "5 FCO",
      price: "S/ 3.90",
      total: "S/ 19.50",
    },
    {
      code: "CL00012",
      desc: "CLORURO DE SODIO 0.9% 250ML",
      qty: "5 FCO",
      price: "S/ 3.90",
      total: "S/ 19.50",
    },
  ],
  subtotal: "S/ 36.02",
  igv: "S/ 6.48",
  icbper: "S/ 0.00",
  total: "S/ 45.50",
};

const SalesScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const handlePressSale = (sale: any) => {
    router.push({
      pathname: "/DetalleVenta",
      params: { sale: JSON.stringify(sale) },
    });
  };
  return (
    <View style={styles.root}>
      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>Transacciones</Text>
        {/* Icono de filtro */}
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.topBarFilter}>Filtrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.summaryRow}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>S. Total</Text>
          <Text style={styles.summaryValue}>S/ 4,166.40</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>IGV</Text>
          <Text style={styles.summaryValue}>S/ 2,050.59</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>ICBPER</Text>
          <Text style={styles.summaryValue}>S/ 0.00</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Total</Text>
          <Text style={styles.summaryValueTotal}>S/ 13,442.82</Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Buscar" />
      </View>
      <Text style={styles.foundText}>(Se encontró 25 registros)</Text>
      <Text style={styles.sectionTitle}>Mis Ventas</Text>
      <FlatList
        data={salesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePressSale(item)}>
            <View style={styles.saleCard}>
              <View style={styles.saleRow}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.saleClient}>{item.client}</Text>
                  <Text style={styles.saleDoc}>{item.doc}</Text>
                </View>
                <Text style={styles.saleAmount}>{item.amount}</Text>
              </View>
              <View style={styles.saleInfoRow}>
                <Text style={styles.saleDate}>📅 {item.date}</Text>
                <Text style={styles.saleType}> {item.type}</Text>
                <Text style={styles.saleCode}># {item.code}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        style={{ marginBottom: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingHorizontal: 0,
  },
  topBar: {
    backgroundColor: "#007aff",
    paddingTop: 40,
    paddingBottom: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topBarTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  summaryItem: {
    alignItems: "center",
    flex: 1,
  },
  summaryLabel: {
    color: "#888",
    fontSize: 13,
    marginBottom: 2,
  },
  summaryValue: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 15,
  },
  summaryValueTotal: {
    color: "#007aff",
    fontWeight: "bold",
    fontSize: 15,
  },
  searchContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  searchInput: {
    backgroundColor: "#f7f7f7",
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 40,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#eee",
  },
  foundText: {
    color: "#888",
    fontSize: 13,
    marginLeft: 16,
    marginTop: 8,
    marginBottom: 0,
  },
  sectionTitle: {
    color: "#007aff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  saleCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: "#eee",
  },
  saleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  saleClient: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#222",
  },
  saleDoc: {
    fontSize: 13,
    color: "#888",
  },
  saleAmount: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#1cb14b",
    marginLeft: 8,
  },
  saleInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 2,
    // border-top
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  saleDate: {
    fontSize: 13,
    color: "#888",
  },
  saleType: {
    fontSize: 13,
    color: "#1cb14b",
    fontWeight: "bold",
  },
  saleCode: {
    fontSize: 13,
    color: "#888",
  },

  topBarFilter: {
    padding: 12,
    backgroundColor: "#f7f7f7",
    borderBottomWidth: 0.5,
    borderColor: "#eee",
  },
});

export default SalesScreen;
