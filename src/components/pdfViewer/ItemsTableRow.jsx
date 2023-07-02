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
    height: 24,
    fontStyle: 'bold',
  },
  slNo: {
    width: '11.5%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'center',
    paddingRight: 18,
    paddingLeft: 18,
  },
  description: {
    width: '67%',
    textAlign: 'left',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 18,
    paddingRight: 18,
  },
  qty: {
    width: '10.5%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  amount: {
    width: '100%',
    textAlign: 'right',
    paddingRight: 8,
  },
});


const ItemsTableRow = ({ cartItems }) => {
  const rows = cartItems.map(({ itemName, itemValue }, index) =>
    <View style={styles.row} key={index}>
      <Text style={styles.slNo}>{index + 1}</Text>
      <Text style={styles.description}>
        <FormattedMessage id={itemName} />
      </Text>
      <Text style={styles.qty}>{itemValue}</Text>
      <Text style={styles.rate}>{' '}</Text>
    </View>
  )
  return (<Fragment>{rows}</Fragment>)
};

export default ItemsTableRow