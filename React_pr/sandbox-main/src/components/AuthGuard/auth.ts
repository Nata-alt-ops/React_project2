
import { createStore, createEvent } from 'effector';

export const logout = createEvent();

export const $isAuthenticated = createStore<boolean>(
  localStorage.getItem('isAuthenticated') !== null
)
  
  .on(logout, () => false);

logout.watch(() => {
  localStorage.removeItem('isAuthenticated');
});