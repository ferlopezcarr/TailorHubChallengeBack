import { User } from "../models/user.model";

export class UserParser {

    public static parse(userDatabase: User, userInput: User): User {
        const userOutput: User = ({...userDatabase} as User);

        userOutput.name = (!userInput?.name || userInput.name?.length <= 0 ? userOutput.name : userInput.name);
        userOutput.lastname1 = (!userInput?.lastname1 || userInput.lastname1?.length <= 0 ? userOutput.lastname1 : userInput.lastname1);
        if (userInput?.lastname2 === undefined || userInput?.lastname2 === null) {
            Reflect.deleteProperty(userOutput, 'lastname2');
        } else if (typeof(userInput?.lastname2) === "string" && userInput?.lastname2?.trim().length > 0) {
            userOutput.lastname2 = userInput?.lastname2;
        }
        userOutput.postalCode = (Number.isNaN(userInput?.postalCode) ? userOutput.postalCode : userInput.postalCode);
        
        return userOutput;
    }
}