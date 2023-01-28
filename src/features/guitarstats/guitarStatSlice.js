import { GUITARSTAT } from '../../app/shared/GUITARSTAT';

export const selectStatByGuitarId = (guitarid) => {
    return GUITARSTAT.filter(
        (guitarstat) => guitarstat.guitarid === parseInt(guitarid)
    );
};