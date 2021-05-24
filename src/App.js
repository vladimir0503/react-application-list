import React from 'react'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import TaskPage from "./components/pages/taskPage/TaskPage";
import { TaskPage, InfoBasePage, StaffPage, ClientsPage, AssetsPage, SettingsPage } from './components/pages/index'
import { Route } from 'react-router-dom';

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
        <Route path='/information-store' component={InfoBasePage} />
        <Route path='/applications' component={TaskPage} />
        <Route path='/staff' component={StaffPage} />
        <Route path='/clients' component={ClientsPage} />
        <Route path='/assets' component={AssetsPage} />
        <Route path='/settings' component={SettingsPage} />
      </div>
    </div>
  );
};

export default App;
