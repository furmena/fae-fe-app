import AppBannerSignIn from "./AppBannerSignIn";

function AppBanner() {
  return (
    <div className="app-banner flex-row">
      <div className="flex-row app-banner-left">
        <h1>Fae</h1>
        <img src="../../fae-logo.svg" alt="fae-logo" />
      </div>
      <AppBannerSignIn />
    </div>
  );
}

export default AppBanner;
