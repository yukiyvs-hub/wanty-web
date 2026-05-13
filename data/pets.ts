import type { Pet } from "@/types";

export const pets: Pet[] = [
  { id: "pet1", ownerId: "u1", name: "こむぎ", species: "犬", breed: "トイプードル", age: "3歳", personality: "慎重だけど慣れると甘えんぼ", likes: ["静かなカフェ", "ひざの上", "短い散歩"], dislikes: ["大きな音", "急な接近"], favoriteAreas: ["世田谷", "代々木", "吉祥寺"] },
  { id: "pet2", ownerId: "u2", name: "だいず", species: "犬", breed: "柴犬", age: "5歳", personality: "マイペースで朝が得意", likes: ["海沿い散歩", "芝生", "日向ぼっこ"], dislikes: ["混雑", "長い抱っこ"], favoriteAreas: ["横浜", "鎌倉"] },
  { id: "pet3", ownerId: "u3", name: "ブラン", species: "犬", breed: "フレンチブルドッグ", age: "2歳", personality: "人が好きで暑さに弱い", likes: ["室内遊び", "涼しい場所"], dislikes: ["暑い道", "階段"], favoriteAreas: ["中野", "新宿"] },
  { id: "pet4", ownerId: "u4", name: "ルーク", species: "犬", breed: "ゴールデンレトリバー", age: "4歳", personality: "穏やかで遊び好き", likes: ["水遊び", "広いラン"], dislikes: ["狭い通路"], favoriteAreas: ["柏", "印西"] },
  { id: "pet5", ownerId: "u5", name: "モカ", species: "犬", breed: "ミニチュアダックス", age: "12歳", personality: "のんびりで食いしんぼう", likes: ["段差の少ない宿", "カート散歩"], dislikes: ["長い階段"], favoriteAreas: ["那須", "軽井沢"] },
  { id: "pet6", ownerId: "u6", name: "テン", species: "犬", breed: "保護犬MIX", age: "4歳", personality: "慎重で観察上手", likes: ["静かな公園", "短い電車"], dislikes: ["来客", "大きな犬の急接近"], favoriteAreas: ["大宮", "浦和"] },
  { id: "pet7", ownerId: "u7", name: "ポポ", species: "犬", breed: "チワワ", age: "6歳", personality: "抱っこ好きで少し怖がり", likes: ["室内スポット", "カート"], dislikes: ["雨の音"], favoriteAreas: ["吉祥寺", "三鷹"] },
  { id: "pet8", ownerId: "u8", name: "ハナ", species: "犬", breed: "ラブラドール", age: "7歳", personality: "人懐っこく水辺が好き", likes: ["海", "日陰", "広い道"], dislikes: ["暑さ"], favoriteAreas: ["伊豆", "熱海"] },
  { id: "pet9", ownerId: "u9", name: "ラテ", species: "犬", breed: "ポメラニアン", age: "2歳", personality: "明るく好奇心旺盛", likes: ["撮影会", "小さなイベント"], dislikes: ["長い待ち時間"], favoriteAreas: ["印西", "柏"] },
  { id: "pet10", ownerId: "u10", name: "そら", species: "犬", breed: "コーギー", age: "3歳", personality: "元気で移動が好き", likes: ["電車移動", "公園", "新しい道"], dislikes: ["滑る床"], favoriteAreas: ["堀江", "天王寺"] }
];
