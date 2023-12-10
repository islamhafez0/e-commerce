'use client'
import React from 'react'
import classes from './index.module.scss'
import Link from 'next/link'
import { Category, Media } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'

type CategoryProps = {
  category: Category
}

const CategoryCard = ({ category }: CategoryProps) => {
  const mediaLink = category.media as Media
  const { setFilterCategories, filterCategories } = useFilter()
  console.log(filterCategories)
  return (
    <Link
      href="/products"
      className={classes.card}
      style={{ backgroundImage: `url(${mediaLink.url})` }}
      onClick={() => setFilterCategories([category.id])}
    >
      <p className={classes.title}>{category.title}</p>
    </Link>
  )
}

export default CategoryCard
