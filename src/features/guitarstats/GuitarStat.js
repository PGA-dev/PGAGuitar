//import { Col } from "reactstrap";

const GuitarStat = ({ guitarstat }) => {
    const { nameMan, Manufacture1URL, Manufacture2URL, Manufacture3URL } = guitarstat;
    return (
        <>
                <ul className='list-unstyled' style={{ padding: '2px', fontFamily: 'papyrus', color: 'blueviolet' }}>
                    <li>
                        <a href={Manufacture1URL}>{Manufacture1URL}</a>
                    </li>
                    <li>
                    <a href={Manufacture2URL}>{Manufacture2URL}</a>
                    </li>
                    <li>
                    <a href={Manufacture3URL}>{Manufacture3URL}</a>
                    </li>
                </ul>
        </>
    );
};

export default GuitarStat;