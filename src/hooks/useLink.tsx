import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getChainExplorerLink } from "../utils/helper";

const useLink = () => {
  const navigate = useNavigate();

  const linkToUser = useCallback(
    (user) => {
      if (user && user?.username) {
        // navigate("/empty");
        navigate(`/profile/${user?.username}`, { replace: true });
      }
    },
    [navigate]
  );

  const linkToItem = useCallback(
    (item) => {
      if (item) {
        // navigate("/empty");
        navigate(`/discover/${item?.id}`, { replace: true });
      }
    },
    [navigate]
  );

  const linkToCollection = useCallback(
    (address) => {
      if (address) {
        window.open(getChainExplorerLink(address, "address"), "_blank");
      }
    },
    [navigate]
  );

  const linkToIPFS = useCallback(
    (item) => {
      if (item) {
        window.open(item?.uri, "_blank");
      }
    },
    [navigate]
  );

  return { linkToUser, linkToItem, linkToCollection, linkToIPFS };
};

export default useLink;
