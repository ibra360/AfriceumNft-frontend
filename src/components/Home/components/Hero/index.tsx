import styles from "./index.module.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { GrCircleInformation } from "react-icons/gr";
import { useAuthState } from "../../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useActiveWeb3React } from "../../../../hooks";

const Hero = () => {
  const navigate = useNavigate();
  const { account } = useActiveWeb3React();

  const { user } = useAuthState();
  return (
    <div className={styles.main}>
      <div className={styles.intro}>
        {/* <div className={styles.background}></div> */}
        <div className={styles.content}>
          <div className={styles.discover}>
            <h1>Discover, collect, and sell extraordinary NFTs</h1>
            <p>
              Africeum is the world&apos;s first and largest NFT marketplace
            </p>
            <div className={styles.buttons}>
              <button
                onClick={() => {
                  navigate("discover");
                }}
                className={styles.explore}
              >
                Explore
              </button>
              <button
                onClick={() => {
                  if (user && user.image) {
                    navigate("/create");
                  }
                  if (account && !user?.image) {
                    toast.error("Profile is not complete!");
                    navigate("/edit-profile");
                  }
                  if (!account) {
                    toast.error("Wallet not Connected!");
                    // setShowConnectOptions(true);
                  } else {
                  }
                }}
                className={styles.create}
              >
                Create
              </button>
            </div>
            <a className={styles.learn} href="#vid">
              <AiFillPlayCircle />
              Learn More about Africeum
            </a>
          </div>
          {/* <div className={styles.image}>
            <img src="/africeummain.png"/>
            <div className={styles.info}>
              <div className={styles.credit}>
                <img src="/africeummain.png"/>
                <div className={styles.name}>
                  <p>Kimono</p>
                  <p>Lisaodt</p>
                </div>
              </div>
              <GrCircleInformation />
            </div>
          </div> */}
        </div>
        {/* <a className={styles.learn} href="#vid">
          <AiFillPlayCircle />
          Learn More about Africeum
        </a> */}
      </div>
      {/* {showConnectOptions && (
          <Backdrop>
            <ConnectModal
              login={login}
              onDismiss={() => setShowConnectOptions(false)}
            />
          </Backdrop>
        )} */}
    </div>
  );
};

export default Hero;
