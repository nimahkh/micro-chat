import chalk from "chalk"

type TLogger = void
class Logger {
    protected log(log: string) : TLogger {
        return console.log(log)
    }
    public info(message: string) : TLogger {
        return this.log(chalk.blue(message));
    }
    public success(message: string) : TLogger{
        return this.log(chalk.green(message));
    }
    public warn(message: string) : TLogger{
        return this.log(chalk.yellow(message));
    }
    public error(message: string) : TLogger{
        return this.log(chalk.red(message));
    }
}

export default Logger;