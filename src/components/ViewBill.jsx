import React, { useState } from 'react';
import { styled } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { PDFViewer } from '@react-pdf/renderer';

import { Button, Container } from '../common/StyledComponents';
import Bill from './pdfViewer/Bill';

const ButtonContainer = styled.div`
  margin: 1em;
  text-align: right;
`;

const ViewBill = ({ cartItems }) => {
  const [showPdfView, setShowPdfView] = useState(false);
  return (
    <>
      {cartItems.length > 0 && (
        <ButtonContainer>
          <Button
            style={{ fontSize: '20px' }}
            onClick={() => setShowPdfView(true)}
          >
            <FormattedMessage id='view_bill' />
          </Button>
        </ButtonContainer>
      )}


      {showPdfView && cartItems.length > 0 && (
        <Container>
          {<PDFViewer width="100%" height="600" >
            <Bill cartItems={cartItems} />
          </PDFViewer>}
        </Container>
      )}</>
  )
}

export default ViewBill