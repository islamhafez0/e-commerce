import React, { useState } from 'react'
import classes from './index.module.scss'
import Link from 'next/link'
import { Media } from '../../../_components/Media'
import { Price } from '../../../_components/Price'
import Image from 'next/image'
import { RemoveFromCartButton } from '../../../_components/RemoveFromCartButton'
const CartItem = ({ product, title, metaImage, quantity, addItemToCart }) => {
  const [qty, setQuantity] = useState(quantity)
  const decrementQty = () => {
    const updateQuantity = quantity > 1 ? quantity - 1 : 1
    setQuantity(updateQuantity)
    addItemToCart({ product, quantity: Number(updateQuantity) })
  }
  const incrementQty = () => {
    const updateQuantity = quantity + 1
    setQuantity(updateQuantity)
    addItemToCart({ product, quantity: Number(updateQuantity) })
  }
  const enterQty = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updateQuantity = Number(e.target.value)
    setQuantity(updateQuantity)
    addItemToCart({ product, quantity: Number(updateQuantity) })
  }
  return (
    <li className={classes.item} key={title}>
      <Link href={`products/${product.slug}`} className={classes.mediaWrapper}>
        {metaImage && typeof metaImage !== 'string' ? (
          <Media imgClassName={classes.image} className={classes.image} resource={metaImage} fill />
        ) : (
          <span>No Image</span>
        )}
      </Link>
      <div className={classes.itemDetails}>
        <div className={classes.titleWrapper}>
          <h6>{title}</h6>
          <Price product={product} button={false} />
        </div>
        <div className={classes.quantity}>
          <div className={classes.quantityBtn} onClick={decrementQty}>
            <Image
              src="/assets/icons/minus.svg"
              alt="minus"
              width={24}
              height={24}
              className={classes.qtnBt}
            />
          </div>
          <input
            type="text"
            className={classes.quantityInput}
            value={quantity}
            onChange={enterQty}
          />
          <div className={classes.quantityBtn} onClick={incrementQty}>
            <Image
              src="/assets/icons/plus.svg"
              alt="plus"
              width={24}
              height={24}
              className={classes.qtnBt}
            />
          </div>
        </div>
      </div>
      <div className={classes.subtotalWrapper}>
        <Price product={product} button={false} quantity={quantity} />
        <RemoveFromCartButton product={product} />
      </div>
    </li>
  )
}

export default CartItem
