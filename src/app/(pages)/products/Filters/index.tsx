'use client'
import React from 'react'
import classes from './index.module.scss'
import { Category } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'
import Checkbox from '../../../_components/Checkbox'
import { HR } from '../../../_components/HR'
import Radio from '../../../_components/Radio'
const Filters = ({ categories }: { categories: Category[] }) => {
  const { filterCategories, setFilterCategories, sort, setSort } = useFilter()
  const handleClick = (catId: string) => {
    if (filterCategories.includes(catId)) {
      const updatedCategories = filterCategories.filter(id => id !== catId)
      setFilterCategories(updatedCategories)
    } else {
      setFilterCategories([...filterCategories, catId])
    }
  }
  const handleSort = (value: string) => {
    setSort(value)
  }
  return (
    <aside className={classes.filtersAside}>
      <div>
        <h6 className={classes.title}>Categories</h6>
        <div className={classes.categories}>
          {categories.map(cat => {
            console.log(cat)
            const isSelectedCategory = filterCategories.includes(cat.id)
            console.log(isSelectedCategory)
            return (
              <>
                <Checkbox
                  isSelectedCategory={isSelectedCategory}
                  label={cat.title}
                  key={cat.id}
                  handleClick={handleClick}
                  value={cat.id}
                />
              </>
            )
          })}
        </div>
        <HR className={classes.hr} />
        <h6>Sort By</h6>
        <div className={classes.categories}>
          <Radio
            isSelected={sort === '-createdAt'}
            label="Latest"
            value="-createdAt"
            groupName="sort"
            handleChange={handleSort}
          />
          <Radio
            isSelected={sort === 'createdAt'}
            label="Oldest"
            value="createdAt"
            groupName="sort"
            handleChange={handleSort}
          />
        </div>
      </div>
    </aside>
  )
}

export default Filters
