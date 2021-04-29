let linksApps = document.querySelectorAll(".img-apps img");
let toGoLinks = [
  "https://apps.apple.com/app/instagram/id389801252?vt=lo",
  "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=2040CDD3-9F75-43CF-8FB4-DCFDBF50A915&utm_content=lo&utm_medium=badge",
];

for (let i = 0; i < 2; i++) {
  linksApps[i].onclick = () => {
    window.open(toGoLinks[i], "_blank");
  };
}