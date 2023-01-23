import { MULTIBASS } from "../../app/shared/MULTIBASS";

export const selectFeaturedMulti= () => {
    return MULTIBASS.find((multibass) => multibass.featured);
};
