import { multiplica, suma } from './modulos/controller.js'

import chalk from 'chalk';

let sumaNum = suma(1,2);

let multiplicaNum = multiplica(4,5);

console.log(sumaNum)

console.log(chalk.green(multiplicaNum))