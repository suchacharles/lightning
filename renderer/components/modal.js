import { useEffect, useState } from 'react'
import { Tab, Dialog, Listbox } from '@headlessui/react'

const Modal = () => {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <ModalContent />
          <button
            onClick={() => setIsOpen(false)}
            className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
          >
            Close
          </button>
        </Dialog.Panel>
      </Dialog>

      <div className="flex mb-4">
        <div className="w-3/4">
          <div className="max-w-screen-xl mx-4 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Lightning
              <br />
              <span className="text-gray-300">A port forwarding utility.</span>
            </h2>
          </div>
        </div>

        <div className="w-1/4 mx-auto py-12 px-4">
          <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0 mx-4">
            <span className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                onClick={() => setIsOpen(true)}
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeline="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

const ModalContent = () => {
  return (
    <>
      <Tab.Group>
        <Tab.List>
          <Tab>Auth</Tab>
          <Tab>Region</Tab>
          <Tab>About</Tab>
          <Tab>Donate</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <Auth />
          </Tab.Panel>
          <Tab.Panel>
            <Region />
          </Tab.Panel>
          <Tab.Panel>
            <About />
          </Tab.Panel>
          <Tab.Panel>
            <Donate />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  )
}

const Auth = () => {
  const [auth, setAuth] = useState(localStorage.auth || '')

  useEffect(() => {
    localStorage.auth = auth
  }, [auth])

  return (
    <div>
      <input
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="email"
        placeholder="Authentication Token"
        //! v-bind:className="{ 'is-success': auth.length == 48, 'is-danger': auth.length < 48 }"
        value={auth}
        onChange={(e) => setAuth(e.target.value)}
      />

      <p className="text-sm leading-5 text-gray-500">
        The auth token can be found at{' '}
        <a
          href="https://ngrok.com"
          target="_blank"
          className="no-underline hover:underline text-indigo-500"
        >
          ngrok.com
        </a>
        .
      </p>
    </div>
  )
}

const regionList = [
  { id: 1, name: 'United States', region: 'us' },
  { id: 2, name: 'Europe', region: 'eu' },
  { id: 3, name: 'Asia/Pacific', region: 'ap' },
  { id: 4, name: 'Australia', region: 'au' },
  { id: 5, name: 'South America', region: 'sa' },
  { id: 6, name: 'Japan', region: 'jp' },
  { id: 7, name: 'India', region: 'in' },
]

const Region = () => {
  const [region, setRegion] = useState(
    localStorage.region.list || regionList[0].region,
  )

  useEffect(() => {
    localStorage.region = region.region
  }, [region])

  //! fix this later

  return (
    <>
      <Listbox value={region} onChange={setRegion}>
        <Listbox.Button>Region: {region.name}</Listbox.Button>
        <Listbox.Options>
          {regionList.map((person) => (
            <Listbox.Option key={person.id} value={person}>
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>

      <div>
        <p class="text-sm leading-5 text-gray-500">
          In order to reduce latency, please select the region closest to you.
        </p>
      </div>
    </>
  )
}

const About = () => {
  return (
    <div>
      <div className="title">About</div>

      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Lightning</h1>
            <h2 className="subtitle">
              A port forwarding utility. Created by SuchACharles.
            </h2>
          </div>
        </div>
      </section>
    </div>
  )
}

const Donate = () => {
  return (
    <div>
      <div class="title">Donate</div>
      <a href="https://www.paypal.me/modderday" target="_blank" class="button">
        <span class="icon is-small is-left">
          <i class="fab fa-paypal"></i>
        </span>
        <span>PayPal</span>
      </a>
    </div>
  )
}
