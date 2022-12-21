export type IWineProduct = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    wineTaste: PublishStatus;
    wineColour: PublishStatus;
    drinkWithTags: DrinkWithTag[];
    quantity: number;
    productionYear: number;
    capacity: number;
    alcoholContent: number;
    priceGross: number;
    priceNet: number;
    productionRegion: ProductionRegion;
    productionStrains: ProductionStrain[];
    wineAromas: DrinkWithTag[];
    publishStatus: PublishStatus;
    profitMargin: number;
    wineRatings: WineRating[];
    averageRating: number;
    ratingsCount: number;
};

export type DrinkWithTag = {
    id: number;
    imageUrl: string;
    name: string;
};

export type ProductionRegion = {
    id: number;
    name: string;
    description: string;
};

export type ProductionStrain = {
    productionStrainId: number;
    productionStrainName: string;
    productionStrainDescription: string;
    amount: number;
};

export type PublishStatus = {
    id: number;
    name: string;
};

export type WineRating = {
    id: number;
    starsCount: number;
    comment: string;
    userName: string;
    userId: number;
    createdAt: Date;
};
