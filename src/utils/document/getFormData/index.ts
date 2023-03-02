/**
 * return formatted form data
 * @param {any} documents
 * @param {string} documentType
 * @returns {FormData}
 */
const getFormData = (documents: any, documentType: string): FormData => {
  const formdata = new FormData();
  const documentName = documents[0].file.name;
  formdata.append('documents[0].type', documentType);
  formdata.append('documents[0].document', documents[0].file, documentName);
  return formdata;
};

export default getFormData;
