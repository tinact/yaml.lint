import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    installYamllint()

    runYamllint()
      .then()
      .catch(err => core.setFailed(err.message))
  } catch (error) {
    core.setFailed(error.message)
  }
}

const installYamllint = async (): Promise<void> => {
  await exec.exec(`pip3 install --upgrade setuptools yamllint`)
}

const runYamllint = async (): Promise<void> => {
  await exec.exec(`/opt/hostedtoolcache/Python/3.8.2/x64/bin/yamllint .`)
}

run()
