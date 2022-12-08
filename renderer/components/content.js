import { useEffect, useState } from 'react'
// import { Ngrok } from 'ngrok'

const Content = () => {
  return (
    <div className="lightningContent">
      <div className="flex mb-4">
        <div className="w-1/2 mx-8">
          <div className="max-w-sm rounded overflow-hidden bg-accent-1 border border-accent-2">
            <div className="px-6 py-4">
              <div className="font-bold text-2xl mb-2">Minecraft</div>
              <p className="text-gray-700 text-base">
                Start porting for Minecraft Java or Bedrock servers.
              </p>
            </div>
            <div className="flex px-6 pt-4 pb-2">
              <div className="w-1/2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  25565
                </span>
                <button
                  className="w-11/12 float-left font-semibold py-2 px-4 rounded border bg-black text-white hover:bg-white hover:text-black hover:border-black"
                  //! onClick={() => lightning('Minecraft Java', 25565)}
                >
                  Java
                </button>
              </div>
              <div className="w-1/2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 float-right">
                  19132
                </span>
                <button
                  className="w-11/12 float-right font-semibold py-2 px-4 rounded border bg-black text-white hover:bg-white hover:text-black hover:border-black"
                  //! onClick="lightning('Minecraft Bedrock', 19132);"
                >
                  Bedrock
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 mx-8">
          <Custom />
        </div>
      </div>
    </div>
  )
}

export default Content

const Custom = () => {
  let [port, setPort] = useState('')

  useEffect(() => {
    if (localStorage.port) {
      setPort(localStorage.port)
    }
  }, [port])

  console.log(port)

  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden bg-accent-1 border border-accent-2">
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">Custom</div>
          <p className="text-gray-700 text-base">Create a custom port.</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {/* <!-- <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ port }}</span> --> */}

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Port"
            value={port}
            onInput={(e) => setPort(e.target.value)}
            onChange={(e) => localStorage.setItem('port', e.target.value)}
          />
        </div>
        <div className="px-6 pt-4 pb-2">
          <button
            className="w-full font-semibold py-2 px-4 rounded border bg-black text-white hover:bg-white hover:text-black hover:border-black"
            onClick="lightning('Custom', localStorage.getItem('port'));"
          >
            Port
          </button>
        </div>
      </div>
    </div>
  )
}
