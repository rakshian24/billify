import React from 'react'
import { useSelector } from 'react-redux'
import { getModal } from '../reducers'
import { MODAL_TYPES } from '../constants';
import CategoryModal from './modals/CategoryModal';

const ModalConductor = () => {
  const modalDetails = useSelector(getModal);
  const { type = '' } = modalDetails;
  const { CATEGORY } = MODAL_TYPES;

  switch (type) {
    case CATEGORY:
      return <CategoryModal modalDetails={modalDetails} />
    default:
      return;
  }
}

export default ModalConductor