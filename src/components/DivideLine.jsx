import { RiMoreLine } from 'react-icons/ri'

const DivideLine = () => {
  return (
    <div className="relative flex items-center w-4/5 py-16 mx-auto md:py-24">
      <div className="flex-grow border-t border-neutral-200 dark:border-neutral-600"></div>
      <span className="flex-shrink mx-4 text-neutral-400 dark:border-neutral-800">
        <RiMoreLine />
      </span>
      <div className="flex-grow border-t border-neutral-200 dark:border-neutral-600"></div>
    </div>
  )
}

export default DivideLine
