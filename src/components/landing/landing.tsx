import Dashboard from '../landing/dashboard/dashboard';
import Footer from './footer/footer';
import Header from './header/header';
export default function Landing() {
  return (
    <div className="container mx-auto">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}
