import { Container } from 'reactstrap';
import FrontEndDisplay from '../features/FrontDisplay/FrontEndDisplay';
import SubHeader from '../components/SubHeader';
import FrontEndCarouselDisplay from '../features/FrontDisplay/FronEndCarouselDisplay';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <FrontEndDisplay />
        </Container>
    );
};

export default HomePage;