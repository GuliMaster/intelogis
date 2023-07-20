import Map from "./Map/Map";
import Routes from "./Routes/Routes";
import s from "./RouteMap.module.css";

const RouteMap = () => {
    return (
        <div className={s.routeMap}>
            <Routes />
            <Map />
        </div>
    )
}

export default RouteMap;