export interface Jobs {
    filter(arg0: (job: any) => any): any;
    id: string;
    company: string;
    logo: string;
    logoBackground: string;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
    website: string;
    apply: string;
    description: string;
    requirements:{
        content: string;
        items: string[];
    };
    role: {
        content: string;
        items: string[];
    }
}