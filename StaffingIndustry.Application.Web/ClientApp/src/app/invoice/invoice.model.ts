export interface MvInvoice {
    invoiceId: number;
    customerId: number;
    employeeId: number;
    transactionId: number;
    amount: number;
}

export interface MvNewInvoice {
    customerId: number;
    employeeId: number;
    transactionId: number;
    amount: number;
}
