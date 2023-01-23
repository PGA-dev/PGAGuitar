import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

import {CAROUSEL} from '../../app/shared/CAROUSEL';

export const selectAllCarousel = () => {
    return CAROUSEL;
};
const UnCarousel = (items) => {
const items = selectAllCarousel();
    return(
        <UncontrolledCarousel items={items} />
        );
};
export default UnCarousel;