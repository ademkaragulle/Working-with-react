export type todoType = {
    taskName: string
    workDay: number
}

export type PropsType = {
    taskItem: todoType,
    deleteTask(nameToDelete: string): void
}
