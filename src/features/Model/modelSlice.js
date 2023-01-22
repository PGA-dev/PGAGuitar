import { MODELS} from "../../app/shared/MODELS";

export const selectAllModels = () => {
    return MODELS;
};

// export const selectRandomCampsite = ()=> {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// }

export const selectbyModelId = (modelid) => {
    return MODELS.find((model) => model.id === parseInt(modelid));
};

export const selectModelFeatured = () => {
    return  MODELS.find((model) => model.featured);
};