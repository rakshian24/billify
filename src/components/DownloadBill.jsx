import React from 'react';
import { styled } from 'styled-components';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { FormattedMessage } from 'react-intl';

import { Button, Container } from '../common/StyledComponents';
import Bill from './pdfViewer/Bill';
import { DOWNLOADED_BILL_NAME } from '../constants';

const ButtonContainer = styled.div`
  margin: 1em;
  margin-top: 0;
  text-align: right;
`;

const DownloadBill = ({ cartItems, locale }) => {
  return (
    <Container>
      <PDFDownloadLink document={<Bill cartItems={cartItems} locale={locale} />} fileName={`${DOWNLOADED_BILL_NAME}.pdf`}>
        {({ loading }) => (loading ? 'Loading document...' : <ButtonContainer>
          <Button
            style={{ fontSize: '20px' }}
          >
            <FormattedMessage id='download_bill' />
          </Button>
        </ButtonContainer>)}
      </PDFDownloadLink>
    </Container>
  )
}

export default DownloadBill