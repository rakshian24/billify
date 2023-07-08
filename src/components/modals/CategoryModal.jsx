import React, { useState } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Form, Modal } from 'rsuite';
import { useDispatch } from 'react-redux';

import { Button, Input } from '../../common/StyledComponents';
import { BUTTON_TYPE, CATEGORY_NAME_MAX_LENGTH, MODAL_ACTION_TYPES, colors } from '../../constants';
import { addCategory, toggleModal } from '../../reducers/actionCreators';

const { ADD } = MODAL_ACTION_TYPES;

const CategoryModal = ({ modalDetails, intl: { formatMessage } }) => {
  const { action: actionType = ADD, showModal = false } = modalDetails;
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState('');
  const [errorText, setErrorText] = useState('');

  const handleCloseModal = () => {
    setCategoryName('');
    setErrorText('');
    dispatch(toggleModal({ showModal: false }));
  }

  const handleAdd = () => {
    if (!categoryName) {
      return setErrorText(formatMessage({ id: 'this_is_required' }));
    }
    if (categoryName.length > CATEGORY_NAME_MAX_LENGTH) {
      return
    }
    dispatch(addCategory({ categoryName }));
    setCategoryName('');
    dispatch(toggleModal({ showModal: false }));
  };

  const handleOnChange = (e) => {
    if (e.target.value.length > CATEGORY_NAME_MAX_LENGTH) {
      setErrorText(formatMessage({ id: 'category_name_too_long' }))
    } else {
      setErrorText('')
    }
    setCategoryName(e.target.value)
  }

  return (
    <>
      <Modal open={showModal} onClose={handleCloseModal} backdrop="static" style={{ marginTop: '100px' }}>
        <Modal.Header>
          <Modal.Title>
            <FormattedMessage id={actionType === ADD ? 'add_category' : 'edit_category'} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="categoryName">
              <Form.ControlLabel>
                <FormattedMessage id='category_name' />
              </Form.ControlLabel>
              <Input
                name="categoryName"
                value={categoryName}
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
            <FormattedMessage id='add_small' />
          </Button>
          <Button onClick={handleCloseModal} buttontype={BUTTON_TYPE.REMOVE}>
            <FormattedMessage id='cancel' />
          </Button>
        </Modal.Footer>
      </Modal >
    </>
  )
}

export default injectIntl(CategoryModal);