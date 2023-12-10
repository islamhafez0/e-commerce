'use client'

import React, { SetStateAction, useContext, useState } from 'react'

interface IContext {
  filterCategories: string[]
  setFilterCategories: React.Dispatch<SetStateAction<string[]>>
  sort: string
  setSort: React.Dispatch<SetStateAction<string>>
}

export const INITIAL_CONTEXT_DATA: IContext = {
  filterCategories: [],
  setFilterCategories: () => {},
  sort: '',
  setSort: () => '',
}

const FilterContext = React.createContext<IContext>(INITIAL_CONTEXT_DATA)

console.log(FilterContext)

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [filterCategories, setFilterCategories] = useState<string[]>([])
  const [sort, setSort] = useState<string>('-createdAt')
  return (
    <FilterContext.Provider
      value={{
        filterCategories, // Updated variable name
        setFilterCategories,
        sort,
        setSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext)
