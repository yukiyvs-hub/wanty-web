export type CommunityCategory = "breed" | "area" | "worry" | "purpose" | "event";
export type PostType = "photo" | "video" | "diary" | "review" | "question";
export type SpotCategory = "cafe" | "dogrun" | "hotel" | "park" | "tourism" | "shop" | "event";

export type Community = {
  id: string;
  name: string;
  category: CommunityCategory;
  description: string;
  memberCount: number;
  postCount: number;
  tags: string[];
  latestPost: string;
};

export type Post = {
  id: string;
  authorName: string;
  petName: string;
  petBreed: string;
  area: string;
  type: PostType;
  title: string;
  body: string;
  tags: string[];
  likes: number;
  comments: number;
  saves: number;
  imageUrl?: string;
  relatedSpotId?: string;
  createdAt: string;
};

export type Spot = {
  id: string;
  name: string;
  area: string;
  category: SpotCategory;
  description: string;
  petPolicy: string;
  indoorAllowed: boolean;
  terraceAllowed: boolean;
  smallDogAllowed: boolean;
  largeDogAllowed: boolean;
  hasCoupon: boolean;
  reviewCount: number;
  saveCount: number;
  tags: string[];
  notes: string[];
};

export type Article = {
  id: string;
  title: string;
  category: "area" | "travel" | "breed" | "worry" | "spot" | "product" | "manner" | "event";
  excerpt: string;
  tags: string[];
  readTime: string;
  publishedAt: string;
};

export type User = {
  id: string;
  name: string;
  area: string;
  bio: string;
  following: number;
  followers: number;
};

export type Pet = {
  id: string;
  ownerId: string;
  name: string;
  species: string;
  breed: string;
  age: string;
  personality: string;
  likes: string[];
  dislikes: string[];
  favoriteAreas: string[];
};
