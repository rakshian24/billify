import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#bff0fd',
    backgroundColor: '#bff0fd',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 30,
    textAlign: 'center',
    fontStyle: 'bold',
    flexGrow: 1,
    fontSize: '12.5px',
    fontWeight: 600
  },
  slNo: {
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  itemName: {
    width: '58%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  qty: {
    width: '12%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  amount: {
    width: '20%'
  },
});

const ItemsTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.slNo}>Sl no</Text>
    <Text style={styles.itemName}>Item Name</Text>
    <Text style={styles.qty}>Qty</Text>
    <Text style={styles.amount}>Amount</Text>
  </View>
);

export default ItemsTableHeader