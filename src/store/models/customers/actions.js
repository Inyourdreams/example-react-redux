// тут все экшны, в случае с реакт-редакс это и есть реакции вьюхи на интеракции пользователя, то есть
// вьюха не делает запросов, а просто обрабатывает ивенты пользователя и отдает контроллеру команды

// это экшн-тайпы, чтоб не хардкодить и не ошибаться со стороковыми литералами
// на основании этих тайпов мы будем дёргать запросы
export const START_DELETE_CUSTOMER = 'START_DELETE_CUSTOMER';
export const SUCCESS_DELETE_CUSTOMER = 'SUCCESS_DELETE_CUSTOMER';
export const ERROR_DELETE_CUSTOMER = 'ERROR_DELETE_CUSTOMER';


// это наш экшн криэйтор, который мы будем дёргать во вьюхе
export const deleteCustomer = (id) => ({
    type: START_DELETE_CUSTOMER,
    payload: id,
});

export const setDeleteCustomerSuccess = (id) => ({
    type: SUCCESS_DELETE_CUSTOMER,
    payload: id,
})

export const setDeleteCustomerError = (e) => ({})
