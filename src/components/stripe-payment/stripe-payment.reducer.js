import {
  CREATE_PAYMENT,
  GET_PAYMENT,
  BEFORE_PAYMENT,
  LIST_PAYMENT,
  INVOICE_PRINT,
  UPDATE_SIDEBAR,
  CANCEL_SUBSCRIPTION,
} from "../../redux/types";
const initialState = {
  currentPlan: null,
  payment: null,
  payments: null,
  invoice: null,
  pagination: null,
  getInvoiceAuth: false,
  getPaymentAuth: false,
  upsertPaymentAuth: false,
  updateSideBarAuth: false,
  cancelSubscriptionAuth: false,
};
const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case BEFORE_PAYMENT:
      return {
        ...state,
        currentPlan: null,
        payment: null,
        payments: null,
        invoice: null,
        pagination: null,
        getInvoiceAuth: false,
        getPaymentAuth: false,
        upsertPaymentAuth: false,
        cancelSubscriptionAuth: false,
      };
    case GET_PAYMENT:
      return {
        ...state,
        currentPlan: action.payload.plan[0],
        payment: action.payload,
        getPaymentAuth: true,
      };
    case INVOICE_PRINT:
      return {
        ...state,
        invoice: action.payload,
        getInvoiceAuth: true,
      };
    case LIST_PAYMENT:
      return {
        ...state,
        payment: action.payload1,
        payments: action.payload2,
        getPaymentAuth: true,
        pagination: action.pagination,
      };
    case CREATE_PAYMENT:
      return {
        ...state,
        upsertPaymentAuth: true,
        payment: action.payload,
      };
    case CANCEL_SUBSCRIPTION:
      return {
        ...state,
        cancelSubscriptionAuth: true,
      };
    case UPDATE_SIDEBAR:
      return {
        ...state,
        updateSideBarAuth: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
export default paymentReducer