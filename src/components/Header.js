// components/Header.js

import IdiomaSelectMenu from './IdiomaSelectMenu'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 dark:bg-gray-900 dark:text-white">
        <h1 className="text-xl font-bold dark:text-white">Synonymous</h1>
        <div className="flex flex-row">
          <div className="hidden sm:block px-4">
            <IdiomaSelectMenu />
          </div>
        <ThemeToggle />
        </div>
    </header>
  )
}
