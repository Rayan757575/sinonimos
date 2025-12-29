import IdiomaSelectMenu from './IdiomaSelectMenu'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-200 border-b border-transparent transition-colors duration-300 dark:bg-gray-900 dark:border-gray-800">
      <h1 className="text-xl font-bold px-10 text-gray-800 dark:text-white">Synonymous</h1>
      <div className="flex flex-row items-center gap-2">
        <div className="hidden sm:block px-4">
          <IdiomaSelectMenu />
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}