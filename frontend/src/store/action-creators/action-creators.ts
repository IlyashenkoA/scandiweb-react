import { ACTIONS } from '../types/actions';

export const addProduct = (sku: string) => {
  return { type: ACTIONS.ADD_PRODUCT, payload: sku };
};

export const removeProduct = (sku: string) => {
  return { type: ACTIONS.REMOVE_PRODUCT, payload: sku };
};
