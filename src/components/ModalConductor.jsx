import React from 'react'
import { useSelector } from 'react-redux'
import { getModal } from '../reducers'
import { MODAL_TYPES } from '../constants';
import CategoryModal from './modals/CategoryModal';
import ItemModal from './modals/ItemModal';

const ModalConductor = () => {
  const modalDetails = useSelector(getModal);
  const { type = '' } = modalDetails;
  const { CATEGORY, ITEM } = MODAL_TYPES;

  switch (type) {
    case CATEGORY:
      return <CategoryModal modalDetails={modalDetails} />
    case ITEM:
      return <ItemModal modalDetails={modalDetails} />
    default:
      return;
  }
}

export default ModalConductor