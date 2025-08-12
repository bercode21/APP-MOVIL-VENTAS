import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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

export default function DetalleVentaScreen() {
  // Oculta el header nativo si se usa Expo Router v2+

  const params = useLocalSearchParams();
  const router = useRouter();
  const sale = params.sale ? JSON.parse(params.sale as string) : null;
  const detail = sale || mockDetail;

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Detalle de venta</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.headerClose}>✕</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.content}>
          <View style={styles.infoRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.client}>{detail.client}</Text>
              <Text style={styles.infoText}>
                N° Voucher :{" "}
                <Text style={styles.infoBold}>
                  {detail.code || detail.voucher}
                </Text>
              </Text>
              <Text style={styles.infoText}>
                Fecha : <Text style={styles.infoBold}>{detail.date}</Text>
              </Text>
              <Text style={styles.infoText}>
                Pago :{" "}
                <Text style={styles.infoBold}>
                  {detail.type || detail.payment}
                </Text>
              </Text>
            </View>
            <View style={styles.docBox}>
              <Text style={styles.docLabel}>DOCUMENTO</Text>
              <Text style={styles.docType}>{detail.docType || "FACTURA"}</Text>
              <Text style={styles.docNumber}>
                {detail.doc || "FT F001-0002670"}
              </Text>
            </View>
          </View>
          <Text style={styles.detailTitle}>Detalle</Text>
          {(detail.items || mockDetail.items).map((item: any, idx: number) => (
            <View key={idx} style={styles.detailItem}>
              <Text style={styles.detailDesc}>
                {item.code || detail.code} |{" "}
                {item.desc || "CLORURO DE SODIO 0.9% 250ML"}
              </Text>
              <View style={styles.detailRow}>
                <Text style={styles.detailQty}>
                  CANT: {item.qty || "5 FCO"}
                </Text>
                <Text style={styles.detailPrice}>
                  {item.price || detail.amount}
                </Text>
                <Text style={styles.detailTotal}>
                  {item.total || detail.amount}
                </Text>
              </View>
            </View>
          ))}
          <View style={styles.totalsBox}>
            <View style={styles.totalsRightBox}>
              <View style={[styles.totalsRowRedesigned, styles.bg]}>
                <Text style={styles.totalsLabel}>S. Total</Text>
                <Text style={styles.totalsValue}>
                  {" "}
                  {detail.subtotal || detail.amount}{" "}
                </Text>
              </View>
              <View style={styles.totalsRowRedesigned}>
                <Text style={styles.totalsLabel}>IGV</Text>
                <Text style={styles.totalsValue}>
                  {detail.igv || "S/ 0.00"}
                </Text>
              </View>
              <View style={[styles.totalsRowRedesigned, styles.bg]}>
                <Text style={styles.totalsLabel}>ICBPER</Text>
                <Text style={styles.totalsValue}>
                  {" "}
                  {detail.icbper || "S/ 0.00"}
                </Text>
              </View>
              <View style={styles.totalsRowTotalRedesigned}>
                <Text style={styles.totalsLabelBold}>Total</Text>
                <Text style={styles.totalsValueBold}>
                  {" "}
                  {detail.total || detail.amount}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#007aff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerClose: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 8,
  },
  content: {
    padding: 16,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  client: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 2,
  },
  infoText: {
    fontSize: 13,
    color: "#222",
    marginBottom: 2,
  },
  infoBold: {
    fontWeight: "bold",
    color: "#222",
  },
  docBox: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
    minWidth: 120,
    marginLeft: 12,
  },
  docLabel: {
    color: "#888",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 2,
  },
  docType: {
    color: "#007aff",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 2,
  },
  docNumber: {
    color: "#222",
    fontSize: 13,
    fontWeight: "bold",
  },
  detailTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#222",
    marginTop: 8,
    marginBottom: 6,
  },
  detailItem: {
    borderRadius: 8,
    padding: 8,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  detailDesc: {
    fontSize: 13,
    color: "#222",
    fontWeight: "bold",
    marginBottom: 2,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailQty: {
    fontSize: 12,
    color: "#888",
  },
  detailPrice: {
    fontSize: 12,
    color: "#888",
  },
  detailTotal: {
    fontSize: 12,
    color: "#888",
    fontWeight: "bold",
  },
  totalsBox: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 12,
    marginBottom: 12,
  },
  totalsRightBox: {
    minWidth: 180,
    overflow: "hidden",
    shadowRadius: 2,
  },
  totalsRowRedesigned: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderBottomWidth: 0.5,
    backgroundColor: "#fff",
  },
  bg: {
    backgroundColor: "#f9f9f9",
  },
  totalsRowTotalRedesigned: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: "#fff",
  },
  totalsLabel: {
    fontSize: 13,
    color: "#888",
    fontWeight: "400",
  },
  totalsValue: {
    fontSize: 13,
    color: "#888",
    textAlign: "right",
    fontWeight: "400",
  },
  totalsLabelBold: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#222",
  },
  totalsValueBold: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#222",
    textAlign: "right",
  },
});
