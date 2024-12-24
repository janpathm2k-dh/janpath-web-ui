<template>
  <div class="h-screen bg-skin-base sm:h-[26rem]" data-testid="address-modal">
    <div class="sticky z-[1000] flex w-full justify-between bg-skin-base p-3 shadow">
      <button aria-label="Back button" class="sm:hidden">
        <svg fill="none" height="24" style="height: 1.5rem; width: 1.5rem; color: black;" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5 19L8.5 12L15.5 5" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path>
        </svg>
      </button>
      <p class="block font-heading text-lg tracking-wide w-full text-center">Your Location</p>
      <button aria-label="Location modal close Icon" class="absolute right-2 hidden sm:block">
        <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill="#130022" fill-opacity="0.4" fill-rule="evenodd"
                d="M15.75 9C15.75 12.7279 12.7279 15.75 9 15.75C5.27208 15.75 2.25 12.7279 2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9ZM5.46967 12.5303C5.17678 12.2374 5.17678 11.7626 5.46967 11.4697L7.93934 9L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L9 7.93934L11.4697 5.46967C11.7626 5.17678 12.2374 5.17678 12.5303 5.46967C12.8232 5.76256 12.8232 6.23744 12.5303 6.53033L10.0607 9L12.5303 11.4697C12.8232 11.7626 12.8232 12.2374 12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303L9 10.0607L6.53033 12.5303C6.23744 12.8232 5.76256 12.8232 5.46967 12.5303Z">
          </path>
        </svg>
      </button>
    </div>

    <div class="relative mb-8 !overflow-hidden p-4">
      <div data-testid="address-search-input">
        <div class="w-full relative text-base text-skin-inverted flex bg-white items-center border rounded-md mb-4 !border-skin-primary-dark !bg-skin-primary-dark/5 !border-opacity-[0.15] !mb-0">
          <span class="left-0 pl-3.5">
            <svg fill="none" height="0.9rem" viewBox="0 0 15 15" width="0.9rem" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill="#858585" fill-rule="evenodd"
                    d="M2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 8.98528 8.98528 11 6.5 11C4.01472 11 2 8.98528 2 6.5ZM6.5 1C3.46243 1 1 3.46243 1 6.5C1 9.53757 3.46243 12 6.5 12C9.53757 12 12 9.53757 12 6.5C12 3.46243 9.53757 1 6.5 1ZM11.2669 10.4068C11.0773 10.206 10.7609 10.1969 10.5601 10.3864C10.3593 10.576 10.3502 10.8924 10.5397 11.0932L13.1368 13.8442C13.3264 14.045 13.6428 14.0541 13.8436 13.8646C14.0444 13.675 14.0535 13.3585 13.864 13.1577L11.2669 10.4068Z">
              </path>
            </svg>
          </span>
          <input class="focus:outline-none block py-3 mx-2 appearance-none font-subtitle flex-grow font-normal bg-transparent text-md !text-sm"
                 inputmode="text" placeholder="Search a new address" type="text" value="">
        </div>
      </div>

      <div class="mt-6" data-testid="saved-address-container">
        <div class="h-16">
          <div class="flex items-start">
            <div class="mr-3 mt-1 w-5">
              <img alt="current-location-marker-icon" loading="lazy" class="relative overflow-hidden false" style="color: transparent; object-fit: contain;"
                   src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.24.0/tr:w-0.2,ar-0.2-0.2,pr-true,f-auto,q-80//images/google-map/current-location-marker-icon.svg">
            </div>
            <div>
              <h4 class="block font-heading text-lg tracking-wide mb-1 text-skin-primary">Current Location</h4>
              <h6 class="block font-subtitle text-base tracking-wider text-skin-inverted/50">Enable your current location for better services</h6>
            </div>
            <button class="py-1 px-7 text-base border-skin-primary border text-skin-primary bg-skin-base rounded-md tracking-widest ml-6 self-end !border-skin-inverted/[0.20] !py-2 !px-3 !text-xs font-bold"
                    type="button" aria-label="Enable">
              <div class="flex items-center justify-center">Enable</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddressModal",
};
</script>

<style scoped>
/* Add your styles here */
</style>
