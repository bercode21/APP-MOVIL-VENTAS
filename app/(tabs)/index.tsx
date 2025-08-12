import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Circle, Svg } from "react-native-svg";
// Shimmer animation for card backgrounds
function ShimmerOverlay() {
  const shimmerAnim = useRef(new Animated.Value(-1)).current;
  const width = Dimensions.get("window").width;

  useEffect(() => {
    Animated.loop(
      Animated.timing(shimmerAnim, {
        toValue: 1,
        duration: 1800,
        useNativeDriver: true,
      })
    ).start();
  }, [shimmerAnim]);

  const translateX = shimmerAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: [-width, width],
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={{
        ...StyleSheet.absoluteFillObject,
        opacity: 0.18,
        transform: [{ translateX }],
      }}
    >
      <LinearGradient
        colors={["#fff", "#00c3ff13", "#fff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1 }}
      />
    </Animated.View>
  );
}

const calendarData = [
  { day: "Lun", date: "09", value: "19" },
  { day: "Mar", date: "10", value: "26" },
  { day: "Mie", date: "11", value: "25" },
  { day: "Jue", date: "12", value: "50" },
  { day: "Vie", date: "13", value: "14", selected: true },
  { day: "Sab", date: "14", value: "28" },
  { day: "Dom", date: "15", value: "30" },
];

const clientsData = [
  { id: "1", name: "SUPERMERCADOS PERUANOS S.A.", ruc: "20481234561" },
  { id: "2", name: "FERRETERÍA EL TRIUNFO E.I.R.L.", ruc: "20654321870" },
  { id: "3", name: "INDUSTRIAS ALIMENTICIAS LIMA S.A.C.", ruc: "20578932145" },
  { id: "4", name: "CONSTRUCTORA ANDINA DEL SUR S.A.", ruc: "20345678901" },
  {
    id: "5",
    name: "DISTRIBUIDORA RIVERA Y HERMANOS S.R.L.",
    ruc: "20678901234",
  },
  { id: "6", name: "SERVICIOS MÉDICOS INTEGRA S.A.C.", ruc: "20765432109" },
];

const CIRCLE_SIZE = 120;
const STROKE_WIDTH = 10;
const TOTAL_PEDIDOS = 30;
const PEDIDOS_ATENDIDOS = 20;
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
          <ShimmerOverlay />
          <Text style={styles.sectionTitle}>Pedidos</Text>
          <View style={styles.pedidosRow}>
            <View style={styles.pedidosChartContainer}>
              <Svg width={CIRCLE_SIZE} height={CIRCLE_SIZE}>
                <Circle
                  cx={CIRCLE_SIZE / 2}
                  cy={CIRCLE_SIZE / 2}
                  r={(CIRCLE_SIZE - STROKE_WIDTH) / 2}
                  stroke="#aaa"
                  strokeWidth={STROKE_WIDTH}
                  fill="none"
                />
                <Circle
                  cx={CIRCLE_SIZE / 2}
                  cy={CIRCLE_SIZE / 2}
                  r={(CIRCLE_SIZE - STROKE_WIDTH) / 2}
                  stroke="#19b600"
                  strokeWidth={STROKE_WIDTH}
                  fill="none"
                  strokeDasharray={`${
                    2 * Math.PI * ((CIRCLE_SIZE - STROKE_WIDTH) / 2)
                  }`}
                  strokeDashoffset={`${
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
                    display: "flex",
                    flexDirection: "column",
                    height: "80%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      color: "#222",
                    }}
                  >
                    {PEDIDOS_ATENDIDOS}
                  </Text>
                  <Text style={{ fontSize: 18, color: "#888" }}>
                    <Text
                      style={{
                        fontWeight: "bold",

                        color: "#6E6E6E",
                        fontSize: 12,
                      }}
                    >
                      de{" "}
                      <Text
                        style={{
                          fontWeight: "bold",

                          color: "#6E6E6E",
                          fontSize: 18,
                        }}
                      >
                        {TOTAL_PEDIDOS}
                      </Text>{" "}
                      Pedidos
                    </Text>
                  </Text>
                </View>
              </View>
              <Text style={styles.pedidosChartSubLabel}>Pedidos atendidos</Text>
            </View>
            <View style={styles.pedidosSummary}>
              <Text style={styles.pedidosSummaryLabelGray}>
                Total en pedidos
              </Text>
              <Text style={styles.pedidosSummaryValueGray}>S/ 20,500.00</Text>
              <View style={styles.pedidosSummaryDivider} />
              <Text style={styles.pedidosSummaryLabelGray}>
                Total facturado
              </Text>
              <Text style={styles.pedidosSummaryValueGreen}>S/ 15,500.00</Text>
              <View style={styles.pedidosSummaryDivider} />
              <Text style={styles.pedidosSummaryLabelBoldGray}>
                <Text style={{ fontWeight: "bold", color: "#888" }}>13</Text>{" "}
                pedidos pendientes
              </Text>
              <Text style={styles.pedidosSummaryValueOrange}>S/ 5,000.00</Text>
              <View style={styles.pedidosSummaryDivider} />
            </View>
          </View>
        </View>
      ),
    },
    {
      key: "documentos",
      render: () => (
        <View style={styles.sectionDocumentos}>
          <ShimmerOverlay />
          <Text style={styles.sectionTitle}>Documentos generados</Text>
          <View style={styles.documentosRow}>
            <View style={styles.documentosItem}>
              <Text style={styles.documentosLabelGray}>Factura</Text>
              <Text style={styles.documentosValueBlack}>140</Text>
            </View>
            <View style={styles.documentosDivider} />
            <View style={styles.documentosItem}>
              <Text style={styles.documentosLabelGray}>Boleta</Text>
              <Text style={styles.documentosValueBlack}>108</Text>
            </View>
            <View style={styles.documentosDivider} />
            <View style={styles.documentosItem}>
              <Text style={styles.documentosLabelGray}>Ticket</Text>
              <Text style={styles.documentosValueBlack}>190</Text>
            </View>
            <View style={styles.documentosDivider} />
            <View style={styles.documentosItem}>
              <Text style={styles.documentosLabelGray}>N. Crédito</Text>
              <Text style={styles.documentosValueBlack}>510</Text>
            </View>
          </View>
        </View>
      ),
    },
    {
      key: "clientes",
      render: () => (
        <View style={styles.sectionClientes}>
          <ShimmerOverlay />
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
    fontSize: 14,
    color: "#888",
    marginBottom: 2,
  },
  pedidosSummaryLabelGray: {
    fontSize: 14,
    color: "#B0B0B0",
  },
  pedidosSummaryLabelBoldGray: {
    fontSize: 14,
    color: "#B0B0B0",
    fontWeight: "normal",
  },
  pedidosSummaryValue: {
    fontSize: 16,
    color: "#222",
    fontWeight: "bold",
    marginBottom: 2,
  },
  pedidosSummaryValueGray: {
    fontSize: 16,
    color: "#888",
    fontWeight: "bold",
    textAlign: "right",
    marginBottom: 2,
  },
  pedidosSummaryValueGreen: {
    fontSize: 16,
    color: "#19b600",
    fontWeight: "bold",
    textAlign: "right",
    marginBottom: 2,
  },
  pedidosSummaryValueOrange: {
    fontSize: 16,
    color: "#F54400",
    fontWeight: "bold",
    textAlign: "right",
  },
  pedidosSummaryValueRed: {
    fontSize: 14,
    color: "#ff3b30",
    fontWeight: "bold",
    marginBottom: 2,
  },
  pedidosSummaryDivider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 4,
    width: "100%",
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
  documentosLabelGray: {
    color: "#888",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 2,
  },
  documentosValueBlack: {
    color: "#111",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 2,
  },
  documentosDivider: {
    width: 1,
    backgroundColor: "#bbb",
    marginHorizontal: 8,
    alignSelf: "stretch",
    opacity: 0.5,
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
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    padding: 6,
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
