export class InfoSectionModel implements InfoSection {

    private headline: string;
    private subTitles: Array<string>;
    private details: string;

    constructor(headline: string, subTitles: Array<string>, details: string){
        this.headline = headline;
        this.subTitles = subTitles;
        this.details = details;
    }

    getHeadline(): string {
        return this.headline;
    }
    getSubTitles(): string[] {
        return this.subTitles;
    }
    getDetails(): string {
        return this.details;
    }
}

export interface InfoSection { 

    getHeadline(): string;
    getSubTitles(): Array<string>;
    getDetails(): string;

}
