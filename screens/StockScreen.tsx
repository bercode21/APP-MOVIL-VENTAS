import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';

const stockData = [
  {
    id: '1',
    name: '3-GEL X 20 SACHETS',
    code: 'PRO0492',
    brand: 'DAWWON',
    cost: 'S/ 26.17',
    value: 'S/ 25.90',
    qty: '296 CAJ',
  },
  {
    id: '2',
    name: '3-GEL X 20 SACHETS',
    code: 'PRO0492',
    brand: 'DAWWON',
    cost: 'S/ 26.17',
    value: 'S/ 25.90',
    qty: '296 CAJ',
  },
  {
    id: '3',
    name: '3-GEL X 20 SACHETS',
    code: 'PRO0492',
    brand: 'DAWWON',
    cost: 'S/ 26.17',
    value: 'S/ 25.90',
    qty: '296 CAJ',
  },
];

const StockScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>Control Existencia</Text>
        {/* Icono de filtro */}
      </View>
      <View style={styles.summaryRow}>
        <View style={styles.summaryItem}><Text style={styles.summaryLabel}>Cantidad</Text><Text style={styles.summaryValue}>3488</Text></View>
        <View style={styles.summaryItem}><Text style={styles.summaryLabel}>Total Valorizado:</Text><Text style={styles.summaryValueTotal}>S/ 7,021,470.33</Text></View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Buscar" />
      </View>
      <Text style={styles.sectionTitle}>Mis productos</Text>
      <FlatList
        data={stockData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <View style={styles.productRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productCode}>{item.code}</Text>
              </View>
              <Text style={styles.productQty}>{item.qty}</Text>
            </View>
            <View style={styles.productInfoRow}>
              <Text style={styles.productBrand}>Marca: <Text style={styles.bold}>{item.brand}</Text></Text>
              <Text style={styles.productCost}>Costo: <Text style={styles.bold}>{item.cost}</Text></Text>
              <Text style={styles.productValue}>Valorizado: <Text style={styles.bold}>{item.value}</Text></Text>
            </View>
          </View>
        )}
        style={{ marginBottom: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 0,
  },
  topBar: {
    backgroundColor: '#007aff',
    paddingTop: 40,
    paddingBottom: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topBarTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  summaryItem: {
    alignItems: 'center',
    flex: 1,
  },
  summaryLabel: {
    color: '#888',
    fontSize: 13,
    marginBottom: 2,
  },
  summaryValue: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 15,
  },
  summaryValueTotal: {
    color: '#007aff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  searchContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  searchInput: {
    backgroundColor: '#f7f7f7',
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 40,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },
  sectionTitle: {
    color: '#007aff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
  },
  productCode: {
    fontSize: 13,
    color: '#888',
  },
  productQty: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
    marginLeft: 8,
  },
  productInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  productBrand: {
    fontSize: 13,
    color: '#888',
  },
  productCost: {
    fontSize: 13,
    color: '#888',
  },
  productValue: {
    fontSize: 13,
    color: '#888',
  },
  bold: {
    fontWeight: 'bold',
    color: '#222',
  },
});

export default StockScreen;
