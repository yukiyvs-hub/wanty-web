import type { Community } from "@/types";

export const communities: Community[] = [
  { id: "toy-poodle", name: "トイプードル部", category: "breed", description: "毛のお手入れ、カフェ慣れ、おでかけ先をゆるく共有。", memberCount: 8420, postCount: 1280, tags: ["犬種別", "小型犬", "お手入れ"], latestPost: "涙やけケアでよかった習慣を教えてください" },
  { id: "shiba", name: "柴犬部", category: "breed", description: "柴犬らしい距離感や散歩コースの話が集まります。", memberCount: 7280, postCount: 1124, tags: ["犬種別", "散歩", "性格"], latestPost: "換毛期の掃除、みんな何を使ってる？" },
  { id: "french-bulldog", name: "フレンチブルドッグ部", category: "breed", description: "暑さ対策、短時間散歩、室内スポットの知恵袋。", memberCount: 5360, postCount: 918, tags: ["犬種別", "暑さ対策", "室内"], latestPost: "夏前に行きやすい屋内カフェまとめ" },
  { id: "large-dogs", name: "大型犬部", category: "breed", description: "大型犬OKの施設や移動、暮らしの工夫を共有。", memberCount: 4210, postCount: 732, tags: ["大型犬", "施設", "移動"], latestPost: "大型犬でも席間に余裕があったお店" },
  { id: "rescue-dogs", name: "保護犬部", category: "worry", description: "新しい暮らしに慣れるまでの記録と相談の場。", memberCount: 3860, postCount: 604, tags: ["保護犬", "相談", "暮らし"], latestPost: "来客が苦手な子への慣らし方" },
  { id: "senior-dogs", name: "シニア犬との暮らし部", category: "worry", description: "足腰、食事、おでかけペースを無理なく話せます。", memberCount: 5120, postCount: 940, tags: ["シニア犬", "健康", "旅行"], latestPost: "段差が少ない宿を探しています" },
  { id: "tokyo-cafe", name: "東京ペット可カフェ部", category: "area", description: "東京の店内OK、テラスOK、落ち着けるカフェ情報。", memberCount: 9540, postCount: 1642, tags: ["東京", "カフェ", "店内OK"], latestPost: "雨の日でも入りやすかったカフェ" },
  { id: "yokohama-walk", name: "横浜おさんぽ部", category: "area", description: "海沿い、公園、帰りに寄れるスポットを共有。", memberCount: 4680, postCount: 810, tags: ["横浜", "散歩", "公園"], latestPost: "夕方の山下公園が歩きやすかったです" },
  { id: "chiba-dogrun", name: "千葉ドッグラン部", category: "purpose", description: "広さ、混雑、犬見知りの子の過ごし方まで。", memberCount: 3920, postCount: 688, tags: ["千葉", "ドッグラン", "犬見知り"], latestPost: "平日午前が穏やかだったラン" },
  { id: "nasu-trip", name: "那須旅行部", category: "purpose", description: "週末旅行、宿、観光、休憩スポットの体験談。", memberCount: 3410, postCount: 540, tags: ["那須", "旅行", "宿泊"], latestPost: "シニア犬と無理なく回れた半日プラン" },
  { id: "rainy-day", name: "雨の日おでかけ部", category: "purpose", description: "雨でも助かった屋内施設や持ち物を集めます。", memberCount: 2880, postCount: 456, tags: ["雨の日", "屋内", "カフェ"], latestPost: "滑りにくい床だった室内スポット" },
  { id: "events", name: "週末イベント部", category: "event", description: "マルシェ、撮影会、譲渡会などのお知らせと感想。", memberCount: 2760, postCount: 520, tags: ["イベント", "週末", "地域"], latestPost: "混雑前に楽しめたマルシェの時間帯" }
];
