import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';

import ItemsTableHeader from './ItemsTableHeader';
import ItemsTableRow from './ItemsTableRow';
import ItemsTableLastRow from './ItemsTableLastRow';

const ItemsTable = ({ cartItems }) => {
  const styles = StyleSheet.create({
    tableContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 24,
      borderWidth: 1,
      borderColor: '#bff0fd',
    },
  });

  return (
    <View style={styles.tableContainer}>
      <ItemsTableHeader />
      <ItemsTableRow cartItems={cartItems} />
      <ItemsTableLastRow />
    </View>
  )
}

export default ItemsTable