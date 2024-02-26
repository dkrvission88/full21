import React, {  useState } from 'react'

// import * as constant from '../../../REDUX/Constant/constant'
import './supplylogin.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../REDUX/Actions/action2';

// import { getSupplierL } from '../../../REDUX/Actions/action1'

function Supplylogin() {


  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(state => state.auth.error);

  console.log(error)

  const handleLogin = (e) => {
    e.preventDefault()


    dispatch(login(name, password));

    console.log(login);
  };

  // const distactch = useDispatch()
  // const selectCSL=useSelector(state=>state.reducer1.data)

  // useEffect(() => {
  //   getapidata()

  // }, [])

  // const getapidata = async () => {
  //   const api = process.env.CONTRACTOR_OR_SUPPLIRE_LOGIN

  //   const response = await fetch(`http://localhost:8000/api/auth`)

  //   const data = await response.json()

  //   distactch(getSupplierL(data))

  // }




  return (
    <>

      {/* http://localhost:8000/api/auth */}


      <div className='container-supplyl4'>
        <div className='img-supplyl4'>
          <img src='/image/div2.jpg' alt='img' />
        </div>
        <div className='login-supplyl4'>
          <div className="pic210l4">
            <div></div>
            <img src='https://s3-alpha-sig.figma.com/img/6cb7/38cb/9ca1ef94b1c68d847bf8f99ce05df810?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ycl1Vuy2KMq7-hMXzJrCE-3U1TavpfJtgXYwKAAFCpiEaVBkQxNQ7oJrkKmK56MAVmH2wHiEJKqiZqgUeh-F8ZMIgc~k7QZXhcjXDVM7oNDqe6~MtlW02Ly4D37MUFp2UxqOjmhvINxccnkdAYYpJV90IoAWjYhVRogwbMxUe96Vbt1mVUOzMRSkcw0MgDhtYzHFgadEqnwLIv6Wac36TFW36dYeSJEkG9Z9iKpoNVRIQ7edQ4XbBePD5IprBV2ytI4zbvKondOOWFUdHmcXPCzRdo~fVmvfX1aTtYQFJHlL1JPFnIfOqOgswlXxumqDbwdT3NDiazm2JiKanFpfhg__' alt=''></img>
          </div>

          <div className="bwell4">

            {/* {data && data.map( )} */}


            <div className='wel-supplyl4'>Welcome!</div>
            <div className='div-supplyl4'>

              <div className='user1l4'>User</div>
              <div className='supply1l4'>Contractor/Supplier</div>
            </div>

            <form onClick={handleLogin}>
              <div className='info-supplyl4'>
                <div className='user-logl4'>
                  <label>Name</label>
                  <input type="text"value={name} onChange={e => setName(e.target.value)} placeholder='Enter you name of  your company' />
                </div>

                <div className='user-passl4'>
                  <label>Password</label>
                  <input type="password"value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter your password' />
                </div>
              </div>
              <div className='registration1l4'>
                {/* <Link to='/'>
                <button type='submit'>Registration</button>
              </Link> */}
                <div >
                  <button type='submit'>Registration</button>
                </div>
                {/* {error && <p>{error}</p>} */}
                <div className='dosulppyl4'> Don't have an account.
                  <Link to='/Supplier' className='dkrl4'>Register</Link>

                  {/* <div  className='dkrl4'>Register</div> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Supplylogin