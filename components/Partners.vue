<template>
    <div class="partners-banner-wrapper">
      <div class="partners-banner-content">
        <h2 class="partners-banner-heading">
          Dünyanın dört bir yanından 16.000'den fazla şirket ve milyonlarca öğrencinin güvendiği platform
        </h2>
        <ul class="partner-logos-list">
          <li class="partner-logo-item">
            <img
              src="https://cms-images.udemycdn.com/content/tqevknj7om/svg/volkswagen_logo.svg?position=c&quality=80&x.app=portals"
              alt="Volkswagen logo"
              loading="lazy"
            />
          </li>
          <li class="partner-logo-item">
            <img
              src="https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals"
              alt="Samsung logo"
              loading="lazy"
            />
          </li>
          <li class="partner-logo-item">
            <img
              src="https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals"
              alt="Cisco logo"
              loading="lazy"
            />
          </li>
          <li class="partner-logo-item">
            <img
              src="https://cms-images.udemycdn.com/content/ryaowrcjb2/svg/vimeo_logo_resized-2.svg?position=c&quality=80&x.app=portals"
              alt="Vimeo logo"
              loading="lazy"
            />
          </li>
          <li class="partner-logo-item">
            <img
              src="https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg?position=c&quality=80&x.app=portals"
              alt="Procter & Gamble logo"
              loading="lazy"
            />
          </li>
          <li class="partner-logo-item">
            <img
              src="https://cms-images.udemycdn.com/content/luqe0d6mx2/svg/hewlett_packard_enterprise_logo.svg?position=c&quality=80&x.app=portals"
              alt="Hewlett Packard logo"
              loading="lazy"
            />
          </li>
          <li class="partner-logo-item">
            <img
              src="https://cms-images.udemycdn.com/content/siaewwmkch/svg/citi_logo.svg?position=c&quality=80&x.app=portals"
              alt="Citi logo"
              loading="lazy"
            />
          </li>
          <li class="partner-logo-item">
            <img
              src="https://cms-images.udemycdn.com/content/swmv0okrlh/svg/ericsson_logo.svg?position=c&quality=80&x.app=portals"
              alt="Ericsson logo"
              loading="lazy"
            />
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Partner",
  };
  </script>
  
  <style scoped>
  .partners-banner-wrapper {
    background-color: #fff; 
    padding: 3.2rem 2.4rem;
    text-align: center;
  }
  
  .partners-banner-content {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .partners-banner-heading {
  color: #6a6f73;
  font-weight: 400; 
  margin-bottom: 2.4rem; 
  font-size: clamp(1.65rem, calc(1.65rem + (1.8 - 1.65) * ((100vw - 36rem) / (144 - 36))), 1.8rem); 
  max-width: 100%; 
  font-size:18px;
}

  
.partner-logos-list {
  display: grid; 
  grid-auto-flow: column; 
  justify-content: space-between; 
  align-items: center; 
  list-style-type: none; 
  padding: 0; 
  margin: 0; 
}

  
  .partner-logo-item img {
    max-height: 45px; 
    object-fit: contain;
    transition: transform 0.3s ease, filter 0.3s ease;
    filter: grayscale(100%);
  }
  
  .partner-logo-item img:hover {
    filter: none; 
    transform: scale(1.1); 
  }
  </style>
  
  