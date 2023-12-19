import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurantSlice';

function Header() {
  const dispatch = useDispatch()
  return (
    <Navbar variant='dark'>
    <Container>
      <Navbar.Brand href="#" className='d-flex p-3'>
        <img
          alt=""
          src="https://www.logolynx.com/images/logolynx/2f/2fe83a33c4d0888fbb9476d0deda5710.png"
          width="55"
          height="55"
          className="d-inline-block align-top"
        />{' '}
        <h4 className='mt-3 ms-4'><span className='text-warning'>Food</span> Circle</h4>
      </Navbar.Brand>
      <input onChange={(e)=>dispatch(search(e.target.value))} type="text" placeholder='Search by neighbourhood' className='form-control w-25' />
    </Container>
  </Navbar>
  )
}

export default Header