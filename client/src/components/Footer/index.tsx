import version from "src/version";

const Footer = () => {
  return (
    <div className="mt-auto w-full flex flex-col items-center opacity-50 p-5 text-xxs sm:text-sm">
      <div className="break-all text-center">
        discoin: <a href="https://cexplorer.io/policy/5612bee388219c1b76fd527ed0fa5aa1d28652838bcab4ee4ee63197">
                 5612bee388219c1b76fd527ed0fa5aa1d28652838bcab4ee4ee63197
                 </a>
      </div>
      <div className="break-all text-center">UI version: {version}</div>
      <div className="break-all text-center">Powered by: <a href="https://blinklabs.io">Blink Labs</a></div>
    </div>
  );
};

export default Footer;
