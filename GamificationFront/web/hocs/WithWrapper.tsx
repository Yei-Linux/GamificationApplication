import React, { Fragment } from 'react'
import Content from '../components/Layout/Content'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import { LayoutContainer } from '../components/Layout/layout.styled'

interface Props {
  isHeader?: boolean
  isHeaderCustom?: boolean
  headerChildren?: React.ReactNode[]
  isHeaderFixed?: boolean
  isFooter?: boolean
}

const WithWrapper = (props: Props) => (WrappedComponent: any) => (componentProps: any) => {
  return (
    <Fragment>
      <LayoutContainer>
        {props.isHeader && (
          <Header
            isHeaderFixed={props.isHeaderFixed}
            isCustom={props.isHeaderCustom}
            headerChildren={props.headerChildren}
          />
        )}
        <Content isHeaderFixed={props.isHeaderFixed}>
          <WrappedComponent {...componentProps} />
        </Content>
        {props.isFooter && <Footer />}
      </LayoutContainer>
    </Fragment>
  )
}

WithWrapper.defaultProps = {
  isHeader: true,
  isFooter: true,
  isHeaderCustom: false,
  headerChildren: [],
  isHeaderFixed: true
}

export default WithWrapper
