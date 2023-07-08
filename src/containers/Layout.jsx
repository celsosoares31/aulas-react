import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className='w-screen h-screen '>
      <Header />
      <div className='flex w-full h-full'>
        <Sidebar />
        <main className='flex-1 bg-slate-800'>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
