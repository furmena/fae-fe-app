import AppBannerSignIn from "./AppBannerSignIn";
import AppBannerLogo from "./AppBannerLogo";

function AppBanner() {
  return (
    <div className="app-banner flex-row">
      <AppBannerLogo />
      <AppBannerSignIn />
    </div>
  );
}

export default AppBanner;
