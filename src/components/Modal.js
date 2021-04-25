import modalContent from './modalContent.js'

export default {
  name: 'Modal',
  components: {
    modalContent
  },
  data: function () {
    return {
      modal: false
    }
  },
  template: `
<div>

<div class="flex mb-4">
  <div class="w-3/4">

    <div class="max-w-screen-xl mx-4 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Lightning
        <br>
        <span class="text-gray-300">A port forwarding utility.</span>
      </h2>
    </div>

  </div>

  <div class="w-1/4 mx-auto py-12 px-4">

  <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0 mx-4">
  <span class="inline-flex rounded-md shadow-sm">
    <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true" v-on:click="modal = !modal" v-bind:class="{ 'is-active': modal }">
      <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </span>
  </div>

  </div>
</div>




<!-- New Modal -->

<div class="fixed z-10 inset-0 overflow-y-auto" v-if="modal" v-bind:class="{ 'is-active': modal }">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

    <div class="fixed inset-0 transition-opacity" v-on:click="modal = !modal">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mt-3 sm:mt-0 sm:mx-4 sm:text-left w-full">
            <modalContent />
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <!--
        <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
          <button type="button" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5">
            Deactivate
          </button>
        </span>
        -->
        <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
          <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5" v-on:click="modal = !modal">
            Close
          </button>
        </span>
      </div>
    </div>
  </div>


</div>


</div>
    `
}