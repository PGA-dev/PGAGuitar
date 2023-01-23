import { BASS } from "../../app/shared/BASS";

export const selectAllBass = () => {
    return BASS;
};


export const selectFeaturedBass= () => {
    return BASS.find((bass) => bass.featured);
};