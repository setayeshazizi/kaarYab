export type OpportunityCategory =
  | "Job"
  | "Internship"
  | "Scholarship"
  | "Online Course"
  | "Remote Work"
  | "Training Program"
  | "Volunteer Work";

export type OpportunityType = "Remote" | "On-site" | "Hybrid";

export type OpportunityStatus = "approved" | "pending";

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  category: OpportunityCategory;
  location: string;
  type: OpportunityType;
  deadline: string;
  description: string;
  requirements: string[];
  applyLink: string;
  tags: string[];
  createdAt: string;
  isFeatured?: boolean;
  status?: OpportunityStatus;
}

export interface OpportunityFormData {
  title: string;
  organization: string;
  category: OpportunityCategory;
  location: string;
  type: OpportunityType;
  deadline: string;
  description: string;
  requirements: string;
  applyLink: string;
  tags: string;
  isFeatured?: boolean;
  status?: OpportunityStatus;
}
