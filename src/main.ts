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
  exec.exec(`/opt/hostedtoolcache/Python/3.8.2/x64/bin/yamllint .`)
}

run()
