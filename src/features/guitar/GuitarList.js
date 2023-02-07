import { useSelector } from "react-redux";
import { Row, Col } from 'reactstrap';
import GuitarCard from "./GuitarCard";
import { selectAllGuitar } from './guitarSlice';
import Error from '../../sitemisc/Error';
import Loading from '../../sitemisc/Loading';

//Guitar Directory pull
const GuitarList = () => {
    const guitar = useSelector(selectAllGuitar);
    console.log('guitar:', guitar);
    const isLoading = useSelector((state) => state.guitar.isLoading);
    const errorMsg = useSelector((state) => state.guitar.errorMsg);

    return isLoading ? (
        <Row>
                <Loading />
        </Row>
    ) : errorMsg ? (
        <Row>
                <Error errorMsg={errorMsg} />
        </Row>
    ) : (
        <Row className='ms-auto'>
            {guitar.map((guitar) => {
                return (
                    <Col md='12' className='m-4' key={guitar.id}>
                        <GuitarCard guitar={guitar} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default GuitarList;
