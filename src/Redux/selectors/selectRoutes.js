import { createSelector } from "@reduxjs/toolkit";

export const selectRoutes = (state) => state.routes.routeData;

export const selectCoordinates = createSelector(selectRoutes, 
    (routeData) => {
        return routeData? routeData.routes[0].geometry.coordinates.map(el => [...el].reverse()) : []
    }
);

export const selectWayPoints = createSelector(selectRoutes,
    (routeData) => routeData?.waypoints
);

export const selectError = (state) => state.routes.error;
