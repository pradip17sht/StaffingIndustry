export interface MvEmployee {
    personId: number;
    employeeId: number;
    firstName: string;
    middleName: string;
    lastName: string;
    city: string;
    state: string;
    phoneNo: number;
    emailId: string;

}

export interface MvEditEmployee {
    personId: number;
    firstName: string;
    middleName: string;
    lastName: string;
    city: string;
    state: string;
    phoneNo: number;
    emailId: string;
}
