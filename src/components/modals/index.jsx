import AddChannelModalContainer from './AddChannelModalContainer';

const modals = {
  addChannel: AddChannelModalContainer,
};

const getModal = (type) => modals[type];

export default getModal;
