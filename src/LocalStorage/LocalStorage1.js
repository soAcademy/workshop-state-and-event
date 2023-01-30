const LocalStorage1 = () => {
  localStorage.setItem("username", "Ball");

  const username = localStorage.getItem("username");

  return <>{username}</>;
};

// รู้วิธีเก็บข้อมูลไปใน store เก็บ item
export default LocalStorage1;