import logo from './logo.svg';
import Nav from "./Files/Nav"
import Hero from './Files/Hero';
import Icons from './Files/Icons';
import Content from './Files/Content';
import Footer from './Files/Footer';

  function Home(props) {

    function getData(e){
      props.handleClick(e)
    }

  return (
    <main className='main--screen'>
      <Hero />
      <div className='first-wave wave2'></div>
      <Icons />
      <Content handleClick = {getData} />
      <div className='second-wave wave2'></div>
      <Footer />
    </main>
  );
}

export default Home;
