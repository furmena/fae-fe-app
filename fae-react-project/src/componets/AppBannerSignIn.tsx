function CheckIfSignedIn() {
  return 0;
  // one = signed in
  // zero = not signed in
  // login is fucked refactor nesscary
}
var username: string = "ExampleUsername";
var buttonClickCounter: number = 0;

function OnButtonClick() {
  alert(
    "the button has been clicked " + String(buttonClickCounter) + " time(s)"
  );
  buttonClickCounter++;
}

function AppBannerSignIn() {
  if (CheckIfSignedIn() == 1) {
    return (
      <div className="flex-row app-banner-right">
        <button onClick={OnButtonClick}>{username}</button>
        <img src="../../fae-logo.svg" alt={String(username)} />
      </div>
    );
  } else {
    return (
      <div className="flex-row app-banner-right">
        <a href="https://google.com" target="_blank">
          <p>
            <button>Sign in</button>
          </p>
        </a>
      </div>
    );
  }
}

export default AppBannerSignIn;
