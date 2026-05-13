import type { CommunityCategory, PostType, SpotCategory } from "@/types";

export const communityCategoryLabels: Record<CommunityCategory, string> = {
  breed: "犬種別",
  area: "地域別",
  worry: "悩み別",
  purpose: "おでかけ目的別",
  event: "イベント別"
};

export const postTypeLabels: Record<PostType, string> = {
  photo: "写真投稿",
  video: "動画投稿",
  diary: "日記",
  review: "体験レビュー",
  question: "相談"
};

export const spotCategoryLabels: Record<SpotCategory, string> = {
  cafe: "カフェ",
  dogrun: "ドッグラン",
  hotel: "宿泊施設",
  park: "公園",
  tourism: "観光施設",
  shop: "ペット用品店",
  event: "イベント"
};
