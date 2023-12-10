import React from 'react'
import classes from './index.module.scss'
import { Category } from '../../../payload/payload-types'
import CategoryCard from './CategoryCard'
import Link from 'next/link'

const Categories = ({ categories }: { categories: Category[] }) => {
  console.log(categories)
  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h3>Shop by category</h3>
        <Link href="/products">Show All</Link>
      </div>
      <div className={classes.list}>
        {categories?.map(category => {
          return <CategoryCard key={category.id} category={category} />
        })}
      </div>
    </section>
  )
}

export default Categories
