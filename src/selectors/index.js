/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit';

const getMessages = (state) => state.messages;
const getCurrentChannelId = (state) => state.currentChannelId;

export const getFilteredMessages = createSelector(
  getMessages,
  getCurrentChannelId,
  (messages, currentChannelId) => messages
    .filter(({ channelId }) => channelId === currentChannelId),
);
