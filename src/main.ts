import * as core from '@actions/core'
import * as exec from '@actions/exec'
import * as path from 'path'

async function run(): Promise<void> {
  try {
    const configPath: string = core.getInput('config_path')
    const args = getArgs(configPath)
    runYamllint(args)
      .then(() => core.info(`Successfully YAML Lint.`))
      .catch(err => core.setFailed(err.message))
  } catch (error) {
    core.setFailed(error.message)
  }
}

function getArgs(configPath: string): string[] {
  let args: string[] = ['-m', 'yamllint', '.']

  if (configPath) {
    args = args.concat('-c', configPath)
  }

  return args
}

function getPython(): string {
  const envLocation: string | undefined = process.env.pythonLocation

  if (envLocation) {
    return path.join(envLocation, 'python')
  } else {
    throw new Error('Python could not be found')
  }
}

const runYamllint = async (args: string[]): Promise<void> => {
  await exec.exec(getPython(), args)
}

run()
