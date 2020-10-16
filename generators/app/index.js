'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the impeccable ${chalk.red('generator-vis-temp')} generator!`)
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'install',
        message: 'Would you like to enable this option?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('**'),
      this.destinationPath('./')
    );
    const specFileList = ['.browserslistrc', '.commitlintrc.js', '.eslintrc.js', '.gitignore']
    specFileList.forEach(file => {
      this.fs.copy(this.templatePath(file), this.destinationPath(file))
    })
  }

  install() {
    this.installDependencies({
      bower: false
    });
  }
};
