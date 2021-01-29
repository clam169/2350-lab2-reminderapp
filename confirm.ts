import { question } from 'readline-sync';

export class Confirm {
  static addMsg(newInput: string) {
    let placeholder = newInput;
    let confirmStatus: boolean = false;

    const confirm = (input: string) => {
      let confirmYN = question(`You have entered reminder: '${input}', is this correct? Y/N: `);
      switch (confirmYN) {
        case 'n' || 'N':
          confirmStatus = false;
          console.log('Please try typing it again');
          placeholder = question('Enter a reminder here: ');
          break;
        case 'y' || 'Y':
          confirmStatus = true;
          break;
        default:
          console.log('Invalid input: Please enter either y/n');
          return placeholder;
      }
    };

    do {
      confirm(placeholder);
    } while (confirmStatus === false);
    return placeholder;
  }

  static addTag(newInput: string) {
    let placeholder = newInput;
    let confirmStatus: boolean = false;

    const confirm = (input: string) => {
      let confirmYN = question(`You have entered tag: '${input}', is this correct? Y/N: `);
      switch (confirmYN) {
        case 'n' || 'N':
          confirmStatus = false;
          console.log('Please try typing it again');
          placeholder = question('Enter a reminder here: ');
          break;
        case 'y' || 'Y':
          confirmStatus = true;
          break;
        default:
          console.log('Invalid input: Please enter either y/n');
          return placeholder;
      }
    };

    do {
      confirm(placeholder);
    } while (confirmStatus === false);
    return placeholder;
  }

  static modify(newInput: string) {
    let placeholder = newInput;
    let confirmStatus: boolean = false;

    const confirm = (input: string) => {
      let confirmYN = question(`You entered Description: '${input}', is this correct? y/n: `);
      switch (confirmYN) {
        case 'n' || 'N':
          confirmStatus = false;
          placeholder = question('Please try typing it again: ');
          break;
        case 'y' || 'Y':
          confirmStatus = true;
          break;
        default:
          console.log('Invalid input: Please enter either y/n');
          return input;
      }
    };

    do {
      confirm(placeholder);
    } while (confirmStatus === false);
    return placeholder;
  }

  static modifyComplete(newInput: string) {
    let confirmStatus: string = '';
    let confirmYN = newInput;

    const confirm = (input: string) => {
      switch (confirmYN) {
        case 'n' || 'N':
          confirmStatus = '0';
          break;
        case 'y' || 'Y':
          confirmStatus = '1';
          break;
        default:
          confirmYN = question('Do you wish to toggle the completed status? y/n ');
          confirmStatus = 'other';
          return confirmYN;
      }
    };
    do {
      confirm(confirmYN);
    } while (confirmStatus === 'other');
    if (confirmStatus == '1') {
      return confirmStatus;
    }
  }

  static toggle(newInput: string) {
    let placeholder = newInput;
    let confirmStatus: boolean = false;

    const confirm = (input: string) => {
      let confirmYN = question(
        `You entered reminder number to toggle: '${input}', is this correct? y/n: `
      );
      switch (confirmYN) {
        case 'n' || 'N':
          confirmStatus = false;
          placeholder = question('Enter a reminder number to toggle: ');
          break;
        case 'y' || 'Y':
          confirmStatus = true;
          break;
        default:
          console.log('Invalid input: Please enter either y/n');
          return input;
      }
    };

    do {
      confirm(placeholder);
    } while (confirmStatus === false);
    return placeholder;
  }

  static search(newInput: string) {
    let placeholder = newInput;
    let confirmStatus: boolean = false;

    const confirm = (input: string) => {
      let confirmYN = question(`You entered keyword: '${input}', is this correct? Y/N: `);
      switch (confirmYN) {
        case 'n' || 'N':
          confirmStatus = false;
          placeholder = question('Enter a keyword here: ');
          return placeholder;
        case 'y' || 'Y':
          confirmStatus = true;
          return placeholder;
        default:
          console.log('Invalid input: Please enter either y/n');
          return placeholder;
      }
    };

    do {
      confirm(placeholder);
    } while (confirmStatus === false);
    return placeholder;
  }
}
