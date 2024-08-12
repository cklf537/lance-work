import { useContext } from 'react';
import Dashboard from '../landing/dashboard/dashboard';
import Footer from './footer/footer';
import Header from './header/header';
import { AppContext } from '../../../data/context';
import { AppState, Category, Groups, NavItems, Users } from '../../../data/model';

export default function Landing() {
  const {heading}: AppState<Users, Groups, NavItems, Category> = useContext(AppContext);
  return (
    <div className="">
        <Header heading={heading} />
        <Dashboard />
        <Footer />
    </div>
  );
}
