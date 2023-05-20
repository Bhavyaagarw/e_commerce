import React from 'react'
import Router from 'next/router';
import Cookies from 'js-cookie'
import Image from 'next/image'
import Link from 'next/link'
import { BiCartAdd, BiRupee } from 'react-icons/bi'
import { addToCart, getCartItems } from '@/utils/cartitems'
import { toast } from 'react-hot-toast'

function ProductCart({ product }) {
  console.log(getCartItems());
  if (!product) {
    return null
  }
  const checkoutHandler = () => {
    const cartItems = getCartItems();
    Cookies.set('yourCart', JSON.stringify(cartItems));
    Router.push('/checkout');
  };

  return (
    <div className="card">
      <Link href={`/product/${product?.id}`}>
        <div className="object-fit-cover">
          <Image src={product?.thumbnail} alt={product.title} width={300} height={200} />
        </div>
      </Link>
      <div className="card-body">
        <Link href={`/product/${product?.id}`}className="text-decoration-none">
          <h5 className="card-title text-black a">{product.title}</h5>
        </Link>
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="card-title d-flex align-items-center">
            <BiRupee size={21} />
            {product.price}
          </h6>
          <div className="">
            <button className="btn btn-warning btn-sm mx-2" onClick={(e)=>{addToCart(product,1),toast.success('Added in cart !!')}}>
              <BiCartAdd size={13} />
            </button>
            <button className="btn btn-success btn-sm" onClick={()=>checkoutHandler()} /*onClick={(e)=>{addToCart(product,1),toast.success('Added in cart !!')}}*/>Buy</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCart