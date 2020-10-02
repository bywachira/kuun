import React from 'react'
import {
  ProductList,
  Product,
  ProductDesc,
  ProductDetails,
  ProductFooter,
  ProductFooterNode,
  ProductHeader,
  ProductHeaderLabel,
  ProductHeaderLogo,
  ProductImage,
  ProductMeta,
  ProductName
} from './style'

function Listings({ listings, Link, Action }) {
  return (
    <ProductList>
      {listings.map((listing) => {
        return (
          <Product>
            {listing.header_logo && listing.header_label ? (
              <ProductHeader>
                <ProductHeaderLogo src={listing.header_logo} />
                <ProductHeaderLabel>{listing.header_label}</ProductHeaderLabel>
              </ProductHeader>
            ) : null}
            <ProductImage src={listing.image} />
            <ProductMeta>{listing.date}</ProductMeta>
            <ProductDetails>
              <ProductName>
                <Link to={listing.listing_id}>{listing.name}</Link>
              </ProductName>
              <ProductDesc>{listing.description}</ProductDesc>
            </ProductDetails>
            <ProductFooter>
              <ProductFooterNode>{listing.amount}</ProductFooterNode>
              <Action />
            </ProductFooter>
          </Product>
        )
      })}
    </ProductList>
  )
}

export default Listings
