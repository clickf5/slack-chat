import AddChannelModal from './AddChannelModal';

const modals = {
  addChannel: AddChannelModal,
};

const getModal = (type) => modals[type];

export default getModal;
