const loadModule = (moduleId, filePath) => {
  return new Promise((resolve, reject) => {
    fetch(filePath)
      .then((response) => response.text())
      .then((html) => {
        document.getElementById(moduleId).innerHTML = html;
        resolve();
      })
      .catch((err) => {
        console.error("failed to load module", err);
        reject(err);
      });
  });
};

Promise.all([
  loadModule("componentHeroSection", "modules/Modules.HeroSection.html"),
  loadModule("componentDoubleSection1", "modules/Modules.DoubleSection1.html"),
  loadModule(
    "componentFollowingSection",
    "modules/Modules.FollowingSection.html"
  ),
  loadModule(
    "componentCarouselSection1",
    "modules/Modules.CarouselSection1.html"
  ),
  loadModule("componentSalesSection", "modules/Modules.SalesSections.html"),
  loadModule("componentDetailsSection1", "modules/Modules.DetailsSection.html"),
  loadModule(
    "componentDetailsSection2",
    "modules/Modules.DetailsSection2.html"
  ),
  loadModule("componentStatsSection1", "/modules/Modules.StatsSection1.html"),
  loadModule(
    "componentPartnersSection",
    "/modules/Modules.PartnersSection.html"
  ),
])
  .then(() => {
    $(document).ready(function () {
      $(".carousel").carousel();
    });
  })
  .catch((err) => {
    console.log("failed module import", err);
    $(document).ready(function () {
      console.log("i should run");
      $(".carousel").carousel();
    });
  });

// const loadModule = (moduleId, filePath) => {
//   fetch(filePath)
//     .then((response) => response.text())
//     .then((html) => {
//       document.getElementById(moduleId).innerHTML = html;
//     })
//     .catch((err) => {
//       console.error("failed to load module", err);
//     });
// };

// Promise.all([
//   loadModule("componentHeroSection", "modules/Modules.HeroSection.html"),
//   loadModule("componentDoubleSection1", "modules/Modules.DoubleSection1.html"),
//   loadModule(
//     "componentFollowingSection",
//     "/modules/Modules.FollowingSection.html"
//   ),
//   loadModule(
//     "componentCarouselSection1",
//     "/modules/Modules.CarouselSection1.html"
//   ),
// ]).then(() => {
//   $(document).ready(function () {
//     $(".carousel").carousel();
//   });
// });
