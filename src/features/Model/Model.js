import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const Model = ({ bass }) => {
    if (bass) {
        const { id, image, name } = bass;
        return (
            <Link to={`${id}`}>
                <Card>
                    <CardImg width='100%' src={image} alt={name} />
                    <CardImgOverlay>
                        <CardTitle>{name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </Link>
        );
    };
    return null;
}


export default Model;