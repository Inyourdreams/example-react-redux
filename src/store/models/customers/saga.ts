// здесь условная сага, это может быть любая миддл вара или сервис
import { START_DELETE_CUSTOMER, setDeleteCustomerSuccess, setDeleteCustomerError } from './actions';
import { deleteCustomerApi } from '../../../server/fetcher';

// вот все реакции на наш вью
function* deleteCustomerSagaWorker(action) {
    try {
        const { status, data: { id } } = yield call(deleteCustomerApi, action.id);

        yield put(setDeleteCustomerSuccess(id));
    } catch (e) {
        yield put(setDeleteCustomerError(e));
    }
}

// каждый экшн из вью пройдет через эту прослойку, и мы возьмем только тот который нам нужен и дернем запрос выше
function* rootSaga() {
    yield takeEvery(START_DELETE_CUSTOMER, deleteCustomerSagaWorker);
}
