
const BassStat = ({bassstat}) => {
    const { id, text, heading } = bassstat;
    if (bassstat){
    return (
        <p style={{padding:'2px', fontFamily: 'papyrus', color: 'blueviolet'}} >
            {heading}:
            <div style={{padding:'2px', fontFamily: 'papyrus', color: 'aqua'}}>{text}</div>
        </p>
    );};
    return null;
};

export default BassStat;