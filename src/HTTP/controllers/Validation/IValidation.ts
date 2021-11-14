interface IValidation {
    validate(data: any): Promise<boolean>;
}

export default IValidation;