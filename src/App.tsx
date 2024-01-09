import React, { useState } from 'react'
import './App.css'
import FormControl from './FormControl'
import { Formik } from 'formik';
import {object, string, number} from 'yup'

const driverInfoSchema = object({
  Name: string().required('please input your name'),
  Age: number().min(18, 'Min age should be 18').max(60).required('Please input your age'),
  LicenseType: string().required(),
  ID: string().matches(/^[0-9]+$/, "Must be only digits")
  .min(16, 'Must be exactly 16 digits')
  .max(16, 'Must be exactly 16 digits')
})

interface DriverInfo {
  Name: string;
  Age: string;
  LicenseType: string;
  ID: string;
}

const LicenseTypes = [
  { value: "MCWG", text: "MCWG" },
  { value: "LMV", text: "LMV" },
  { value: "MCWG", text: "MCWG" },
];

function App() {
  const [count, setCount] = useState<number>(0)

  const [driverInfo] = useState<DriverInfo>({
    Name: "",
    Age: "",
    LicenseType: "",
    ID: "",
  });

  const onSubmit = (values: DriverInfo, { setSubmitting }) => {
    driverInfoSchema()
     setCount((count) => count + 1);
     setTimeout(() => {
     alert('Driver Info: ' + JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }

  return (
    <>
      <h1>DL Application Form</h1>
      <div className="card">
        <Formik initialValues={driverInfo} onSubmit={onSubmit}>
          {({
            values,
            handleChange,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <FormControl
                type="textbox"
                name="Name"
                value={values.Name}
                onChange={handleChange}
              />
              <FormControl
                type="textbox"
                name="Age"
                value={values.Age}
                onChange={handleChange}
              />
              <FormControl
                type="dropdown"
                name="LicenseType"
                value={values.LicenseType}
                onChange={handleChange}
                options={LicenseTypes}
              />
              <FormControl
                type="textbox"
                name="ID"
                value={values.ID}
                onChange={handleChange}
              />
              <button type="submit" disabled={isSubmitting}>
                Submit {count}
              </button>
            </form>
          )}
        </Formik>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App
