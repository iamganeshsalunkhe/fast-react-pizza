import { useState } from 'react';
import {useDispatch} from 'react-redux';
import Button from '../../ui/Button';
import {updateName} from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username))
    navigate('/menu')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='mb-4 text-sm text-stone-600 md:text-base '>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-72 input mb-3'
      />

      {username !== '' && (
        <div className='m-2'>
          <Button type='primary'>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
