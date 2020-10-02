import styled from 'styled-components'

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2px;
  font-family: ${(props) =>
    props.font
      ? props.font
      : `-apple-system,BlinkMacSystemFont,Helvetica,Arial,"Segoe UI",Roboto,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`};
`

export const Product = styled.div`
  width: 100%;
  min-width: 150px;
  max-width: 200px;
  max-height: 400px;
  min-height: 200px;
  height: 100% !important;
  margin: 1px 1px 8px 1px;
  flex-grow: 1;
`

export const ProductImage = styled.img`
  width: 100%;
  max-height: 200px;
  min-height: 150px;
`

export const ProductHeader = styled.div`
  display: flex;
  place-items: center;
  border-bottom: 1px solid #e1e1e1;
  width: 90%;
  padding: 4px 0px;
`

export const ProductHeaderLogo = styled.img`
  width: 32px;
  border-radius: 50%;
`

export const ProductHeaderLabel = styled.div`
  font-size: 12px;
  margin-left: 8px;
  font-weight: bold;
  cursor: pointer;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
`

export const ProductMeta = styled.div`
  display: flex;
  place-items: center;
  border-bottom: 1px solid #e1e1e1;
  width: 90%;
  padding: 4px 0px;
  border-bottom: 1px solid #e1e1e1;
  color: #737373;
  font-size: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const ProductDetails = styled.div`
  padding: 4px;
  width: 90%;
`

export const ProductName = styled.div`
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;

  a {
    text-decoration: none;
  }
`

export const ProductDesc = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  font-size: 12px;
`

export const ProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px;
  width: 90%;
`

export const ProductFooterNode = styled.div`
  font-size: 12px;
  font-weight: bold;
`
