
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import OtpInput from 'react-otp-input';

import { Modal, Button } from 'antd';
import Otp from './Otp';
import Password from 'antd/lib/input/Password';

const NewPassword = (props) => {
  const [PasswordNew, setPasswordNew] = useState('')
  const [Password, setPassword] = useState('')


  const handleOk = (e) => {
    e.preventDefault();
    props.confirmPassword(PasswordNew, Password)
  }

  const handleChange = (e) => {
    console.log(e)
    setOtp(e)
  }


  return (
    <>
      <Modal visible={props.isModalVisible} className='modal-bg' onOk={handleOk} footer={false} onCancel={() => props.setPasswordModel(false)}>
        <form onSubmit={handleOk}>
          <p className='text-white fs-21'>Enter New Password</p>
          <input value={Password} onChange={(e) => setPassword(e.target.value)} className="form-control w-100" />
          <p className='text-white fs-21 mt-3'>Confirm New Password</p>
          <input onChange={(e) => setPasswordNew(e.target.value)} value={PasswordNew} className="form-control w-100" />
          {Password && PasswordNew ?
            Password === PasswordNew ? <p className='text-white'>Password Matched</p> : <p className='text-danger'>Password does not Match</p> : null}
          {/* <p>{Password == PasswordNew ? "passwordmatch" : "password does not match"}</p> */}
          <div className="d-grid gap-2">
            <button className="btn btn-primary mt-5 py-4"
              disabled={!(Password && PasswordNew && Password === PasswordNew)}
              type="submit">Verify</button>
          </div>
        </form>



      </Modal>
    </>
  );
};
export default NewPassword