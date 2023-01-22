import { Container } from 'reactstrap';
import BassList from '../features/Bass/BassList';
import SubHeader from '../components/SubHeader';

const ModelDirectory = () => {
    return (
        <Container>
            <SubHeader current='bassDir' />
            <BassList />
        </Container>
    );
};

export default ModelDirectory;