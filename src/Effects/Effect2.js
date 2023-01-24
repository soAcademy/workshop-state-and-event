import {useState, useEffect} from 'react';

const Effect2 = () => {

  const [name, setName] = useState('Bin');
  const [profile, setProfile] = useState('My name is Bin');

  useEffect(() => {
    console.log(name);
    setProfile(`My name is ${name}`);
  },[name]);

  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <div className="m-2">
        <p className="text-center">{`Profile: ${profile}`}</p>
        <input
          type="text"
          placeholder="Enter your name"
          className="bg-yellow-100 border-2 border-yellow-300 rounded-lg mt-3 p-2"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
    </div>
  );
};

export default Effect2;