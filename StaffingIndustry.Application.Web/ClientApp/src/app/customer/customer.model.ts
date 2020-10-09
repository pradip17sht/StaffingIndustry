export interface MvCustomer {
    organizationId: number;
    customerId: number;
    organizationName: string;
    city: string;
    state: string;
    phoneNo: number;
    emailId: string;

}

export interface MvEditCustomer {
    organizationId: number;
    organizationName: string;
    city: string;
    state: string;
    phoneNo: number;
    emailId: string;
}
