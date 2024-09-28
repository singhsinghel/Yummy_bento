import React, { useState } from 'react';
import './signIn.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const SignIn = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inUp, setInUp] = useState('signIn');

  return (
    <div className='model'>
      <Button
        className='btn btn-sm px-4 rounded-5 navbar-right-button'
        style={{ color: '#49557e', border: '1px solid black' }}
        onClick={handleOpen}
      >
        SIGNIN
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='rounded-4 box' sx={style}>
          {inUp === 'signIn' ? (
            <div className="card-body text-center container">
              <div className="h4">
                Log in to <br /> see more
              </div>
              <div className="card-body">
                <form action="/users/login" method="post" noValidate className="needs-validation">
                  <div className="mt-2 position-relative">
                    <div className="input-group has-validation">
                      <input
                        placeholder="Username"
                        name="username"
                        type="text"
                        className="form-control"
                        id="validationTooltipUsername"
                        aria-describedby="validationTooltipUsernamePrepend"
                        required
                      />
                      <div className="invalid-tooltip">Please enter your username.</div>
                    </div>
                  </div>

                  <div className="mt-2 position-relative">
                    <div className="input-group has-validation">
                      <input
                        placeholder="Password"
                        name="password"
                        type="password"
                        className="form-control"
                        id="validationTooltipUsername"
                        aria-describedby="validationTooltipUsernamePrepend"
                        required
                      />
                      <div className="invalid-tooltip">Password Field cannot be empty.</div>
                    </div>
                  </div>

                  <p className="card-text">
                    <small className="text-body-secondary">
                      <b>Forgot Your Password?</b>
                    </small>
                  </p>
                  <button className="btn text-light w-100 rounded-2" style={{backgroundColor:'tomato'}}>Log in</button>
                </form>
              </div>
              <p className="card-text">
                <small className="text-body-tertiary">
                  By continuing, you agree to YummyBento's <b>Terms of service, Privacy policy.</b>
                </small>
              </p>
              <div className="card-footer bg-white">
                <p className="card-text">
                  <small className="text-body-secondary">
                    Not on YummyBento yet?
                    <a className="cursor-pointer" onClick={() => setInUp('signUp')}>
                      <b> Sign up</b>
                    </a>
                  </small>
                </p>
              </div>
            </div>
          ) : (
            <div className='text-center'>
              <div className="h4">Sign Up to <br /> dive in</div>
              <div className="card-body">
                <form action="/users/signup" method="post" noValidate className="needs-validation">
                  <div className="mt-2 position-relative">
                    <div className="input-group has-validation">
                      <input
                        placeholder="Username"
                        name="username"
                        type="text"
                        className="form-control"
                        id="validationTooltipUsername"
                        aria-describedby="validationTooltipUsernamePrepend"
                        required
                      />
                      <div className="invalid-tooltip">Please choose a unique and valid username.</div>
                    </div>
                  </div>

                  <div className="mt-2 position-relative">
                    <div className="input-group has-validation">
                      <input
                        placeholder="Full name"
                        name="fullName"
                        type="text"
                        className="form-control"
                        id="validationTooltipUsername"
                        aria-describedby="validationTooltipUsernamePrepend"
                        required
                      />
                      <div className="invalid-tooltip">Please enter a full name.</div>
                    </div>
                  </div>

                  <div className="mt-2 position-relative">
                    <div className="input-group has-validation">
                      <input
                        placeholder="Email"
                        name="email"
                        type="text"
                        className="form-control"
                        id="validationTooltipUsername"
                        aria-describedby="validationTooltipUsernamePrepend"
                        required
                      />
                      <div className="invalid-tooltip">Please enter an email.</div>
                    </div>
                  </div>

                  <div className="mt-2 position-relative">
                    <div className="input-group has-validation">
                      <input
                        placeholder="Create Password"
                        name="password"
                        type="password"
                        className="form-control"
                        id="validationTooltipUsername"
                        aria-describedby="validationTooltipUsernamePrepend"
                        required
                      />
                      <div className="invalid-tooltip">Please enter a valid password.</div>
                    </div>
                  </div>
                  <button className="btn text-light w-100 rounded-2 mt-2"style={{backgroundColor:'tomato'}}>Create account</button>
                </form>
              </div>
              <p className="card-text">
                <small className="text-body-tertiary">
                  By continuing, you agree to Pinterest's <b>Terms of service, Privacy policy.</b>
                </small>
              </p>
              <div className="card-footer bg-white">
                <p className="card-text">
                  <small className="text-body-secondary">
                    Already have an account?
                    <a className="cursor-pointer" onClick={() => setInUp('signIn')}>
                      <b>Login</b>
                    </a>
                  </small>
                </p>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default SignIn;
