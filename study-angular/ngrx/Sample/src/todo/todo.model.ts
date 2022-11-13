export interface Todo {
    id: string,
    content: string,
    createEpoch: number,
    updateEpoch: number | null,
    version: number
}