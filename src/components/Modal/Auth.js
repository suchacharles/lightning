export default {
    name: 'Auth',
    data: function () {
        return {
            auth: ''
        }
    },
    mounted() {
        if (localStorage.auth) {
            this.auth = localStorage.auth;
        }
    },
    watch: {
        auth(newAuth) {
            localStorage.auth = newAuth;
        }
    },
    template: `
<div>

<input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" placeholder="Authentication Token" v-model="auth" v-bind:class="{ 'is-success': auth.length == 48, 'is-danger': auth.length < 48 }">

<p class="text-sm leading-5 text-gray-500">The auth token can be found at <a href="https://ngrok.com" target="_blank" class="no-underline hover:underline text-indigo-500">ngrok.com</a>.</p>

</div>
    `
}
