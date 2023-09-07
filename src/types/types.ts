
export interface Armor {
    _id: String,
    armorType: String,
    unlockLevel: String,
    armorRating: String,
    coldProtection: String,
    heatProtection: String,
    weight: String,
    durability: String,
    foundIn: String,
    ingredients: Ingredients[],
    url: String
}

export interface Ingredients {
    _id: String,
    quantity: Number,
    material: String
}

export interface Endpoint {
    data: String
    method: String,
    endpoint: String,
}

export interface Data {
    section: String,
    endpoints: Endpoint[]
}