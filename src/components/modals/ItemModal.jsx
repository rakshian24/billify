import React, { useState } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Form, Modal } from 'rsuite';
import { useDispatch } from 'react-redux';

import { Button, Input } from '../../common/StyledComponents';
import { BUTTON_TYPE, ITEM_NAME_MAX_LENGTH, MODAL_ACTION_TYPES, colors } from '../../constants';
import { updateCategory, toggleModal } from '../../reducers/actionCreators';

const { ADD } = MODAL_ACTION_TYPES;

const ItemModal = ({ modalDetails, intl: { formatMessage } }) => {
  const { action: actionType = ADD, showModal = false, props: { categoryId = '' } } = modalDetails;
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState('');
  const [errorText, setErrorText] = useState('');

  const handleCloseModal = () => {
    setItemName('');
    setErrorText('');
    dispatch(toggleModal({ showModal: false }));
  }

  const handleAdd = () => {
    if (!itemName) {
      return setErrorText(formatMessage({ id: 'this_is_required' }));
    }
    if (itemName.length > ITEM_NAME_MAX_LENGTH) {
      return
    }
    dispatch(updateCategory({ categoryId: parseInt(categoryId), itemName }));
    setItemName('');
    dispatch(toggleModal({ showModal: false }));
  };

  const handleOnChange = (e) => {
    if (e.target.value.length > ITEM_NAME_MAX_LENGTH) {
      setErrorText(formatMessage({ id: 'item_name_too_long' }))
    } else {
      setErrorText('')
    }
    setItemName(e.target.value)
  }

  return (
    <>
      <Modal open={showModal} onClose={handleCloseModal} backdrop="static" style={{ marginTop: '100px' }}>
        <Modal.Header>
          <Modal.Title>
            <FormattedMessage id={actionType === ADD ? 'create_item' : 'edit_item'} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="itemName">
              <Form.ControlLabel>
                <FormattedMessage id='item_name' />
              </Form.ControlLabel>
              <Input
                name="itemName"
                value={itemName}
                onChange={handleOnChange}
                style={{ marginRight: 0 }}
                onKeyUp={(e) => e.keyCode === 13 ? handleAdd() : null}
                fullwidth
              />
              {errorText && <Form.HelpText style={{ color: colors.darkOrange }}>
                {errorText}
              </Form.HelpText>}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleAdd} style={{ marginRight: '22px' }}>
            <FormattedMessage id='create' />
          </Button>
          <Button onClick={handleCloseModal} buttontype={BUTTON_TYPE.REMOVE}>
            <FormattedMessage id='cancel' />
          </Button>
        </Modal.Footer>
      </Modal >
    </>
  )
}

export default injectIntl(ItemModal);