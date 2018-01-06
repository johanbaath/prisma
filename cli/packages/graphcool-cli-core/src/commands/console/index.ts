import { Command, flags, Flags } from 'graphcool-cli-engine'
import * as opn from 'opn'
import * as fs from 'fs-extra'
import * as childProcess from 'child_process'

export default class ConsoleCommand extends Command {
  static topic = 'console'
  static description = 'Open Graphcool Console in browser'
  async run() {
    const serviceName = this.definition.definition!.service!
    const stage = this.definition.definition!.stage

    const clusterName = this.definition.definition!.cluster
    const cluster = this.env.clusterByName(clusterName!, true)
    this.env.setActiveCluster(cluster!)

    opn(`https://console.graph.cool`)
    // if (!cluster.local) {

    // }
  }
}
