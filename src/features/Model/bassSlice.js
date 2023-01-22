import { MODELS} from "../../app/shared/MODELS";

export const selectAllBass = () => {
    return MODELS;
};

// export const selectRandomCampsite = ()=> {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// }

export const selectbyBassId = (bassid) => {
    return MODELS.find((bass) => bass.id === parseInt(bassid));
};

export const selectBassFeatured = () => {
    return  MODELS.find((bass) => bass.featured);
};