// Import GLB files so Parcel can process them with proper hashing
import mathModel from "/assets/models/gltf/math.glb";
import jenningsModel from "/assets/models/gltf/jennings_lo.glb";
import questionmarkModel from "/assets/models/gltf/questionmark.glb";

// Map original paths to hashed paths
const modelMap = new Map([
  ['/assets/models/gltf/math.glb', mathModel],
  ['/assets/models/gltf/jennings_lo.glb', jenningsModel],
  ['/assets/models/gltf/questionmark.glb', questionmarkModel]
]);

// Function to update all three-d-model elements with correct URLs
function updateModelUrls() {
  const elements = document.querySelectorAll('three-d-model[link]');
  elements.forEach(element => {
    const originalUrl = element.getAttribute('link');
    if (originalUrl && modelMap.has(originalUrl)) {
      const hashedUrl = modelMap.get(originalUrl);
      element.setAttribute('link', hashedUrl);
    }
  });
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateModelUrls);
} else {
  updateModelUrls();
}
