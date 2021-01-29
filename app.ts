import { question } from 'readline-sync';
import { ReminderList } from './reminderlist';
import { Confirm } from './confirm';

let response1 = 'Get milk';
let response2 = 'Grocery';
ReminderList.addReminder(response1, response2);

response1 = 'Get Eggs';
response2 = 'Grocery';
ReminderList.addReminder(response1, response2);

export const printMenu = () => {
  console.log(`\n------------------------------
|      Reminders menu:       |
------------------------------
|  [1] Show all reminders 👀
|  [2] Search reminders 🔎
|  [3] Add reminder ✏️
|  [4] Modify reminders ✍️
|  [5] Toggle completion ⭕️ 🔴
|  [6] Exit 👋
------------------------------\n\n`);
};

let selectMenu;
export const startApp = () => {
  question('Hit [Enter] key to see main menu: ');
};
export const runApp = () => {
  let numberedReminderList = () => {
    ReminderList.reminders.forEach((obj, index) => {
      console.log(`[${index + 1}] ${obj.message}`);
    });
  };

  let promptUser = 'Choose a [Number] followed by [Enter]: ';
  selectMenu = question(promptUser);
  let selectModify;
  let selectedIndex;

  switch (selectMenu) {
    case '1':
      ReminderList.showAllCat();
      break;
    case '2':
      let searchTerm: string = question('Enter a keyword here: ');
      let confirmedTerm = Confirm.search(searchTerm);
      ReminderList.search(confirmedTerm);
      break;
    case '3':
      let userReminder = question('Enter a reminder here: ');
      let confirmedMsg = Confirm.addMsg(userReminder);
      let userTag = question('Enter a tag here: ');
      let confirmedTag = Confirm.addTag(userTag);
      ReminderList.addReminder(confirmedMsg, confirmedTag);
      break;
    case '4':
      numberedReminderList();
      selectModify = question('Enter a reminder number to edit here: ');
      selectedIndex = parseInt(selectModify) - 1;
      let modifiedReminder: string = question('Enter a new description: ');
      let abc = Confirm.modify(modifiedReminder);
      ReminderList.modifyReminder(selectedIndex, abc);
      let completeToggle = question('Do you wish to toggle the completed status? y/n ');
      let completeStatus = Confirm.modifyComplete(completeToggle);
      if (completeStatus === '1') {
        ReminderList.toggleCompletion(selectedIndex);
      }
      break;
    case '5':
      numberedReminderList();
      selectModify = question('Enter a reminder number to toggle here: ');
      selectedIndex = parseInt(selectModify) - 1;
      Confirm.toggle(selectModify);
      ReminderList.toggleCompletion(selectedIndex);
      break;
    case '6':
      ReminderList.exit();
      break;
    default:
      console.log('Please enter a valid option');
  }
};
