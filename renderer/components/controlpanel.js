// const ngrok = require('ngrok')

const ControlPanel = () => {
  //   function disconnect() {
  //     ngrok.disconnect()
  //     ngrok.kill()

  //     setTimeout(function () {
  //       document.getElementById('controlpanel').style.display = 'none'
  //     }, 2000)

  //     document.getElementById('cp-title').innerHTML = 'Disconnected'
  //     document.getElementById('cp-link').innerHTML =
  //       'There are currently no active connections open.'
  //   }

  return (
    <div
      id="controlpanel"
      //!style={{ display: 'none' }}
    >
      <div className="rounded overflow-hidden shadow-lg mx-8 my-8">
        <div className="px-6 py-4">
          <div className="flex">
            <div className="w-2/3">
              <h3
                className="text-lg font-semibold leading-tight text-gray-800"
                id="cp-title"
              >
                Disconnected
              </h3>
              <div
                className="text-base text-gray-600 leading-normal"
                id="cp-link"
              >
                There are currently no active connections open.
              </div>
            </div>
            <div className="w-1/3">
              <a href="http://localhost:4040/status" target="_blank">
                <button className="bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded">
                  Inspect
                </button>
              </a>
              <button
                className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded float-right"
                //! onClick={() => disconnect()}
              >
                Disconnect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ControlPanel
