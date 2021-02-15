import AddChannelModalContainer from './AddChannelModalContainer';
import RenameChannelModalContainer from './RenameChannelModalContainer';

const modals = {
  addChannel: AddChannelModalContainer,
  renameChannel: RenameChannelModalContainer,
};

const getModal = (type) => modals[type];

export default getModal;
