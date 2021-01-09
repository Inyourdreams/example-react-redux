import { SUCCESS_DELETE_CUSTOMER } from './actions';
// слои модели для разных сущностей свой слайс стора;

const initialStore = {
    customers: [],
    info: {},
    current: null,
};

// обрабатываем экшн и меняем стор, который относится к customers;
export const customersReducer = (action, state = initialStore) => {
    switch (action.type) {
        case SUCCESS_DELETE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter(customer => customer.id !== action.payload)
            }
        default: return state;
    }
};
