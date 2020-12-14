export default {
    name: 'Notification',
    template: `
<div class="lightningNotification">

<div class="text-white px-6 py-4 border-0 rounded absolute top-0 left-48 shadow-xl bg-indigo-500 mx-8 my-4" onclick="closeNotification()" id="notification" style="display: none;">
  <span class="text-xl inline-block mr-5 align-middle">
    <i class="fas fa-bolt" />
  </span>
  <span class="inline-block align-middle mr-8">
    <b class="capitalize"><span class="notification-title" id="notification-title"></span></b> Port Successfully Created!
  </span>
</div>

</div>
    `
}