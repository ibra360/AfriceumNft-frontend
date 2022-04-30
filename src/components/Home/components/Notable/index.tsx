import styles from "./index.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";
import useItems from "../../../../hooks/useItems";
import useLink from "../../../../hooks/useLink";
import { assetType } from "../../../../utils/helper";
import { AssetType } from "../../../../types/types";
import { useCoverBg } from "../../../../hooks/useCoverBg";
import { DefaultArt } from "../../../../config/constants";

const Notable = () => {
  const [fetchParams, setFetchParams] = useState({
    sortBy: "views",
    sortDir: "desc",
    page: 0,
    perPage: 24,
  });
  const { items, hasMore } = useItems(fetchParams);

  const { linkToItem, linkToUser } = useLink();
  const defaultBg = useCoverBg(DefaultArt);
  return (
    <div className={styles.container}>
      <p className={styles.notable}>Notable Drops</p>
      <Splide
        className={styles.splide}
        options={{
          rewind: true,
          gap: "0.5rem",
          perPage: 3,
          perMove: 1,
          type: "slide",
          breakpoints: {
            1200: {
              perPage: 2,
            },
            815: {
              gap: 0,
              perPage: 1,
              arrows: false,
            },
          },
          classes: {
            pagination: `splide__pagination ${styles.pagination}`,
          },
        }}
      >
        {items.map((nft, index) => {
          return (
            <SplideSlide key={index}>
              <div
                className={styles.card}
                onClick={() => {
                  if (nft?.id) linkToItem(nft);
                }}
              >
                <div className={styles.shadow}>
                  <div className="thumb relative pb-[100%] flex overflow-hidden">
                    {assetType(nft.type) == AssetType.NONE && (
                      <div
                        className="flex items-center mx-4 rounded-3xl h-72"
                        style={defaultBg}
                      ></div>
                    )}
                    {assetType(nft.type) == AssetType.IMAGE && (
                      <img
                        className="absolute top-0 left-0 object-cover w-full"
                        src={nft.image || DefaultArt}
                        alt="card-media"
                      />
                    )}
                    {assetType(nft.type) == AssetType.AUDIO && (
                      <div className="flex items-center rounded-3xl h-72">
                        <audio controls>
                          <source src={nft.image} type="audio/ogg" />
                          <source src={nft.image} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    )}
                    {assetType(nft.type) == AssetType.VIDEO && (
                      <video
                        // width="100%"
                        className="absolute top-0 left-0 w-full h-full"
                        autoPlay
                        controls
                        muted
                        preload="metadata"
                        loop
                        playsInline
                        controlsList="nodownload"
                        disablePictureInPicture
                      >
                        <source src={`${nft.image}#t=0.5`} type="video/mp4" />
                        <source src={`${nft.image}#t=0.5`} type="video/ogg" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>

                  {/* <img src={nft.image} /> */}
                  <div
                    className={styles.info}
                    style={{ background: "rgb(87, 94, 149)" }}
                  >
                    <p>{nft.name}</p>
                    <p>{nft.user?.fullname}</p>
                    <p className={styles.live}>Live</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          );
        })}

        {/* <SplideSlide>
          <div className={styles.card}>
            <div className={styles.shadow}>
              <img src="https://storage.opensea.io/static/promocards/cameo-promocard.jpeg" />
              <div className={styles.info} style={{ background: "rgb(87, 94, 149)" }}>
                <p>Cameo Pass</p>
                <p>Art.Community.Events.</p>
                <p className={styles.live}>Live</p>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.card}>
            <div className={styles.shadow}>
              <img src="https://storage.opensea.io/static/promocards/watermagic-promocard.jpeg" />
              <div className={styles.info} style={{ background: "rgb(225, 180, 151)" }}>
                <p>water magic</p>
                <p>follow the feathers to uncover old ghosts</p>
                <p className={styles.live}>Live</p>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.card}>
            <div className={styles.shadow}>
              <img src="https://storage.opensea.io/static/promocards/metascapes-promocard.jpeg" />
              <div className={styles.info} style={{ background: "rgb(0, 51, 74)" }}>
                <p>The Metascapes</p>
                <p>Cath Simard x Ryan Newburn x lurie Belegurschi x Al</p>
                <p className={styles.live}>Live</p>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.card}>
            <div className={styles.shadow}>
              <img src="https://storage.opensea.io/static/promocards/thekiss-promocard3.jpeg" />
              <div className={styles.info} style={{ background: "rgb(216, 143, 138)" }}>
                <p>The Kiss</p>
                <p>An art collection generated entirely by the smart contract code</p>
                <p className={styles.live}>Live</p>
              </div>
            </div>
          </div>
        </SplideSlide> */}
      </Splide>
    </div>
  );
};

export default Notable;
