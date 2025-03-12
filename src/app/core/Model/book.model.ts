export interface Book {
    id: number;
    user_created: string;
    date_created: string;
    user_updated?: string | null;
    date_updated?: string | null;
    title: string;
    description: string;
  }


