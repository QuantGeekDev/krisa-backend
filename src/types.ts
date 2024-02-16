export interface KrisaStructure {
  krisaNumber: number;
  imageUrl: string;
}

export interface KrisaFromDb extends KrisaStructure {
  krisaId: string;
}

export interface TarotStructure {
  tarotNumber: number;
  imageUrl: string;
}

export interface TarotFromDb extends TarotStructure {
  tarotId: string;
}
