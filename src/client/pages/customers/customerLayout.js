import React from 'react';
import { useSelector } from "react-redux";
import { appViewSelector } from "../../selectors";
import { currentCustomerInfoSelector } from "../../../store/models/customers/selectors";

export const CustomerLayout = () => {
    const isVisible = useSelector(appViewSelector);
    const currentCustomer = useSelector(currentCustomerInfoSelector);

    if (!isVisible) {
        return null;
    }

    return (
        <div>
            { currentCustomer.id }
        </div>
    );
}
