/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WatchImport } from './routes/watch'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const WatchRoute = WatchImport.update({
  id: '/watch',
  path: '/watch',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/watch': {
      id: '/watch'
      path: '/watch'
      fullPath: '/watch'
      preLoaderRoute: typeof WatchImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/watch': typeof WatchRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/watch': typeof WatchRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/watch': typeof WatchRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/watch'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/watch'
  id: '__root__' | '/' | '/watch'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  WatchRoute: typeof WatchRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  WatchRoute: WatchRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/watch"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/watch": {
      "filePath": "watch.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
