export default {
  name: 'Custom',
  data: function () {
    return {
      port: ''
    }
  },
  mounted() {
    if (localStorage.port) {
      this.port = localStorage.port;
    }
  },
  watch: {
    port(newPort) {
      localStorage.port = newPort;
    }
  },
  template: `
<div>

  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <div class="font-bold text-2xl mb-2">Custom</div>
      <p class="text-gray-700 text-base">
        Create a custom port.
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <!-- <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ port }}</span> -->

      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Port" v-model="port">

    </div>
    <div class="px-6 pt-4 pb-2">
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-4" onclick="lightning('Custom', localStorage.getItem('port'));">Port</button>
    </div>
  </div>

</div>
    `
}