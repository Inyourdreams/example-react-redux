import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { appViewSelector } from "../../selectors";
import { currentCustomerInfoSelector } from "../../../store/models/customers/selectors";

export const CustomerLayout = () => {
    const dispatch = useDispatch();

    // cелекторы нужных данных, вьюха не знает как мы их подготавливаем, просто отображает
    const isVisible = useSelector(appViewSelector);
    const currentCustomer = useSelector(currentCustomerInfoSelector);

    // так же дёрагние контроллера, вьюха не знает ничего о контроллере и модели, она просто знает, что ей нужно среагировать
    // на взаимодействие с пользователем
    const deleteCustomer = useCallback((id) => {

        // диспатчим экшн, который будет обработан в другом месте
        dispatch(deleteCustomer(id));
    }, [dispatch]);

    if (!isVisible) {
        return null;
    }

    return (
        <div>
            { currentCustomer.id }
            <button onClick={ () => deleteCustomer(currentCustomer.id) }> delete customer </button>
        </div>
    );
}
