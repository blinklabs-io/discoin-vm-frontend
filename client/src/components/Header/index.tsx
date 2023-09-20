// import BlockchainSelector from "src/components/BlockchainSelector";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logoDark from "src/assets/discoin.png";
import logoLight from "src/assets/discoin.png";
import { Blockchain, Themes } from "src/entities/common.entities";
import { toggleMenu, toggleTheme } from "src/reducers/globalSlice";
import { RootState } from "src/store";
import Banner from "../Banner";
import BlockchainSelector from "../BlockchainSelector";
import CardanoWalletSelector from "../WalletSelector/CardanoWalletSelector";
import ErgoWalletSelector from "../WalletSelector/ErgoWalletSelector";

function Header() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.global.theme);
  const chain = useSelector((state: RootState) => state.global.chain);
  const connectedWallet = useSelector(
    (state: RootState) => state.wallet.walletApi
  );

  const RenderWalletConnector = useCallback(() => {
    switch (chain) {
      case Blockchain.cardano:
        return <CardanoWalletSelector></CardanoWalletSelector>;
      case Blockchain.ergo:
        return <ErgoWalletSelector></ErgoWalletSelector>;
    }
  }, [connectedWallet]);

  return (
    <>
      <Banner></Banner>

      {/* Web header */}
      <div className="flex-row items-center max-w-8xl w-full p-5 pb-0 hidden sm:flex">
        <Link to="/">
          <div className="flex-row flex">
            <img
              src={theme === Themes.dark ? logoDark : logoLight}
              className="h-10 logo"
              alt="discoin logo"
            ></img>
            <div className="m-auto ml-5 text-4xl">discoin claims</div>
          </div>
        </Link>
        <div className="flex flex-row gap-4 items-center ml-auto">
          {/* No blockchain selector <BlockchainSelector isMobile={false}></BlockchainSelector> */}
          <RenderWalletConnector></RenderWalletConnector>
          {/* No theme selector <button
            className="background rounded-lg px-5 py-2.5"
            onClick={() => dispatch(toggleTheme())}
          >
            <FontAwesomeIcon icon={theme === Themes.dark ? faSun : faMoon} />
          </button> */}
        </div>
      </div>

      {/* Mobile header */}
      <div className="w-full flex flex-row items-center justify-center p-5 pb-0 h-fit sm:hidden">
        <div className="flex flex-row items-center mr-auto w-14">
          <button
            className="background rounded-lg py-2.5 w-full"
            onClick={() => dispatch(toggleMenu())}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className="flex-row flex">
          <img
            src={theme === Themes.dark ? logoDark : logoLight}
            className="h-10 logo"
            alt="discoin logo"
          ></img>
          <div className="m-auto mr-2.5 text-4xl">discoin claims</div>
        </div>
        <div className="w-14 h-full ml-auto">
          {/* No blockchain selector <BlockchainSelector isMobile={true}></BlockchainSelector> */}
        </div>
      </div>
    </>
  );
}

export default Header;
