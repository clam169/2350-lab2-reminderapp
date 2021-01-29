export class Reminder {
  public _message: string = '';
  private _tag: string = '';
  private _isComplete: boolean = false;
  constructor(message: string, tag: string) {
    this.message = message;
    this.tag = tag;
  }

  // getters and setters here
  get message(): string {
    return this._message;
  }
  set message(userInput: string) {
    if (userInput.length > 3) {
      this._message = userInput;
    }
  }

  get tag(): string {
    return this._tag;
  }
  set tag(userInput: string) {
    this._tag = userInput;
  }

  get isComplete(): boolean {
    return this._isComplete;
  }
  set isComplete(value: boolean) {
    this._isComplete = value;
  }
}
