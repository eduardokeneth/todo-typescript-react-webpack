import * as React from 'react'

export default class App extends React.Component<{}, IState> {

    constructor(props: {}){
        super(props);

        this.state = {
            currentTask: "",
            tasks: []
        }
    }

    private _timeInMilliseconds(): number{
        const date: Date = new Date();
        return date.getTime()
    }

    public handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        this.setState({
            currentTask: "",
            tasks: [
                ...this.state.tasks,
                {
                    id: this._timeInMilliseconds(),
                    value: this.state.currentTask,
                    completed: false
                }
            ]
        })
    }

    public changeInput = (e: any): void => {
        this.setState({
            currentTask: e.target.value
        })
    }

    public deleteTask(id: number): void{
        const tasks: Array<ITask> = this.state.tasks.filter((task: ITask) => task.id !== id)
        this.setState({
            tasks
        })
    }

    public toogleDone(index: number): void{
        let task: ITask[] = this.state.tasks.splice(index, 1)
        task[0].completed = !task[0].completed;
        const tasks: ITask[] = [...this.state.tasks, ...task];
        this.setState({ tasks })
    }

    public renderTasks(): JSX.Element[]{
        return this.state.tasks.map((task: ITask, index: number) => {
            return (
                <div key={task.id}>
                    <span>{task.value}</span>
                    <button onClick={() => this.deleteTask(task.id)}>Delete</button>
                    <button onClick={() => this.toogleDone(index)}>Done</button>
                </div>
            )
        })
    }

    public render(): JSX.Element{
        return (
            <div>
                <h1>Basic Todo - TypeScript - React</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type={"text"}
                        placeholder={"Add To do"}
                        onChange={this.changeInput}
                        value={this.state.currentTask}
                    />
                    <button type={"submit"}>Add To do</button>
                </form>
                <section>{this.renderTasks()}</section>
            </div>
        )
    }
}

interface IState {
    currentTask: string;
    tasks: Array<ITask>;
}

interface ITask {
    id: number;
    value: string;
    completed: boolean
}
