import React, { useState } from 'react'
import './App.css'
import FormControl from './FormControl'

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

  const [driverInfo, setDriverInfo] = useState<DriverInfo>({
    Name: "",
    Age: "",
    LicenseType: "",
    ID: "",
  });

  const onInputChange  = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setDriverInfo((prev: DriverInfo) => ({...prev, [e.target.name]: e.target.value }));
  }

  const onSubmit = () => {
     setCount((count) => count + 1);
     alert('Driver Info: ' + JSON.stringify(driverInfo));
  }

  return (
    <>
      <h1>DL Application Form</h1>
      <div className="card">
        <FormControl
          type="textbox"
          name="Name"
          value={driverInfo.Name}
          onChange={onInputChange}
        />
        <FormControl
          type="textbox"
          name="Age"
          value={driverInfo.Age}
          onChange={onInputChange}
        />
        <FormControl
          type="dropdown"
          name="LicenseType"
          value={driverInfo.LicenseType}
          onChange={onInputChange}
          options={LicenseTypes}
        />
        <FormControl
          type="textbox"
          name="ID"
          value={driverInfo.ID}
          onChange={onInputChange}
        />
        <button onClick={onSubmit}>
          Submit {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App
