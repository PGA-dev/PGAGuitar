import { Col, Row } from 'reactstrap';
import FrontFormat from './FrontFormat';
import { selectFeaturedGuitar } from '../guitar/guitarSlice';
import { selectFeaturedMulti } from '../multiguitar/multiGuitarSlice';
import { selectFeaturedMultiBass } from '../mutibass/multiBassSlice';
import { selectFeaturedBass } from '../bass/bassSlice';
//Used to map DisplayCards for HomePage...

const FrontEndDisplay = () => {
    const features = [selectFeaturedGuitar(), selectFeaturedMulti(),selectFeaturedMultiBass(), selectFeaturedBass(),];
    //mapping from CAMPSITES.js data array and PROMOTIONS.js data array...1 from each on Homepage

    return (
        <Row>
            {features.map((feature, idx) => {
                return (
                    <Col md='12' className='mt-1' key={idx}>
                        <FrontFormat feature={feature} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default FrontEndDisplay;