import { useSelector } from "react-redux";
import RouteMap from "./RouteMap"
import { selectCoordinates, selectError, selectWayPoints } from "../../Redux/selectors/selectRoutes";
import { selectPoints } from "../../Redux/selectors/selectPoints";


const RouteMapContainer = () => {
    const coordinates = useSelector(selectCoordinates);
    const waypoints = useSelector(selectWayPoints);
    const points = useSelector(selectPoints);
    const error = useSelector(selectError);

    return <RouteMap coordinates={coordinates} waypoints={waypoints} points={points} error={error}/>;
}

export default RouteMapContainer;