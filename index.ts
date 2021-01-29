import { startApp, runApp, printMenu } from './app';

let selectMenu;
do {
  startApp();
  printMenu();
  runApp();
} while (selectMenu != '6');
