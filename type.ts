export interface NavItem {
  href: string;
  title: string;
}

export interface User {
  id: string;
  Username: string;
  Email: string;
  password: string;
}

export interface EnterUser {
  Username: string;
  Email: string;
  password: string;
}

export interface UserMessage {
  message: string;
  success: boolean;
  error: string;
}
