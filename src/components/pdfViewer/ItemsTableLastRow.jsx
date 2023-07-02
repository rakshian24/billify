import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomColor: '#bff0fd',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 30,
    fontWeight: 500
  },
  slNo: {
    width: '80%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'center',
    paddingRight: 18,
    paddingLeft: 18,
  },
  amount: {
    width: '20%',
    textAlign: 'right',
    paddingRight: 8,
  },
});

const ItemsTableLastRow = () => {
  return (
    <View style={styles.row}>
      <Text style={styles.slNo}>Total</Text>
      <Text style={styles.amount}></Text>
    </View>
  )
}

export default ItemsTableLastRow