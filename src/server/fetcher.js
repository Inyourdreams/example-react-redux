export const deleteCustomerApi = (id) => {
    fetch({ method: 'POST', body: { id }});
};
// вот модель она общается с бэком;
