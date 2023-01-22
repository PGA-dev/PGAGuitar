import { Row, Col} from 'reactstrap';
import { selectAllBass } from './bassSlice';
import Model from "./Model";


const BassList = () => {
    const bass = selectAllBass();
    return (
        <Row className='ms-auto'>
            {bass.map((bass) => {
                return (
                    <Col md='12' className='m-4' key={bass.id}>
                        <Model bass={bass} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default BassList;