import { Transition } from '@headlessui/react'
import { useState } from 'react'

const Notification = () => {
  const [isShowing, setIsShowing] = useState(false)

  return (
    <>
      {/* <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
        Toggle
      </button> */}
      <Transition
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="lightningNotification">
          <div
            className="text-white px-6 py-4 mt-8 border-0 rounded absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl bg-indigo-500 my-4"
            onClick={() => setIsShowing((isShowing) => !isShowing)}
            id="notification"
          >
            <span className="text-xl inline-block mr-5 align-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="inline-block align-middle mr-8">
              <b className="capitalize">
                <span
                  className="notification-title"
                  id="notification-title"
                ></span>
              </b>{' '}
              Port Successfully Created!
            </span>
          </div>
        </div>
      </Transition>
    </>
  )
}

export default Notification
