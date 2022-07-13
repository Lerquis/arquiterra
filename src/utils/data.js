export const allProjectsQuery = () => {
  return '*[_type == "proyecto"]';
};

export const searchProjectQuery = (projectName) => {
  return `*[_type == 'proyecto' && nombreProyecto =='${projectName}']`;
};

export const searchProjectByID = (idProject) => {
  return `*[_type == 'proyecto' && _id =='${idProject}']`;
};

export const getAdmin = () => {
  return '*[_type=="admin"]';
};

export const deleteImage = (key, idProject) => {
  return `*[_type == 'proyecto' && _id =='${idProject}'].image[_key=='${key}']`;
};
