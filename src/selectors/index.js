/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit';

const getMessages = (state) => state.messages;
const getChannels = (state) => state.channelsInfo.channels;
const getModalExtra = (state) => state.modal.extra;
const getCurrentChannelId = (state) => state.channelsInfo.currentChannelId;

export const getFilteredMessages = createSelector(
  getMessages,
  getCurrentChannelId,
  (messages, currentChannelId) => messages
    .filter(({ channelId }) => channelId === currentChannelId),
);

export const getChannelInfo = createSelector(
  getChannels,
  getModalExtra,
  (channels, { channelId }) => channels
    .filter(({ id }) => id === channelId),
);
