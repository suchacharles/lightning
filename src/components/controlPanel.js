export default {
    name: 'controlPanel',
    template: `
<div id="controlpanel" style="display: none;">

<div class="rounded overflow-hidden shadow-lg mx-8 my-8">
  <div class="px-6 py-4">

    <div class="flex">
      <div class="w-2/3">
        <h3 class="text-lg font-semibold leading-tight text-gray-800" id="cp-title">Disconnected</h3>
        <div class="text-base text-gray-600 leading-normal" id="cp-link">There are currently no active connections open.</div>
      </div>
      <div class="w-1/3">
        <a href="http://localhost:4040/status" target="_blank">
          <button class="bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded">Inspect</button>
        </a>
        <button class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded float-right" onclick="disconnect();">Disconnect</button>
      </div>
    </div>

  </div>
</div>

</div>
    `
}