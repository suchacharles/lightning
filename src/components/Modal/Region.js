export default {
    name: 'Region',
    data: function () {
        return {
            region: '',
            regionDropdown: false
        }
    },
    mounted() {
        if (localStorage.region) {
            this.region = localStorage.region;
        }
    },
    watch: {
        region(newRegion) {
            localStorage.region = newRegion;
        }
    },
    template: `
<div>

<div class="relative inline-block text-left h-64">
  <div>
    <span class="rounded-md shadow-sm">
      <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150" id="options-menu" aria-haspopup="true" aria-expanded="true" v-on:click="regionDropdown = !regionDropdown">
        Region <span class="font-bold uppercase ml-2">{{ region }}</span>
        <svg class="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </span>
  </div>

  <!--
    Dropdown panel, show/hide based on dropdown state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
  <div class="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg block" v-bind:class="{ 'hidden': regionDropdown }">
    <div class="rounded-md bg-white shadow-xs">
      <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem" v-on:click="region = 'us'" v-bind:class="{ 'is-active': region == 'us' }">United States</a>
        <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem" v-on:click="region = 'eu'" v-bind:class="{ 'is-active': region == 'eu' }">Europe</a>
        <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem" v-on:click="region = 'ap'" v-bind:class="{ 'is-active': region == 'ap' }">Asia/Pacific</a>
        <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem" v-on:click="region = 'au'" v-bind:class="{ 'is-active': region == 'au' }">Australia</a>
        <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem" v-on:click="region = 'sa'" v-bind:class="{ 'is-active': region == 'sa' }">South America</a>
        <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem" v-on:click="region = 'jp'" v-bind:class="{ 'is-active': region == 'jp' }">Japan</a>
        <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem" v-on:click="region = 'in'" v-bind:class="{ 'is-active': region == 'in' }">India</a>
      </div>
    </div>
  </div>
</div>

<p class="text-sm leading-5 text-gray-500">In order to reduce latency, please select the region closest to you.</p>


</div>
    `
}