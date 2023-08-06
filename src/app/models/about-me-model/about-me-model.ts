export class AboutMeModel implements AboutMe {

    private name: string;
    private jobTitle: string;
    private location: string;
    private email: string;
    private links: Array<string>;
    private description: string;

    constructor( name: string, jobTitle: string, location: string, email: string, links: [string], description: string ){
        this.name = name;
        this.jobTitle = jobTitle;
        this.location = location;
        this.email = email;
        this.links = links;
        this.description = description;    
    }

    getName(): string {
        return this.name;
    }
    getJobTitle(): string {
        return this.jobTitle;
    }

    getLocation(): string {
        return this.location;
    }

    getEmail(): string {
        return this.email;
    }

    getLinks(): Array<string> {
        return this.links;
    }

    getDescription(): string {
        return this.description;
    }

}

export interface AboutMe {

    getName(): string;
    getJobTitle(): string;
    getLocation(): string;
    getEmail(): string;
    getLinks(): Array<string>;
    getDescription(): string;


}
