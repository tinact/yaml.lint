import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    installYamllint()

    runYamllint()
  } catch (error) {
    core.setFailed(error.message)
  }
}

const installYamllint = (): void => {
  exec.exec(`pip3 install --upgrade setuptools yamllint`)
}

const runYamllint = (): void => {
  exec.exec(`yamllint .`)
}

run()
