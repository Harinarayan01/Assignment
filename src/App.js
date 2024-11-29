import React from "react";
import Auth from "./components/Auth";
import SourcingExtension from './components/SourcingExtension/SourcingExtension';
import AdminSettingsPage from './components/AdminSettingsPage/AdminSettingsPage';

const App = () => {
  return (
    <div>
      <h1>Login page </h1>
      <AdminSettingsPage/>
      <SourcingExtension/>
    </div>
  );
};

export default App;
