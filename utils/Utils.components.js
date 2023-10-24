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
  loadModule("componentBannerSection", "/modules/Modules.BannerSection.html"),
  loadModule("componentReviewsSection", "/modules/Modules.ReviewsSection.html"),
  loadModule(
    "componentDetailsSection3",
    "/modules/Modules.DetailsSection3.html"
  ),
  loadModule("componentBannerSection2", "/modules/Modules.BannerSection2.html"),
  loadModule(
    "componentDetailsSection4",
    "/modules/Modules.DetailsSection4.html"
  ),
  loadModule(
    "componentDetailsSection5",
    "/modules/Modules.DetailsSection5.html"
  ),
  loadModule("componentNotesSection", "/modules/Modules.NotesSection.html"),
  loadModule("componentVideoSection", "/modules/Modules.VideoSection.html"),
  loadModule(
    "componentDetailsSection6",
    "/modules/Modules.DetailsSection6.html"
  ),
  loadModule("componentPodcastSection", "/modules/Modules.PodcastSection.html"),
  loadModule(
    "componentPodcastSection2",
    "/modules/Modules.PodcastSection2.html"
  ),
  loadModule("componentBookSection", "/modules/Modules.BookSection.html"),
  loadModule("componentFaqSection", "/modules/Modules.FaqSection.html"),
  loadModule(
    "componentPartnersSection2",
    "/modules/Modules.PartnersSection2.html"
  ),
])
  .then(() => {
    $(document).ready(function () {
      $(".carousel").carousel();
      $(".parallax").parallax();
      $(".carousel.carousel-slider").carousel({
        fullWidth: true,
      });
      $(".collapsible").collapsible();
      $(".scrollspy").scrollSpy();
    });
  })
  .catch((err) => {
    console.log("failed module import", err);
    $(document).ready(function () {
      $(".carousel").carousel();
      $(".parallax").parallax();
      $(".carousel.carousel-slider").carousel({
        fullWidth: true,
      });
      $(".collapsible").collapsible();
      $(".scrollspy").scrollSpy();
    });
  });
