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
    height: 24,
    textAlign: 'center',
    fontStyle: 'bold',
    flexGrow: 1,
  },
  slNo: {
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  description: {
    width: '60%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  qty: {
    width: '10%',
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
    <Text style={styles.description}>Item Name</Text>
    <Text style={styles.qty}>Qty</Text>
    <Text style={styles.amount}>Amount</Text>
  </View>
);

export default ItemsTableHeader