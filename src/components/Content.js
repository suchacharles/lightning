import Custom from './Lightning/Custom.js'

export default {
    name: 'Content',
    components: {
        Custom
    },
    template: `
<div class="lightningContent">

<div class="flex mb-4">
  <div class="w-1/2 mx-8">

<div class="max-w-sm rounded overflow-hidden bg-accent-1 border border-accent-2">
  <div class="px-6 py-4">
    <div class="font-bold text-2xl mb-2">Minecraft</div>
    <p class="text-gray-700 text-base">
      Start porting for Minecraft Java or Bedrock servers.
    </p>
  </div>
  <div class="flex px-6 pt-4 pb-2">
    <div class="w-1/2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">25565</span>
      <button class="w-11/12 float-left font-semibold py-2 px-4 rounded border bg-black text-white hover:bg-white hover:text-black hover:border-black" onclick="lightning('Minecraft Java', 25565);">Java</button>
    </div>
    <div class="w-1/2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 float-right">19132</span>
      <button class="w-11/12 float-right font-semibold py-2 px-4 rounded border bg-black text-white hover:bg-white hover:text-black hover:border-black" onclick="lightning('Minecraft Bedrock', 19132);">Bedrock</button>
    </div>
  </div>
</div>

  </div>

  <div class="w-1/2 mx-8">
    <Custom />
  </div>

</div>

</div>
    `
}