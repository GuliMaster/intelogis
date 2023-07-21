const SET_ROUTE = 'SET_ROUTE';
const SET_ROUTE_FAILED = 'SET_ROUTE_FAILED';

export const FETCH_ROUTE = 'FETCH_ROUTE';

const initState = {
    routeData: null,
    points: [
        {
            key: '1',
            route: 'Маршрут №1',
            firstPoint: [59.84660399, 30.29496392],
            secondPoint: [59.82934196, 30.42423701],
            thirdPoint: [59.83567701, 30.38064206]
        },
        {
            key: '2',
            route: 'Маршрут №2',
            firstPoint: [59.82934196, 30.42423701],
            secondPoint: [59.82761295, 30.41705607],
            thirdPoint: [59.84660399, 30.29496392]
        },
        {
            key: '3',
            route: 'Маршрут №3',
            firstPoint: [59.83567701, 30.38064206],
            secondPoint: [59.84660399, 30.29496392],
            thirdPoint: [59.82761295, 30.41705607]
        },
    ],
    error: null
}

const routesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_ROUTE: 
            return {
                ...state,
                routeData: action.routeData
            }
        case SET_ROUTE_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export const setRoute = (routeData) => ({type: SET_ROUTE, routeData});
export const setRouteFailed = (error) => ({type: SET_ROUTE_FAILED, error});
export const fetchRoute = (coordinates) => ({type: FETCH_ROUTE, coordinates});

export default routesReducer;