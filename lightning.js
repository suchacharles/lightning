const ngrok = require('ngrok');
const {
    clipboard
} = require('electron');

function lightning(lightningName, lightningAddr) {

    ngrok.disconnect();
    ngrok.kill();

    notify(lightningName);

    var lightningAuthtoken = localStorage.getItem('auth');
    var lightningRegion = localStorage.getItem('region');

    (async function () {
        const url = await ngrok.connect({
            proto: 'tcp',
            addr: lightningAddr,
            authtoken: lightningAuthtoken,
            region: lightningRegion,
            binPath: path => path.replace('app.asar', 'app.asar.unpacked'),
        });

        var cleanURL = url.replace('tcp://', '');
        clipboard.writeText(cleanURL);

        document.getElementById('controlpanel').style.display = "block";
        document.getElementById('cp-title').innerHTML = lightningName + lightningAddr + lightningRegion;
        document.getElementById('cp-link').innerHTML = cleanURL + " was copied to your clipboard.";

    })();

}

// Disconnect
function disconnect() {
    ngrok.disconnect();
    ngrok.kill();

    setTimeout(function () {
        document.getElementById('controlpanel').style.display = "none";
    }, 2000);

    document.getElementById('cp-title').innerHTML = "Disconnected";
    document.getElementById('cp-link').innerHTML = "There are currently no active connections open.";
}