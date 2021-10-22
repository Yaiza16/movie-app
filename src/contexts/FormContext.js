import React, { useState, createContext } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [isExpandedForm, setIsExpandedForm] = useState(false);

  const data = { isExpandedForm, setIsExpandedForm };
  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

export default FormContext;
