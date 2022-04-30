import { DefaultArt, DefaultAvatar } from '../../config/constants';
import useAuctionDuration from '../../hooks/useAuctionDuration';
import { useCoverBg } from '../../hooks/useCoverBg';
import useLikeButton from '../../hooks/useLikeButton';
import useLink from '../../hooks/useLink';
import { AssetType, NFTModel } from '../../types/types'
import { assetType, formatPrice, getSymbolFromAddressOrId } from '../../utils/helper';

const ItemCard = ({ nft, token = false }: any) => {
    
    const {id,  name, auctionable, price, currencyObj, likes, image, type, user, selfLiked, startTime, endTime } = nft;
    const {status, statusInfo, state} = useAuctionDuration(auctionable ? startTime : 0, auctionable ? endTime : 0)
    const { didLike, localLikeCount, like } = useLikeButton(nft)
    const { linkToItem, linkToUser } = useLink()

    const userBg = useCoverBg(user?.image || DefaultAvatar);
    const coverBg = useCoverBg(image);
    const defaultBg = useCoverBg(DefaultArt)

    return (
        <div key={nft?.id} style={{ minWidth: '292px' }} className="w-full mr-8 cursor-pointer roadmapb active rounded-3xl shadow-nftShadow md:max-w-xs hover:opacity-80">
            <div onClick={() => { if(nft?.id) linkToItem(nft) }} >
            {assetType(type) == AssetType.NONE && <div className="flex items-center mx-4 rounded-3xl h-72" ></div> }
            {assetType(type) == AssetType.IMAGE && <div className="flex items-center rounded-3xl h-72" style={coverBg}></div> }
            {assetType(type) == AssetType.AUDIO && <div className="flex items-center rounded-3xl h-72">
                <audio controls>
                    <source src={image} type="audio/ogg" />
                    <source src={image} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div> }
            {assetType(type) == AssetType.VIDEO && <div className="flex items-center rounded-3xl h-72">
                <video
                    width="100%"
                    autoPlay
                    controls
                    muted
                    preload="metadata"
                >
                    <source src={`${image}#t=0.5`} type="video/mp4" />
                    <source src={`${image}#t=0.5`} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            </div> }
            </div>
            <div className="px-5 mt-4">
                <h3 className="text-lg font-bold text-left" onClick={() => {  if(nft?.id) linkToItem(nft) }} >{name}</h3>
                {!token && <div className="flex items-center py-3" onClick={() => linkToUser(user)}>
                    <div className="w-6 h-6 mr-2 rounded-full" style={userBg}></div>
                    <p className="text-gray-900">@{user?.username || 'artist'}</p>
                </div>}
            </div>
            {!token && <div className="flex justify-between px-5 pb-5 font-bold">
                <p className="text-gray-900">{formatPrice(price, nft.currency)}</p>
                {auctionable && <p className="text-br-tertiary">{state?.days}d {state?.hours}h {state?.minutes}m {state?.seconds}s</p>}
                <div className="flex items-center" onClick={() => {if(id) like()}}>
                    {didLike ? <img src="/love_liked.svg" alt="favourite count" width="17px" height="15px" />
                        : <img src="/love.svg" alt="favourite count" width="17px" height="15px" />}
                    <p className="ml-1 text-gray-900">{localLikeCount}</p>
                </div>
            </div>}
        </div>
    )
}

export default ItemCard
