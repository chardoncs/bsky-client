/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as NotificationsImport } from './routes/notifications'
import { Route as MessagesIndexImport } from './routes/messages/index'
import { Route as MessagesConvoIdImport } from './routes/messages/$convoId'
import { Route as ProfileHandleRouteImport } from './routes/profile/$handle/route'
import { Route as ProfileHandleIndexImport } from './routes/profile/$handle/index'
import { Route as ProfileHandlePostPostIdImport } from './routes/profile/$handle/post.$postId'

// Create Virtual Routes

const SettingsLazyImport = createFileRoute('/settings')()
const LoginLazyImport = createFileRoute('/login')()
const IndexLazyImport = createFileRoute('/')()
const TagTagLazyImport = createFileRoute('/tag/$tag')()

// Create/Update Routes

const SettingsLazyRoute = SettingsLazyImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/settings.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const NotificationsRoute = NotificationsImport.update({
  id: '/notifications',
  path: '/notifications',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const MessagesIndexRoute = MessagesIndexImport.update({
  id: '/messages/',
  path: '/messages/',
  getParentRoute: () => rootRoute,
} as any)

const TagTagLazyRoute = TagTagLazyImport.update({
  id: '/tag/$tag',
  path: '/tag/$tag',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/tag.$tag.lazy').then((d) => d.Route))

const MessagesConvoIdRoute = MessagesConvoIdImport.update({
  id: '/messages/$convoId',
  path: '/messages/$convoId',
  getParentRoute: () => rootRoute,
} as any)

const ProfileHandleRouteRoute = ProfileHandleRouteImport.update({
  id: '/profile/$handle',
  path: '/profile/$handle',
  getParentRoute: () => rootRoute,
} as any)

const ProfileHandleIndexRoute = ProfileHandleIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => ProfileHandleRouteRoute,
} as any)

const ProfileHandlePostPostIdRoute = ProfileHandlePostPostIdImport.update({
  id: '/post/$postId',
  path: '/post/$postId',
  getParentRoute: () => ProfileHandleRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/notifications': {
      id: '/notifications'
      path: '/notifications'
      fullPath: '/notifications'
      preLoaderRoute: typeof NotificationsImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsLazyImport
      parentRoute: typeof rootRoute
    }
    '/profile/$handle': {
      id: '/profile/$handle'
      path: '/profile/$handle'
      fullPath: '/profile/$handle'
      preLoaderRoute: typeof ProfileHandleRouteImport
      parentRoute: typeof rootRoute
    }
    '/messages/$convoId': {
      id: '/messages/$convoId'
      path: '/messages/$convoId'
      fullPath: '/messages/$convoId'
      preLoaderRoute: typeof MessagesConvoIdImport
      parentRoute: typeof rootRoute
    }
    '/tag/$tag': {
      id: '/tag/$tag'
      path: '/tag/$tag'
      fullPath: '/tag/$tag'
      preLoaderRoute: typeof TagTagLazyImport
      parentRoute: typeof rootRoute
    }
    '/messages/': {
      id: '/messages/'
      path: '/messages'
      fullPath: '/messages'
      preLoaderRoute: typeof MessagesIndexImport
      parentRoute: typeof rootRoute
    }
    '/profile/$handle/': {
      id: '/profile/$handle/'
      path: '/'
      fullPath: '/profile/$handle/'
      preLoaderRoute: typeof ProfileHandleIndexImport
      parentRoute: typeof ProfileHandleRouteImport
    }
    '/profile/$handle/post/$postId': {
      id: '/profile/$handle/post/$postId'
      path: '/post/$postId'
      fullPath: '/profile/$handle/post/$postId'
      preLoaderRoute: typeof ProfileHandlePostPostIdImport
      parentRoute: typeof ProfileHandleRouteImport
    }
  }
}

// Create and export the route tree

interface ProfileHandleRouteRouteChildren {
  ProfileHandleIndexRoute: typeof ProfileHandleIndexRoute
  ProfileHandlePostPostIdRoute: typeof ProfileHandlePostPostIdRoute
}

const ProfileHandleRouteRouteChildren: ProfileHandleRouteRouteChildren = {
  ProfileHandleIndexRoute: ProfileHandleIndexRoute,
  ProfileHandlePostPostIdRoute: ProfileHandlePostPostIdRoute,
}

const ProfileHandleRouteRouteWithChildren =
  ProfileHandleRouteRoute._addFileChildren(ProfileHandleRouteRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/notifications': typeof NotificationsRoute
  '/login': typeof LoginLazyRoute
  '/settings': typeof SettingsLazyRoute
  '/profile/$handle': typeof ProfileHandleRouteRouteWithChildren
  '/messages/$convoId': typeof MessagesConvoIdRoute
  '/tag/$tag': typeof TagTagLazyRoute
  '/messages': typeof MessagesIndexRoute
  '/profile/$handle/': typeof ProfileHandleIndexRoute
  '/profile/$handle/post/$postId': typeof ProfileHandlePostPostIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/notifications': typeof NotificationsRoute
  '/login': typeof LoginLazyRoute
  '/settings': typeof SettingsLazyRoute
  '/messages/$convoId': typeof MessagesConvoIdRoute
  '/tag/$tag': typeof TagTagLazyRoute
  '/messages': typeof MessagesIndexRoute
  '/profile/$handle': typeof ProfileHandleIndexRoute
  '/profile/$handle/post/$postId': typeof ProfileHandlePostPostIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/notifications': typeof NotificationsRoute
  '/login': typeof LoginLazyRoute
  '/settings': typeof SettingsLazyRoute
  '/profile/$handle': typeof ProfileHandleRouteRouteWithChildren
  '/messages/$convoId': typeof MessagesConvoIdRoute
  '/tag/$tag': typeof TagTagLazyRoute
  '/messages/': typeof MessagesIndexRoute
  '/profile/$handle/': typeof ProfileHandleIndexRoute
  '/profile/$handle/post/$postId': typeof ProfileHandlePostPostIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/notifications'
    | '/login'
    | '/settings'
    | '/profile/$handle'
    | '/messages/$convoId'
    | '/tag/$tag'
    | '/messages'
    | '/profile/$handle/'
    | '/profile/$handle/post/$postId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/notifications'
    | '/login'
    | '/settings'
    | '/messages/$convoId'
    | '/tag/$tag'
    | '/messages'
    | '/profile/$handle'
    | '/profile/$handle/post/$postId'
  id:
    | '__root__'
    | '/'
    | '/notifications'
    | '/login'
    | '/settings'
    | '/profile/$handle'
    | '/messages/$convoId'
    | '/tag/$tag'
    | '/messages/'
    | '/profile/$handle/'
    | '/profile/$handle/post/$postId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  NotificationsRoute: typeof NotificationsRoute
  LoginLazyRoute: typeof LoginLazyRoute
  SettingsLazyRoute: typeof SettingsLazyRoute
  ProfileHandleRouteRoute: typeof ProfileHandleRouteRouteWithChildren
  MessagesConvoIdRoute: typeof MessagesConvoIdRoute
  TagTagLazyRoute: typeof TagTagLazyRoute
  MessagesIndexRoute: typeof MessagesIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  NotificationsRoute: NotificationsRoute,
  LoginLazyRoute: LoginLazyRoute,
  SettingsLazyRoute: SettingsLazyRoute,
  ProfileHandleRouteRoute: ProfileHandleRouteRouteWithChildren,
  MessagesConvoIdRoute: MessagesConvoIdRoute,
  TagTagLazyRoute: TagTagLazyRoute,
  MessagesIndexRoute: MessagesIndexRoute,
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
        "/notifications",
        "/login",
        "/settings",
        "/profile/$handle",
        "/messages/$convoId",
        "/tag/$tag",
        "/messages/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/notifications": {
      "filePath": "notifications.tsx"
    },
    "/login": {
      "filePath": "login.lazy.tsx"
    },
    "/settings": {
      "filePath": "settings.lazy.tsx"
    },
    "/profile/$handle": {
      "filePath": "profile/$handle/route.tsx",
      "children": [
        "/profile/$handle/",
        "/profile/$handle/post/$postId"
      ]
    },
    "/messages/$convoId": {
      "filePath": "messages/$convoId.tsx"
    },
    "/tag/$tag": {
      "filePath": "tag.$tag.lazy.tsx"
    },
    "/messages/": {
      "filePath": "messages/index.tsx"
    },
    "/profile/$handle/": {
      "filePath": "profile/$handle/index.tsx",
      "parent": "/profile/$handle"
    },
    "/profile/$handle/post/$postId": {
      "filePath": "profile/$handle/post.$postId.tsx",
      "parent": "/profile/$handle"
    }
  }
}
ROUTE_MANIFEST_END */
