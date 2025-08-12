import React from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { Circle, Svg } from "react-native-svg";

const calendarData = [
  { day: "Lun", date: "09", value: "19" },
  { day: "Mar", date: "10", value: "26" },
  { day: "Mie", date: "11", value: "25" },
  { day: "Jue", date: "12", value: "50" },
  { day: "Vie", date: "13", value: "14" },
  { day: "Sab", date: "14", value: "28" },
  { day: "Dom", date: "15", value: "30", selected: true },
];

const clientsData = [
  { id: "1", name: "TIENDAS DON JUANITO SAC", ruc: "201234567890" },
  { id: "2", name: "TIENDAS DON JUANITO SAC", ruc: "201234567890" },
  { id: "3", name: "TIENDAS DON JUANITO SAC", ruc: "201234567890" },
];

const CIRCLE_SIZE = 80;
const STROKE_WIDTH = 8;
const TOTAL_PEDIDOS = 30;
const PEDIDOS_ATENDIDOS = 17;
const PERCENT = PEDIDOS_ATENDIDOS / TOTAL_PEDIDOS;

export default function HomeScreen() {
  const sections = [
    {
      key: "topBar",
      render: () => (
        <View style={styles.topBar}>
          <Text style={styles.topBarTitle}>Inicio</Text>
        </View>
      ),
    },
    {
      key: "calendar",
      render: () => (
        <View style={styles.calendarRow}>
          {calendarData.map((item, idx) => (
            <View
              key={idx}
              style={[
                styles.calendarItem,
                item.selected && styles.calendarItemSelected,
              ]}
            >
              <Text
                style={[
                  styles.calendarDay,
                  item.selected && styles.calendarDaySelected,
                ]}
              >
                {item.day}
              </Text>
              <Text
                style={[
                  styles.calendarDate,
                  item.selected && styles.calendarDateSelected,
                ]}
              >
                {item.date}
              </Text>
              <Text
                style={[
                  styles.calendarValue,
                  item.selected && styles.calendarValueSelected,
                ]}
              >
                {item.value}
              </Text>
            </View>
          ))}
        </View>
      ),
    },
    {
      key: "pedidos",
      render: () => (
        <View style={styles.sectionPedidos}>
          <Text style={styles.sectionTitle}>Pedidos</Text>
          <View style={styles.pedidosRow}>
            <View style={styles.pedidosChartContainer}>
              <View style={styles.pedidosChartCircle}>
                <Svg width={CIRCLE_SIZE} height={CIRCLE_SIZE}>
                  <Circle
                    cx={CIRCLE_SIZE / 2}
                    cy={CIRCLE_SIZE / 2}
                    r={(CIRCLE_SIZE - STROKE_WIDTH) / 2}
                    stroke="#eee"
                    strokeWidth={STROKE_WIDTH}
                    fill="none"
                  />
                  <Circle
                    cx={CIRCLE_SIZE / 2}
                    cy={CIRCLE_SIZE / 2}
                    r={(CIRCLE_SIZE - STROKE_WIDTH) / 2}
                    stroke="#1cb14b"
                    strokeWidth={STROKE_WIDTH}
                    fill="none"
                    strokeDasharray={`${
                      2 * Math.PI * ((CIRCLE_SIZE - STROKE_WIDTH) / 2)
                    }`}
                    strokeDashoffset={`$${
                      2 *
                      Math.PI *
                      ((CIRCLE_SIZE - STROKE_WIDTH) / 2) *
                      (1 - PERCENT)
                    }`}
                    strokeLinecap="round"
                    rotation="-90"
                    origin={`${CIRCLE_SIZE / 2},${CIRCLE_SIZE / 2}`}
                  />
                </Svg>
                <View style={StyleSheet.absoluteFill}>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={styles.pedidosChartValue}>
                      {PEDIDOS_ATENDIDOS}
                    </Text>
                    <Text style={styles.pedidosChartLabel}>
                      de {TOTAL_PEDIDOS} pedidos
                    </Text>
                  </View>
                </View>
              </View>
              <Text style={styles.pedidosChartSubLabel}>Pedidos atendidos</Text>
            </View>
            <View style={styles.pedidosSummary}>
              <Text style={styles.pedidosSummaryLabel}>Total en pedidos</Text>
              <Text style={styles.pedidosSummaryValue}>S/ 20,500.00</Text>
              <Text style={styles.pedidosSummaryLabel}>Total facturado</Text>
              <Text style={styles.pedidosSummaryValueGreen}>S/ 15,500.00</Text>
              <Text style={styles.pedidosSummaryLabel}>
                13 pedidos pendientes
              </Text>
              <Text style={styles.pedidosSummaryValueRed}>S/ 5,000.00</Text>
            </View>
          </View>
        </View>
      ),
    },
    {
      key: "documentos",
      render: () => (
        <View style={styles.sectionDocumentos}>
          <Text style={styles.sectionTitle}>Documentos generados</Text>
          <View style={styles.documentosRow}>
            <View style={styles.documentosItem}>
              <Text style={styles.documentosLabel}>Factura</Text>
              <Text style={styles.documentosValue}>10</Text>
            </View>
            <View style={styles.documentosItem}>
              <Text style={styles.documentosLabel}>Boleta</Text>
              <Text style={styles.documentosValue}>10</Text>
            </View>
            <View style={styles.documentosItem}>
              <Text style={styles.documentosLabel}>Ticket</Text>
              <Text style={styles.documentosValue}>10</Text>
            </View>
            <View style={styles.documentosItem}>
              <Text style={styles.documentosLabel}>N. Crédito</Text>
              <Text style={styles.documentosValue}>10</Text>
            </View>
          </View>
        </View>
      ),
    },
    {
      key: "clientes",
      render: () => (
        <View style={styles.sectionClientes}>
          <Text style={styles.sectionTitle}>Clientes atendidos</Text>
          <View style={styles.searchContainer}>
            <TextInput style={styles.searchInput} placeholder="Buscar" />
          </View>
          <Text style={styles.clientesSubLabel}>
            (Se atendieron 30 clientes)
          </Text>
          {clientsData.map((item) => (
            <View key={item.id} style={styles.clienteCard}>
              <View style={styles.clienteIcon}>
                <Text style={{ fontSize: 22 }}>👤</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.clienteName}>{item.name}</Text>
                <Text style={styles.clienteRuc}>{item.ruc}</Text>
              </View>
            </View>
          ))}
        </View>
      ),
    },
  ];

  return (
    <FlatList
      style={styles.root}
      data={sections}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => item.render()}
      showsVerticalScrollIndicator={false}
    />
  );
}

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
  calendarRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: "#eee",
    marginBottom: 8,
  },
  calendarItem: {
    alignItems: "center",
    flex: 1,
    paddingVertical: 4,
    borderRadius: 8,
    marginHorizontal: 2,
  },
  calendarItemSelected: {
    backgroundColor: "#007aff",
  },
  calendarDay: {
    color: "#888",
    fontSize: 13,
  },
  calendarDaySelected: {
    color: "#fff",
    fontWeight: "bold",
  },
  calendarDate: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 15,
  },
  calendarDateSelected: {
    color: "#fff",
  },
  calendarValue: {
    color: "#888",
    fontSize: 13,
  },
  calendarValueSelected: {
    color: "#fff",
  },
  sectionPedidos: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    margin: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    color: "#007aff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  pedidosRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pedidosChartContainer: {
    alignItems: "center",
    marginRight: 16,
  },
  pedidosChartCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 8,
    borderColor: "#1cb14b",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  pedidosChartValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
  },
  pedidosChartLabel: {
    fontSize: 13,
    color: "#888",
  },
  pedidosChartSubLabel: {
    fontSize: 13,
    color: "#888",
    textAlign: "center",
    marginBottom: 4,
  },
  pedidosSummary: {
    flex: 1,
    justifyContent: "center",
  },
  pedidosSummaryLabel: {
    fontSize: 13,
    color: "#888",
    marginBottom: 2,
  },
  pedidosSummaryValue: {
    fontSize: 15,
    color: "#222",
    fontWeight: "bold",
    marginBottom: 2,
  },
  pedidosSummaryValueGreen: {
    fontSize: 15,
    color: "#1cb14b",
    fontWeight: "bold",
    marginBottom: 2,
  },
  pedidosSummaryValueRed: {
    fontSize: 15,
    color: "#ff3b30",
    fontWeight: "bold",
    marginBottom: 2,
  },
  sectionDocumentos: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    margin: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  documentosRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  documentosItem: {
    alignItems: "center",
    flex: 1,
  },
  documentosLabel: {
    color: "#888",
    fontSize: 13,
    marginBottom: 2,
  },
  documentosValue: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 15,
  },
  sectionClientes: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    margin: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchContainer: {
    backgroundColor: "#f7f7f7",
    borderRadius: 20,
    marginBottom: 8,
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 40,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#eee",
  },
  clientesSubLabel: {
    color: "#888",
    fontSize: 13,
    marginBottom: 8,
  },
  clienteCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  clienteIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  clienteName: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#222",
  },
  clienteRuc: {
    fontSize: 13,
    color: "#888",
  },
});
