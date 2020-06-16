import React, { FC, ComponentType } from 'react'
import { Route, RouteProps } from 'react-router-dom'

import Layout from './Layout'

interface PublicRouteProps extends RouteProps {
  component: ComponentType<any>
  forceRedirect?: boolean
}

const PublicRoute: FC<PublicRouteProps> = ({
  component: Component,
  forceRedirect,
  ...props
}) => {



  return (
    <Route
      {...props}
      render={matchProps => (
        <Layout>
        <Component {...matchProps} />
      </Layout>
      )}
    />
  )
}

 export default PublicRoute;


