// components/Header.js

import IdiomaSelectMenu from './IdiomaSelectMenu'

export default function Header() {
  return (
    <header className="bg-black text-white p-4 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Synonymous</h1>
        
        <div className="hidden sm:block">
          <IdiomaSelectMenu />
        </div>
      </div>
    </header>
  )
}
