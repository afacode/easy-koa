import inquirer from 'inquirer'

export default () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'packageName',
      default() {
        return 'koa-demo'
      },
      message: 'set package name'
    },
    {
      type: 'input',
      name: 'port',
      default() {
        return 8080
      },
      validate(val) {
        if (typeof Number(val) === 'number') return true
        return 'input number'
      },
      message: 'set server port number'
    },
    {
      type: 'checkbox', // 多选
      name: 'middleware',
      message: 'select middleware',
      choices: [
        {name: 'koa-router'},
        {name: 'koa-static'},
        {name: 'koa-views'},
        {name: 'koa-body'},
      ]
    }
  ])
}