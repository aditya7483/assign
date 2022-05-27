import React, { useState } from 'react'
import Facebook from './pics/f_logo_RGB-Blue_1024.png'
import Logo from './pics/logo-in.png'
import Google from './pics/download.png'


export default function Navbar(props) {
  const [signup, setsignup] = useState(true)
  return (
    <div>
      <div className=' phone'>

      <div className='phone-nav'>
        <div>

        <i class="fa-solid fa-arrow-left mx-4 my-4" style={{ color: 'white', fontSize: '29px' }}></i>
        </div>

        <div style={{alignSelf:'center'}} className='mx-3'>

        <button type="button" className='btn my-btn-2' style={{
          marginLeft: '12px', border: '1px solid', padding: '5px 2px'
          , alignSelf: 'center'
        }}>

          {props.login ?
            <>
              <i className="fa-solid fa-arrow-right-from-bracket" style={{color:'white'}}></i>
              <p style={{ display: 'inline', margin: '0', marginLeft: '2px',color:'white' }} className=''>
                Leave Group
              </p>
            </> :
            <>
              +<i class="fa-solid fa-user-group" style={{ color: 'white', paddingRight: ' 8px' }}></i>Join Group
            </>}
        </button>
          </div>
      </div>
      </div>


      <nav className="navbar navbar-expand-lg bg-light my-nav">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ margin: 'auto 0px auto 0px' }}>
            <img src={Logo} alt='logo' className='logo' />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ margin: 'auto' }}>
              <form className="d-flex" role="search">
                <i className="fa-solid fa-magnifying-glass" style={{
                  position: "relative",
                  top: '12px',
                  left: '26px'
                }}></i>
                <input className="form-control me-2 font-1 search" type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search" style={{
                  backgroundColor: ' #F2F2F2',
                  borderRadius: '21px', width: '22rem',
                  padding: ' 10px 12px 10px 46px'
                }} />
              </form>

            </ul>

          </div>
          <div id='login'>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item dropdown" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <a className="nav-link dropdown-toggle font-1" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'black' }}>
                  {props.login ?
                    <>
                      <img src={props.img} alt='...' />
                      <p style={{ display: 'inline', marginLeft: '2px' }}>{props.name}</p>
                    </> :
                    <>
                      Create Account.<span className='create-acc font-1' style={{ color: 'blue' }}>It's free!</span>
                    </>
                  }
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Modal --> */}
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "51rem" }}>
              <div className="modal-content" style={{ background: '#EFFFF4', borderRadius: '1rem' }}
              >
                <h5 className="modal-title" id="exampleModalLabel" style={{ color: '#008A45', textAlign: 'center', fontSize: 'small', padding: '12px' }}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h5>
                {/* <div className="modal-header" >
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div> */}

                <div style={{ display: 'flex' }}>
                  <div className="modal-body">

                    {signup ?

                      <h4 className='mb-3 mx-4 font-weight-bold'>Create Account</h4> :
                      <h4 className='mb-3 mx-4 font-weight-bold'>Sign In</h4>
                    }
                    {signup && <div class="input-group" style={{ maxWidth: '21rem', margin: 'auto' }} >
                      <input type="text" class="form-control signup" placeholder="First Name" aria-label="First name" />
                      <input type="text" class="form-control signup" placeholder="Last Name" aria-label="Last name" />
                    </div>}
                    <input type="text" class="form-control signup" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                    <input type="password" class="form-control signup" placeholder="Password" />
                    {signup && <input type="text" class="form-control signup" placeholder="Confirm Password" />}

                    <div className='d-grid gap-2' style={{
                      maxWidth: '23rem',
                      margin: 'auto'
                    }}>
                      <button class="btn btn-primary mt-3 mx-3" onClick={() => { props.changeLogin(true) }} type="button" style={{ color: 'white', borderRadius: '19px' }}>{signup ? 'Create Account' : "Sign In"}</button>
                    </div>
                    <div>
                      <img src={Facebook} id='facebook' style={{ left: signup ? '5.5rem' : '6.5rem' }} /><input type="text " style={{
                        paddingLeft: '28px', maxWidth: '14rem',
                        margin: 'auto'
                      }} class="form-control signup using" placeholder="Sign up using facebook" />
                    </div>

                    <div>
                      <img src={Google} id='google' style={{ left: signup ? '5.5rem' : '6.5rem' }} /><input type="text" style={{ paddingLeft: '28px', }} class=" using form-control signup" placeholder="Sign up using Google" />
                    </div>
                    {
                      !signup && <p className='font-weight-bold text-center mt-4' style={{ fontSize: 'small' }}> Forgot Password?</p>
                    }

                  </div>
                  <div className='mt-3 mx-2'>
                    {signup &&
                      <>
                        <p>Already have an account?<a style={{ color: 'blue', cursor: 'pointer' }} onClick={() => { setsignup(false) }}>Sign In</a></p>
                        <p className='text-muted' style={{ fontSize: "small" }}>By signing up you agree to our Terms & Conditions privacy policy</p>
                      </>
                    }
                    {
                      !signup && <p className='text-muted'>Don't have an account yet?<a style={{ color: 'blue', cursor: 'pointer' }} onClick={() => { setsignup(true) }}>Create one for free</a></p>
                    }
                  </div>
                </div>
                <div className="modal-footer">


                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
