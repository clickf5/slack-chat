import AddChannelModalContainer from './AddChannelModalContainer';
import RenameChannelModalContainer from './RenameChannelModalContainer';
import RemoveChannelModal from './RemoveChannelModal';

const modals = {
  addChannel: AddChannelModalContainer,
  renameChannel: RenameChannelModalContainer,
  removeChannel: RemoveChannelModal,
};

const getModal = (type) => modals[type];

export default getModal;
