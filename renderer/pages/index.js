import { useState, useEffect } from 'react'
import Head from 'next/head'
import Notification from '../components/notification'
import Modal from '../components/modal'
import Footer from '../components/footer'
import Content from '../components/content'
import ControlPanel from '../components/controlpanel'

const Home = () => {
  const [input, setInput] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const handleMessage = (event, message) => setMessage(message)
    window.electron.message.on(handleMessage)

    return () => {
      window.electron.message.off(handleMessage)
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    window.electron.message.send(input)
    setMessage(null)
  }

  return (
    <>
      <Head>
        <title>Lightning</title>
      </Head>

      <Notification />

      <Modal />

      <Content />

      <ControlPanel />

      {/* <div>
        <h1 className="text-3xl font-bold underline">Hello Electron!</h1>

        {message && <p>{message}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
        </form>
      </div> */}

      <Footer />
    </>
  )
}

export default Home
