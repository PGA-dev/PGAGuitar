import { Container } from 'reactstrap';
import GuitarList from '../features/guitar/GuitarList';
import SubHeader from '../components/SubHeader';

const BassDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='guitardirectory' />
            <GuitarList />
        </Container>
    );
};

export default BassDirectoryPage;