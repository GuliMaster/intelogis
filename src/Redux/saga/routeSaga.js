import { call, put, takeEvery } from "redux-saga/effects";
import { getRouteDataAPI } from "../../API/api";
import { FETCH_ROUTE, setRoute, setRouteFailed } from "../reducers/routesReducer";


const getRouteData = (coordinates) => getRouteDataAPI(coordinates);

function* getRouteDataWorker(action) {
    try {
        const routeData = yield call(() => getRouteData(action.coordinates).then(res => res.data));
        yield put(setRoute(routeData));
    }
    catch (e) {
        yield put(setRouteFailed(`Ошибка при взаимодействии с HTTP-сервисом: ${e.response.data.code} - ${e.response.data.message}`));
    }
}

export function* routeWatcher() {
    yield takeEvery(FETCH_ROUTE, getRouteDataWorker);
}