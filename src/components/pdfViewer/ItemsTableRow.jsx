import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { FormattedMessage } from 'react-intl';

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
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'center',
    paddingRight: 18,
    paddingLeft: 18,
  },
  itemName: {
    width: '58%',
    textAlign: 'left',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 18,
    paddingRight: 18,
  },
  qty: {
    width: '12%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  amount: {
    width: '20%',
    textAlign: 'right',
    paddingRight: 8,
  },
});


const ItemsTableRow = ({ cartItems }) => {
  const rows = cartItems.map(({ itemName, itemValue }, index) =>
    <View style={styles.row} key={index}>
      <Text style={styles.slNo}>{index + 1}</Text>
      <Text style={styles.itemName}>
        <FormattedMessage id={itemName} />
      </Text>
      <Text style={styles.qty}>{itemValue}</Text>
      <Text style={styles.amount}></Text>
    </View>
  )
  return (<Fragment>{rows}</Fragment>)
};

export default ItemsTableRow