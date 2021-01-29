import { Reminder } from './reminder';

export class ReminderList {
  private static _reminders: Reminder[] = [];
  private static _tags: string[] = [];

  static showAllCat() {
    console.log('');
    if (this.reminders.length < 1) {
      console.log('You have no reminders\n');
    } else {
      this.tags.forEach((tag) => {
        console.log(`🏷️ ${tag.toUpperCase()}\n`);
        for (let reminder of this.reminders) {
          if (reminder.tag === tag) {
            this.printReminder(reminder);
          }
        }
        console.log('');
      });
    }
  }

  static search(queryTerm: string) {
    const keyword = queryTerm.toLowerCase();
    let resultsArr: Reminder[] = [];

    for (let reminder of this.reminders) {
      let message: string = reminder.message.toLowerCase();

      if (message.includes(keyword) || reminder.tag.toLowerCase() === keyword) {
        resultsArr.push(reminder);
      }
    }

    if (resultsArr.length > 0) {
      for (let reminder of resultsArr) {
        this.printReminder(reminder);
      }
      console.log('');
    } else {
      console.log('No results found. Please try again. \n');
    }
  }

  static addReminder(res1: string, res2: string) {
    // add new reminder to reminder[]
    this.reminders.push(new Reminder(res1, res2));
    console.log('Reminder added\n');
    // add new tag to tag[] if it doesn't exist
    if (this.tags.indexOf(res2) < 0) {
      this.tags.push(res2);
    } else {
      return;
    }
  }

  static modifyReminder(index: number, res1: string) {
    this.reminders[index].message = res1;
  }

  static toggleCompletion(index: number) {
    if (!this.reminders[index].isComplete) {
      this.reminders[index].isComplete = true;
    } else {
      this.reminders[index].isComplete = false;
    }
  }

  static printReminder(reminder: Reminder) {
    if (reminder.isComplete) {
      let crossedOut = reminder.message
        .split('')
        .map((char) => char + '\u0336')
        .join('');
      console.log(`🔴 ${crossedOut}`);
    } else {
      console.log(`⭕️ ${reminder.message}`);
    }
  }

  static exit() {
    return;
  }

  //getter setter
  static get reminders(): Reminder[] {
    return ReminderList._reminders;
  }
  static get tags(): string[] {
    return ReminderList._tags;
  }
}
