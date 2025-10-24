import HomeLayout from '../layouts/HomeLayout'
import Loading from '../components/Loading';
import ErrorModal from '../components/ErrorModal';


function Home() {

  return (
    <>
      <HomeLayout />
      <Loading />
      <ErrorModal />
    </>
  );
}

export default Home
