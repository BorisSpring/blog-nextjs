import { Role } from '@prisma/client';
import {
  Edit,
  Folder,
  MessageSquare,
  Plus,
  ReplyAllIcon,
  Tag,
  User,
} from 'lucide-react';

export const navigationLinks = [
  { path: '/', label: 'Home' },
  { path: '/blogs', label: 'Articles' },
  { path: '/contact', label: 'Contact' },
  { path: '/frecently-asked-questions', label: 'FAQ' },
];

export const footerLinks = [
  {
    heading: 'Product',
    links: [
      'Landingpage',
      'Features',
      'Documentation',
      'Referal Program',
      'Pricing',
    ],
  },
  {
    heading: 'Services',
    links: ['Documentation', 'Design', 'Themes', 'Ilustrations', 'UI Kit'],
  },
  {
    heading: 'Comapny',
    links: ['About', 'Terms', 'Privacy Policy', 'Careers'],
  },
  {
    heading: 'More',
    links: ['Documentation', 'License', 'Changelog'],
  },
];

export const dashboardLinks = [
  { label: 'My Blogs', role: Role.GUEST, path: '/dashboard/blogs', icon: Edit },
  {
    label: 'My Comments',
    role: Role.GUEST,
    path: '/dashboard/comments',
    icon: MessageSquare,
  },

  {
    label: 'My Replies',
    role: Role.GUEST,
    path: '/dashboard/replies',
    icon: ReplyAllIcon,
  },

  {
    label: 'Categories',
    role: Role.ADMIN,
    path: '/dashboard/categories',
    icon: Folder,
  },
  { label: 'Tags', role: Role.ADMIN, path: '/dashboard/tags', icon: Tag },

  {
    label: 'Users',
    role: Role.ADMIN,
    path: '/dashboard/users',
    icon: User,
  },
  {
    label: 'Add Blog',
    role: Role.GUEST,
    path: '/dashboard/addBlog',
    icon: Plus,
  },
  {
    label: 'Add Tag',
    role: Role.GUEST,
    path: '/dashboard/addTag',
    icon: Plus,
  },
  {
    label: 'Add Category',
    role: Role.GUEST,
    path: '/dashboard/addCategory',
    icon: Plus,
  },
  {
    label: 'Blogs',
    role: Role.ADMIN,
    path: '/dashboard/all/blogs',
    icon: Edit,
  },
  {
    label: 'Replies',
    role: Role.ADMIN,
    path: '/dashboard/all/replies',
    icon: ReplyAllIcon,
  },
  {
    label: 'Comments',
    role: Role.ADMIN,
    path: '/dashboard/all/comments',
    icon: MessageSquare,
  },
];
