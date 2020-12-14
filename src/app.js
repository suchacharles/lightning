import Notification from './components/Notification.js'
import controlPanel from './components/controlPanel.js'
import Modal from './components/Modal.js'
import Header from './components/Header.js'
import Content from './components/Content.js'
import Footer from './components/Footer.js'

var app = new Vue({
    el: '#app',
    components: {
        Notification,
        controlPanel,
        Modal,
        Header,
        Content,
        Footer
    },
    template: `
    <div>
        <Notification />
        <Modal />
        <Header />
        <Content />
        <controlPanel />
        <Footer />
    </div>
    `
})