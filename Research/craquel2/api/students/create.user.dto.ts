export interface CreateUserDto {
    id: string; // Connect with Shibboleth at some point?
    email: string;
    name: string;
    netid: string;
    major: string; // Type later
    minor: string; // Type as above
    year: number;
    pronouns: string;
    location: string;
    coed: boolean;
}
