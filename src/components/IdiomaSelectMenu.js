// components/IdiomaSelectMenu.js

'use client'

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/24/solid' 
import { CheckIcon } from '@heroicons/react/20/solid'

const idiomas = [
  { id: 1, name: 'Inglês' },
  { id: 2, name: 'Português' },
  { id: 3, name: 'Espanhol' },
  { id: 4, name: 'Francês' },
  { id: 5, name: 'Alemão' },
  { id: 6, name: 'Italiano' },
  { id: 7, name: 'Japonês' },
  { id: 8, name: 'Chinês' },
  { id: 9, name: 'Russo' },
  { id: 10, name: 'Árabe' },
]

export default function IdiomaSelectMenu() {
  const [selectedIdioma, setSelectedIdioma] = useState(idiomas[0]) // Começa com Português selecionado

  return (
    <Listbox value={selectedIdioma} onChange={setSelectedIdioma}>
      <Label className="block text-sm font-medium text-white">Selecione um idioma</Label>
      <div className="relative mt-2">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <span className="block truncate">{selectedIdioma.name}</span>
          </span>
          <ChevronUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
        >
          {idiomas.map((idioma) => (
            <ListboxOption
              key={idioma.id}
              value={idioma}
              className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{idioma.name}</span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                <CheckIcon aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}
