interface ITransaction {
    action: string;
    amount: number;
    bankAccountId: number;
    dateCreated: string;
    dateModified: string;
    description: string;
    id: number;
    isActive: boolean;
}

export default ITransaction