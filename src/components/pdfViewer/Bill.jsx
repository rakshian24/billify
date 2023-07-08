import React from 'react';
import { Page, Document, Image, StyleSheet, Font } from '@react-pdf/renderer';
import "../../index.css";

import logo from "../../assets/logo/billify-logo.png"
import DocumentTitle from './DocumentTitle';
import BillDate from './BillDate';
import { getDateInDDMMMYYYYFormat } from '../../utils';
import ItemsTable from './ItemsTable';
import I18nProvider from "../../i18n/Provider";
import KannadaFontRegular from "../../assets/fonts/BalooTamma2-Regular.ttf";
import KannadaFontMedium from "../../assets/fonts/BalooTamma2-Medium.ttf";
import KannadaSemiBold from "../../assets/fonts/BalooTamma2-SemiBold.ttf";

Font.register({
  family: 'Baloo Tamma 2',
  fonts: [{
    src: KannadaFontRegular,
    fontWeight: 400
  }, {
    src: KannadaFontMedium,
    fontWeight: 500
  }, {
    src: KannadaSemiBold,
    fontWeight: 600
  }],
  format: 'truetype',
})

const styles = StyleSheet.create({
  pageTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  page: {
    fontFamily: 'Baloo Tamma 2',
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

const Bill = ({ cartItems, locale }) => {
  return (
    <I18nProvider locale={locale}>
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