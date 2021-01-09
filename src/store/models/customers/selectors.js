import { createSelector } from "reselect";
// тут все, что связно с бизнеслогикой, то есть никаких функций которые обрабатывают данные из стора в компонентах, только селекторы

// примеры простого селектора
export const customersInfoSelector = (store) => store.customers.info;
export const currentCustomerIdSelector = (store) => store.customers.current;

// пример посложнее, показывает, что мы будем искать инфо для текущего клиента не в слое вью, а отдельно, так как все, что делает
// вью это отображает данные, никаких запросов и мапперов данных
export const currentCustomerInfoSelector = createSelector(
    customersInfoSelector,
    currentCustomerIdSelector,
    (info, currentID) => info.find((customerInfos) => customerInfos.id === currentID)
)
