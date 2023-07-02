import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  invoiceDateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  invoiceDate: {
    fontSize: 12,
    fontWeight: 500
  },
  label: {
    width: 60
  }
});

const BillDate = ({ date }) => {
  return (
    <View style={styles.invoiceDateContainer}>
      <Text style={styles.label}>Date: </Text>
      <Text >{date}</Text>
    </View >
  )
}

export default BillDate