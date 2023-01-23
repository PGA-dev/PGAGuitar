import { Container } from 'reactstrap';
import ITypeList from '../features/itype/ITypeList';
import SubHeader from '../components/SubHeader';

const ITypeDirectory = () => {
    return (
        <Container>
            <SubHeader current='itypedirectory' />
            <ITypeList />
        </Container>
    );
};

export default ITypeDirectory;