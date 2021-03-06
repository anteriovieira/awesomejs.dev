// This file is auto-generated by @nodepack/plugin-typescript
 
/* eslint-disable */
/* tslint:disable */

// Config
import ProjectConfigBase from './config'
// Plugins
import NodepackPluginApollo from '@nodepack/plugin-apollo/types/context'
import NodepackPluginExpress from '@nodepack/plugin-express/types/context'
import NodepackPluginPassport from '@nodepack/plugin-passport/types/context'
// Project context files
import Algolia from '@/context/algolia'
import Fauna from '@/context/fauna'
import Github from '@/context/github'
import Npm from '@/context/npm'

interface ContextBase {
  config: ProjectConfigBase
}

export type Context = ContextBase
  & NodepackPluginApollo
  & NodepackPluginExpress
  & NodepackPluginPassport
  & Algolia
  & Fauna
  & Github
  & Npm

export default Context
