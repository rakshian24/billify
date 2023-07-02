import React from 'react';
import { Page, Document, Image, StyleSheet } from '@react-pdf/renderer';

import logo from "../../assets/logo/billify-logo.png"
import DocumentTitle from './DocumentTitle';
import BillDate from './BillDate';
import { getDateInDDMMMYYYYFormat } from '../../utils';
import ItemsTable from './ItemsTable';
import I18nProvider from "../../i18n/Provider";

const styles = StyleSheet.create({
  pageTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

const Bill = ({ cartItems }) => {
  return (
    <I18nProvider locale={'en-in'}>
      <Document>
        <Page size="A4" style={styles.page}>
          <div style={styles.pageTitleContainer}>
            <Image style={styles.logo} src={logo} />
            <DocumentTitle title='Ration Bill' />
          </div>
          <BillDate date={getDateInDDMMMYYYYFormat()} />
          <ItemsTable cartItems={cartItems} />
        </Page>
      </Document>
    </I18nProvider>
  )
}

export default Bill