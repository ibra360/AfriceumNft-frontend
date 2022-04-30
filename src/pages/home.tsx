
import Categories from "../components/Home/components/Categories/index";
import Collection from "../components/Home/components/Collections/index";
import Create from "../components/Home/components/Create/index";
import Footer from "../components/Home/components/Footer/index";
// import Head from "../components/Home/components/Head/index";
import Hero from "../components/Home/components/Hero/index";
import Meet from "../components/Home/components/Meet/index";
import Notable from "../components/Home/components/Notable/index";
import Resources from "../components/Home/components/Resources/index";
import Trending from "../components/Home/components/Trending/index";
import styles from "../components/Home/components/styles/Home.module.css";

const Home = () => {
  return (
    <>
      {/* <Head title={"Africeum"} /> */}
      <div className={styles.container}>
        {/* <Header /> */}
        <div className={styles.background}></div>
          <Hero />
          <Notable />
          {/* <Collection /> */}
          {/* <Trending /> */}
          {/* <Create /> */}
          {/* <Resources /> */}
          {/* <Categories /> */}
          <Meet />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
