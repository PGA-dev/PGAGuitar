import { Card, CardHeader, CardFooter, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
//used in DisplayList on Homepage...
const FrontFormat = ({ feature }) => {
    const { image, name, description } = feature;
    return (
        <Card>
            <CardImg src={image} alt={name} />
            <CardBody>
                <CardFooter>
                    <CardTitle style={{ padding: '10px', fontFamily: 'papyrus', color: 'blueviolet' }}>{name}</CardTitle>
                    <CardText style={{ fontFamily: 'papyrus', color: 'aqua' }}>{description}</CardText>
                </CardFooter>
            </CardBody>
        </Card>
    );
};

export default FrontFormat;