#!/usr/bin/env node
import fs from 'fs'
import createIndexTemplate from './createIndexTemplate.js'
import createPackageTemplate from './createPackageTemplate.js'
import question from './questions/index.js'
import { createConfig } from './config.js'
import execa from 'execa'
import chalk from 'chalk'
import path from 'path'

const answer = await question()
console.log(answer)

const config = createConfig(answer)
console.log(config)

console.log(chalk.blue(`创建项目文件夹:${config.packageName}`))
fs.mkdirSync(getRootPath())

console.log(chalk.blue(`创建 index.js`))
fs.writeFileSync(`${getRootPath()}/index.js`, createIndexTemplate(config))

console.log(chalk.blue(`创建 package.json`))
fs.writeFileSync(`${getRootPath()}/package.json`, createPackageTemplate(config))

// 安装依赖 child_process 第三方库 execa
console.log(chalk.blue(`安装依赖`))
await execa('npm install', {
  cwd: getRootPath(),
  stdio: [2, 2, 2]
})
console.log(chalk.blue(`成功！！！`))
console.log(chalk.blue(`
cd ${config.packageName}
yarn dev or npm run dev or pnpm dev
`))

function getRootPath() {
  return path.resolve(process.cwd(), config.packageName)
}

