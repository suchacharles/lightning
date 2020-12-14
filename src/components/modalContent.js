import Auth from './Modal/Auth.js'
import Region from './Modal/Region.js'
import About from './Modal/About.js'
import Help from './Modal/Help.js'
import Donate from './Modal/Donate.js'

export default {
  name: 'modalContent',
  components: {
    Auth,
    Region,
    About,
    Help,
    Donate
  },
  data: function () {
    return {
      modalItem: 'auth'
    }
  },
  template: `
<div>

<ul class="flex mb-4 text-indigo-500">
  <li class="flex-1 mr-2">
    <a class="text-center block border border-white rounded hover:border-gray-200 hover:bg-gray-200 py-2 px-4" href="#" v-on:click="modalItem = 'auth'" v-bind:class="{ 'border-indigo-500 bg-indigo-500 hover:bg-indigo-700 text-white': modalItem == 'auth' }">Auth</a>
  </li>
  <li class="flex-1">
    <a class="text-center block border border-white rounded hover:border-gray-200 hover:bg-gray-200 py-2 px-4" href="#" v-on:click="modalItem = 'region'" v-bind:class="{ 'border-indigo-500 bg-indigo-500 hover:bg-indigo-700 text-white': modalItem == 'region' }">Region</a>
  </li>
  <!--
  <li class="text-center flex-1">
    <a class="block py-2 px-4 text-gray-400 cursor-not-allowed" href="#">Disabled Item</a>
  </li>
  -->
</ul>

<div v-show="modalItem == 'auth'">
  <Auth />
</div>
<div v-show="modalItem == 'region'">
  <Region />
</div>

</div>
    `
}