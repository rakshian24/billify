import React, { useState } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Form, Modal } from 'rsuite';
import { useDispatch } from 'react-redux';

import { Button, Input } from '../common/StyledComponents';
import { BUTTON_TYPE, CATEGORY_NAME_MAX_LENGTH, colors } from '../constants';
import { addCategory } from '../reducers/actionCreators';

const AddCategoryModal = ({ open, handleClose, intl: { formatMessage } }) => {
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState('');
  const [errorText, setErrorText] = useState('');

  const handleCloseModal = () => {
    setCategoryName('');
    setErrorText('');
    handleClose();
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
    handleClose();
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
      <Modal open={open} onClose={handleCloseModal} backdrop="static" style={{ marginTop: '100px' }}>
        <Modal.Header>
          <Modal.Title>
            <FormattedMessage id='add_category' />
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

export default injectIntl(AddCategoryModal);