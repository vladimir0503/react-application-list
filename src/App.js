import React from 'react'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TaskPage from "./components/pages/taskPage/TaskPage";

function App() {

  const addTenantguid = async () => {
    const res = await fetch('http://intravision-task.test01.intravision.ru/api/Tenants');
    const guid = await res.json();
    localStorage.setItem('guid', guid);
    console.log(guid);
  };

  React.useEffect(() => addTenantguid(), []);

  return (
    <div className='appWrapper'>
      <Header />
      <div className='appContent'>
        <Navbar />
        <TaskPage />
      </div>
    </div>
  );
};

export default App;
