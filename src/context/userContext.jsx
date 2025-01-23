import { useContext, useState } from 'react';
import { createContext } from 'react';
import { toast } from 'react-toastify';

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null;
};

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const setUserInfo = (data) => {
    const user = { ...data.user, token: data.jwt };
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
    toast.success(`Welcome ${user.username}`);
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.success('Logged out!');
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUserInfo,
        logoutUser,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
