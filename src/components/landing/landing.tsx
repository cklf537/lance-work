import Dashboard from '../landing/dashboard/dashboard';
import Footer from './footer/footer';
import Header from './header/header';
export default function Landing() {
  return (
    <div className="">
      <div className=''>
        <Header />
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
}
