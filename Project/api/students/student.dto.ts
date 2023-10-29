export interface CreateStudent { // Data needed to create a student
  email: string;
  name: string;
  netid: string;
  major: string;
  minor: string;
  year: number;
  pronouns: string;
  location: string;
  coed: boolean;
}

export interface PatchStudent extends Partial<CreateStudent> {} // ALlows us to update specific values, ignoring others
