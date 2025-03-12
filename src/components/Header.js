// components/Header.js

import IdiomaSelectMenu from './IdiomaSelectMenu'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-200">
        <h1 className="text-xl font-bolds">Synonymous</h1>
        <div className="flex flex-row">
          <div className="hidden sm:block px-4">
            <IdiomaSelectMenu />
          </div>
        <ThemeToggle />
        </div>
    </header>
  )
}
