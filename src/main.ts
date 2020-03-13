import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    runYamllint()
  } catch (error) {
    core.setFailed(error.message)
  }
}

const runYamllint = (): void => {
  exec.exec(`yamllint .`)
}

run()
