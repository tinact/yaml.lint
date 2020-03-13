import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    const configPath: string = core.getInput('config_path')
    let yamlCommand = '.'

    installYamllint()

    if (configPath) {
      yamlCommand += ` -c ${configPath}`
    }

    runYamllint(yamlCommand)
      .then()
      .catch(err => core.setFailed(err.message))
  } catch (error) {
    core.setFailed(error.message)
  }
}

const installYamllint = async (): Promise<void> => {
  await exec.exec(`sudo pip3 install yamllint`)
}

const runYamllint = async (yamlCommand: string): Promise<void> => {
  await exec.exec(`yamllint ${yamlCommand}`)
}

run()
