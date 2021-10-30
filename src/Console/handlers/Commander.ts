import { createCommand, Command, Option } from 'commander';

export type IOption = {
    flags: string,
    description: string
}

class Commander {
    private _commander : Command =  createCommand();

    public programs(options: IOption[]) : Command {
        options.map(option => {
            this._commander.addOption(new Option(option.flags)).description(option.description)
        })
        return this._commander
    }
}

export default Commander;