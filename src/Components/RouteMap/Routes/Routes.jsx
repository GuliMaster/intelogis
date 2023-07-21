import { Table } from 'antd';
import s from './Routes.module.css';
import { useDispatch } from 'react-redux';
import { fetchRoute } from '../../../Redux/reducers/routesReducer';

const Routes = (props) => {
    const dispatch = useDispatch();

    const selectRouteHandler = (coordinates) => {
        dispatch(fetchRoute(coordinates));
    };

    const columns = [
        {
            title: 'Маршрут',
            dataIndex: 'route',
            key: 'route'
        },
        {
            title: 'Точка 1 (lat, lng)',
            dataIndex: 'firstPoint',
            key: 'firstPoint',
            render: (arr) => arr.join(', ')
        },
        {
            title: 'Точка 2 (lat, lng)',
            dataIndex: 'secondPoint',
            key: 'secondPoint',
            render: (arr) => arr.join(', ')
        },
        {
            title: 'Точка 3 (lat, lng)',
            dataIndex: 'thirdPoint',
            key: 'thirdPoint',
            render: (arr) => arr.join(', ')
        },
    ];

    return (
        <Table className={s.table} columns={columns} dataSource={props.points}
            onRow={(record) => {
                const coordinates = [...record.firstPoint].reverse().join(',') + ';'
                                    + [...record.secondPoint].reverse().join(',') + ';' 
                                    + [...record.thirdPoint].reverse().join(',');
                return {
                    onClick: () => selectRouteHandler(coordinates)
                }
            }} />
    );
}

export default Routes;