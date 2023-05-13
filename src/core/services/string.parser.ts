export class StringParser {

    public static parse(value: string): string | undefined {
        let parsedValue!: string;
        if (value !== undefined && value !== null && typeof(parsedValue) === "string" && value?.trim().length > 0) {
            parsedValue = `${value}`;
        }
        return parsedValue;
    }

}