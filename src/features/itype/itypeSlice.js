import { ITYPE} from "../../app/shared/ITYPE";

export const selectAllIType = () => {
    return ITYPE;
};

// export const selectRandomModels = ()=> {
//     return MODELS[Math.floor(MODELS.length * Math.random())];
// }

export const selectbyITypeId = (itypeid) => {
    return ITYPE.find((itypeid) => itype.id === parseInt(itypeid));
};

// export const selectModelFeatured = () => {
//     return  ITYPE.find((itypeid) => itype.featured);
// };