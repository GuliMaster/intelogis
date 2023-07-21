import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import Map from "./Map/Map";
import Routes from "./Routes/Routes";
import s from "./RouteMap.module.css";
import { Modal } from "antd";
import { setRouteFailed } from '../../Redux/reducers/routesReducer';

const RouteMap = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (props.error) showModal();
    }, [props.error]);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        dispatch(setRouteFailed(null));
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        dispatch(setRouteFailed(null));
        setIsModalOpen(false);
    };

    return (
        <div className={s.routeMap}>
            <Routes points={props.points} />
            <Map coordinates={props.coordinates} waypoints={props.waypoints} />
            {
                props.error &&
                <Modal title="Упс...Ошибка... :(" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} cancelText='Отмена' okText='ОК'>
                    <p>{props.error}</p>
                </Modal>
            }
        </div>
    )
}

export default RouteMap;