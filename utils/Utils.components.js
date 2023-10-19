const loadModule = (moduleId, filePath) => {
  fetch(filePath)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(moduleId).innerHTML = html;
    })
    .catch((err) => {
      console.error("failed to load module", err);
    });
};

loadModule("componentHeroSection", "modules/Modules.HeroSection.html");
loadModule("componentDoubleSection1", "modules/Modules.DoubleSection1.html");
loadModule(
  "componentFollowingSection",
  "/modules/Modules.FollowingSection.html"
);
