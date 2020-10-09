export interface MvTransaction {
    transactionId: number;
    assignmentId: number;
    workHours: number;
    payPerHour: number;
    amount: number;
    invoiceId: number;
}

export interface MvNewTransaction {
    assignmentId: number;
    workHours: number;
    payPerHour: number;
}
