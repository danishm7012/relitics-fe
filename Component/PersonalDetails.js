import React, {useState} from 'react'

import { Container, Typography, Grid, TextField, Button } from '@material-ui/core';
import Price from './Price'
import Navbar from "../Component/Navbar"
import PersonalInfo from './PersonalInfo';
import Acount from '../Api/Acount'
import FreeModal from './FreeModal';


const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {
  const [error, setError] = useState('')


  const Continue = e => {
    e.preventDefault();
    nextStep();
  }
  const Success = e => {
    e.preventDefault();
    const res= Acount.Registeration(values, setError)
    res.then(value=>{
        console.log(value, value.data.success)
       
    })
    .catch(error=>{
        return
        setError(error.response.data.message);

    })
}

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <div>
      <Navbar />
      <div className="maj-bg">
      <PersonalInfo 
              values={values.step}
              prevStep={prevStep }
              nextStep={nextStep }
              />
        <div className="col-sm-9 mt-3 mb-0 mx-auto ">
          <div className="uper-color m-0">
            <h3 className="text-white mb-0 p-4">Select Package</h3>

          </div>
          <div className="row bg-pric p-3 ">



            <div className="col-sm-4">

              <Price
                Continue={Success}
                Price="Free"
                Amount="0 US$"
                Package="Free trail"
              />
            </div>
            <div className="col-sm-4">
              <Price
                Continue={Continue}

                Price="Paid"
                Amount="50 US$"
                Package="Monthly Package"
              />
            </div>
            <div className="col-sm-4">
              <Price
                Continue={Continue}

                Price="Paid"
                Amount="10 US$"
                Package="24 Hours Package"
              />
            </div>
            <FreeModal />

          </div>
        </div>


      </div>
    </div>

  )
}

export default PersonalDetails