export default {
    name: 'Notification',
    template: `
<div class="lightningNotification">

<div class="text-white px-6 py-4 mt-8 border-0 rounded absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl bg-indigo-500 my-4" onclick="closeNotification()" id="notification" style="display: none;">
  <span class="text-xl inline-block mr-5 align-middle">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
    </svg>
  </span>
  <span class="inline-block align-middle mr-8">
    <b class="capitalize"><span class="notification-title" id="notification-title"></span></b> Port Successfully Created!
  </span>
</div>

</div>
    `
}