export interface Drop {
    name: string;
    quantity: 'normal' | 'low' | 'high';
}

export interface Mob {
    id: string;
    name: string;
    category: 'Mob Cage' | 'Terrarium' | 'Binding Plate';
    drops: Drop[];
    image: string;
}

export const getMobImage = (name: string) => `https://minecraft.wiki/images/${name}`;

export const getItemImage = (name: string) => {
    // Handle special cases manually if needed, otherwise use convention
    const formattedName = name.replace(/ /g, '_');
    return `https://minecraft.wiki/images/Invicon_${formattedName}.png`;
};

export const mobs: Mob[] = [
    // Mob Cage (Hostile)
    { id: 'evoker', name: 'Evoker', category: 'Mob Cage', drops: [{ name: 'Totem of Undying', quantity: 'normal' }, { name: 'Emerald', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Evoker_Summoning_Vexes.png' },
    { id: 'vindicator', name: 'Vindicator', category: 'Mob Cage', drops: [{ name: 'Emerald', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Vindicator_attacking.png' },
    {
        id: 'witch', name: 'Witch', category: 'Mob Cage', drops: [
            { name: 'Redstone', quantity: 'normal' }, { name: 'Sugar', quantity: 'normal' }, { name: 'Glowstone', quantity: 'normal' },
            { name: 'Stick', quantity: 'normal' }, { name: 'Glass Bottle', quantity: 'normal' }, { name: 'Gunpowder', quantity: 'normal' },
            { name: 'Spider Eye', quantity: 'normal' }
        ], image: 'https://minecraft.wiki/images/Witch_JE3.png'
    },
    { id: 'zombie', name: 'Zombie', category: 'Mob Cage', drops: [{ name: 'Rotten Flesh', quantity: 'normal' }, { name: 'Carrot', quantity: 'low' }, { name: 'Iron Ingot', quantity: 'low' }], image: 'https://minecraft.wiki/images/Zombie_JE3_BE2.png' },
    { id: 'zombie_villager', name: 'Zombie Villager', category: 'Mob Cage', drops: [{ name: 'Rotten Flesh', quantity: 'normal' }, { name: 'Potato', quantity: 'low' }, { name: 'Iron Ingot', quantity: 'low' }], image: 'https://minecraft.wiki/images/Plains_Zombie_Villager_Base_JE1_BE1.png' },
    { id: 'zoglin', name: 'Zoglin', category: 'Mob Cage', drops: [{ name: 'Rotten Flesh', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Zoglin_JE1.png' },
    { id: 'husk', name: 'Husk', category: 'Mob Cage', drops: [{ name: 'Rotten Flesh', quantity: 'normal' }, { name: 'Potato', quantity: 'low' }, { name: 'Iron Ingot', quantity: 'low' }], image: 'https://minecraft.wiki/images/Husk_JE2_BE2.png' },
    { id: 'drowned', name: 'Drowned', category: 'Mob Cage', drops: [{ name: 'Rotten Flesh', quantity: 'normal' }, { name: 'Copper Ingot', quantity: 'low' }], image: 'https://minecraft.wiki/images/Drowned_JE1.png' },
    { id: 'spider', name: 'Spider', category: 'Mob Cage', drops: [{ name: 'String', quantity: 'normal' }, { name: 'Spider Eye', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Spider_JE5_BE4.png' },
    { id: 'cave_spider', name: 'Cave Spider', category: 'Mob Cage', drops: [{ name: 'String', quantity: 'normal' }, { name: 'Spider Eye', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Cave_Spider_JE3_BE3.png' },
    { id: 'enderman', name: 'Enderman', category: 'Mob Cage', drops: [{ name: 'Ender Pearl', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Enderman_JE3_BE1.png' },
    { id: 'creeper', name: 'Creeper', category: 'Mob Cage', drops: [{ name: 'Gunpowder', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Creeper_JE3_BE1.png' },
    { id: 'skeleton', name: 'Skeleton', category: 'Mob Cage', drops: [{ name: 'Bone', quantity: 'normal' }, { name: 'Arrow', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Lefthandedskeleton.png' },
    { id: 'stray', name: 'Stray', category: 'Mob Cage', drops: [{ name: 'Arrow of Slowness', quantity: 'normal' }, { name: 'Bone', quantity: 'normal' }, { name: 'Arrow', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Stray_JE2_BE4.png' },
    { id: 'slime', name: 'Slime', category: 'Mob Cage', drops: [{ name: 'Slimeball', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Slime_JE3_BE2.png' },
    { id: 'wither_skeleton', name: 'Wither Skeleton', category: 'Mob Cage', drops: [{ name: 'Wither Skeleton Skull', quantity: 'normal' }, { name: 'Coal', quantity: 'normal' }, { name: 'Withered Bone', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Wither_Skeleton_JE4_BE3.png' },
    { id: 'blaze', name: 'Blaze', category: 'Mob Cage', drops: [{ name: 'Blaze Rod', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Blaze_JE2.gif' },
    { id: 'magma_cube', name: 'Magma Cube', category: 'Mob Cage', drops: [{ name: 'Magma Cream', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Magma_Cube_JE2_BE2.png' },
    { id: 'ghast', name: 'Ghast', category: 'Mob Cage', drops: [{ name: 'Gunpowder', quantity: 'normal' }, { name: 'Ghast Tear', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Ghast_JE3_BE3.gif' },
    { id: 'hoglin', name: 'Hoglin', category: 'Mob Cage', drops: [{ name: 'Raw Porkchop', quantity: 'normal' }, { name: 'Leather', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Hoglin_JE3.png' },
    { id: 'zombified_piglin', name: 'Zombified Piglin', category: 'Mob Cage', drops: [{ name: 'Gold Nugget', quantity: 'normal' }, { name: 'Gold Ingot', quantity: 'low' }, { name: 'Rotten Flesh', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Zombified_Piglin_BE6.png' },
    {
        id: 'guardian', name: 'Guardian', category: 'Mob Cage', drops: [
            { name: 'Prismarine Shard', quantity: 'normal' }, { name: 'Prismarine Crystals', quantity: 'normal' },
            { name: 'Raw Cod', quantity: 'normal' }, { name: 'Pufferfish', quantity: 'low' }, { name: 'Raw Salmon', quantity: 'low' }
        ], image: 'https://minecraft.wiki/images/Guardian_%28Retracted%29.png'
    },
    { id: 'phantom', name: 'Phantom', category: 'Mob Cage', drops: [{ name: 'Phantom Membrane', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Phantom_JE2.gif' },
    { id: 'shulker', name: 'Shulker', category: 'Mob Cage', drops: [{ name: 'Shulker Shell', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Shulker_JE1_BE1.png' },

    // Empty Mob Cage
    { id: 'piglin', name: 'Piglin', category: 'Mob Cage', drops: [], image: 'https://minecraft.wiki/images/Piglin_JE1.png' },
    { id: 'piglin_brute', name: 'Piglin Brute', category: 'Mob Cage', drops: [], image: 'https://minecraft.wiki/images/Piglin_Brute_JE1_BE1.png' },
    { id: 'silverfish', name: 'Silverfish', category: 'Mob Cage', drops: [], image: 'https://minecraft.wiki/images/thumb/Silverfish_JE1_BE1.gif/200px-Silverfish_JE1_BE1.gif' },
    { id: 'vex', name: 'Vex', category: 'Mob Cage', drops: [], image: 'https://minecraft.wiki/images/thumb/Vex_JE4.gif/150px-Vex_JE4.gif' },
    { id: 'pillager', name: 'Pillager', category: 'Mob Cage', drops: [], image: 'https://minecraft.wiki/images/thumb/Pillager_JE3.png/150px-Pillager_JE3.png' },
    { id: 'endermite', name: 'Endermite', category: 'Mob Cage', drops: [], image: 'https://minecraft.wiki/images/thumb/Endermite.gif/200px-Endermite.gif' },

    // Terrarium (Friendly)
    { id: 'chicken', name: 'Chicken', category: 'Terrarium', drops: [{ name: 'Raw Chicken', quantity: 'normal' }, { name: 'Feather', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Chicken_JE2_BE2.png' },
    { id: 'sheep', name: 'Sheep', category: 'Terrarium', drops: [{ name: 'Raw Mutton', quantity: 'normal' }, { name: 'Wool', quantity: 'normal' }], image: 'https://minecraft.wiki/images/White_Sheep_JE4_BE7.png' },
    { id: 'pig', name: 'Pig', category: 'Terrarium', drops: [{ name: 'Raw Porkchop', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Temperate_Pig_JE4_BE2.png' },
    { id: 'rabbit', name: 'Rabbit', category: 'Terrarium', drops: [{ name: 'Raw Rabbit', quantity: 'normal' }, { name: 'Rabbit Skin', quantity: 'normal' }, { name: 'Rabbit Foot', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Brown_Rabbit_JE2_BE2.png' },
    { id: 'cow', name: 'Cow', category: 'Terrarium', drops: [{ name: 'Raw Beef', quantity: 'normal' }, { name: 'Leather', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Cow_JE7_BE4.png' },
    { id: 'mooshroom', name: 'Mooshroom', category: 'Terrarium', drops: [{ name: 'Raw Beef', quantity: 'normal' }, { name: 'Leather', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Red_Mooshroom_JE5_BE3.png' },
    { id: 'panda', name: 'Panda', category: 'Terrarium', drops: [{ name: 'Bamboo', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Panda_JE1_BE1.png' },
    { id: 'turtle', name: 'Turtle', category: 'Terrarium', drops: [{ name: 'Seagrass', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Turtle_JE3_BE1.png' },
    { id: 'salmon', name: 'Salmon', category: 'Terrarium', drops: [{ name: 'Raw Salmon', quantity: 'normal' }, { name: 'Bone Meal', quantity: 'low' }], image: 'https://minecraft.wiki/images/Salmon.gif' },
    { id: 'pufferfish_passive', name: 'Pufferfish', category: 'Terrarium', drops: [{ name: 'Pufferfish', quantity: 'normal' }, { name: 'Bone Meal', quantity: 'low' }], image: 'https://minecraft.wiki/images/Pufferfish_small.gif' },
    { id: 'tropical_fish', name: 'Tropical Fish', category: 'Terrarium', drops: [{ name: 'Tropical Fish', quantity: 'normal' }, { name: 'Bone Meal', quantity: 'low' }], image: 'https://minecraft.wiki/images/Clownfish.png' },
    { id: 'cod', name: 'Cod', category: 'Terrarium', drops: [{ name: 'Raw Cod', quantity: 'normal' }, { name: 'Bone Meal', quantity: 'low' }], image: 'https://minecraft.wiki/images/Cod.gif' },
    { id: 'dolphin', name: 'Dolphin', category: 'Terrarium', drops: [{ name: 'Raw Cod', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Dolphin_JE1_BE2.png' },
    { id: 'polar_bear', name: 'Polar Bear', category: 'Terrarium', drops: [{ name: 'Raw Cod', quantity: 'normal' }, { name: 'Raw Salmon', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Polar_Bear_JE2_BE2.png' },
    { id: 'squid', name: 'Squid', category: 'Terrarium', drops: [{ name: 'Ink Sac', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Squid_JE2_BE2.gif' },
    { id: 'glow_squid', name: 'Glow Squid', category: 'Terrarium', drops: [{ name: 'Glow Ink Sac', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Glow_Squid_JE1.gif' },
    { id: 'strider', name: 'Strider', category: 'Terrarium', drops: [{ name: 'String', quantity: 'high' }], image: 'https://minecraft.wiki/images/Strider_JE2_BE2.gif' },
    { id: 'cat', name: 'Cat', category: 'Terrarium', drops: [{ name: 'String', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Tabby_Cat.png' },
    { id: 'parrot', name: 'Parrot', category: 'Terrarium', drops: [{ name: 'Feather', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Red_Parrot_JE1_BE1.png' },
    { id: 'donkey', name: 'Donkey', category: 'Terrarium', drops: [{ name: 'Leather', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Donkey_JE5.png' },
    { id: 'mule', name: 'Mule', category: 'Terrarium', drops: [{ name: 'Leather', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Mule_JE5.png' },
    { id: 'llama', name: 'Llama', category: 'Terrarium', drops: [{ name: 'Leather', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Brown_Llama_JE2_BE2.png' },
    { id: 'trader_llama', name: 'Trader Llama', category: 'Terrarium', drops: [{ name: 'Leather', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Brown_Trader_Llama.png' },
    { id: 'horse', name: 'Horse', category: 'Terrarium', drops: [{ name: 'Leather', quantity: 'normal' }], image: 'https://minecraft.wiki/images/White_Horse.png' },
    { id: 'zombie_horse', name: 'Zombie Horse', category: 'Terrarium', drops: [{ name: 'Rotten Flesh', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Zombie_Horse_JE6.png' },
    { id: 'zombie_skeleton_horse', name: 'Zombie Skeleton Horse', category: 'Terrarium', drops: [{ name: 'Bone', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Skeleton_Horse.png' },

    // Empty Terrarium
    { id: 'axolotl', name: 'Axolotl', category: 'Terrarium', drops: [], image: 'https://minecraft.wiki/images/thumb/Axolotl_Idle_Floor_Underwater.gif/1000px-Axolotl_Idle_Floor_Underwater.gif' },
    { id: 'bat', name: 'Bat', category: 'Terrarium', drops: [], image: 'https://minecraft.wiki/images/Bat_JE4_BE3.gif' },
    { id: 'bee', name: 'Bee', category: 'Terrarium', drops: [], image: 'https://minecraft.wiki/images/Bee_JE1.gif' },
    { id: 'goat', name: 'Goat', category: 'Terrarium', drops: [], image: 'https://minecraft.wiki/images/Goat_%28two_horns%29_JE1_BE1.png' },
    { id: 'fox', name: 'Fox', category: 'Terrarium', drops: [], image: 'https://minecraft.wiki/images/Fox_JE1_BE1.png' },
    { id: 'villager', name: 'Villager', category: 'Terrarium', drops: [], image: 'https://minecraft.wiki/images/Plains_Villager_Base_JE2.png' },
    { id: 'wolf', name: 'Wolf', category: 'Terrarium', drops: [], image: 'https://minecraft.wiki/images/Wolf_JE2_BE2.png' },
    { id: 'wandering_trader', name: 'Wandering Trader', category: 'Terrarium', drops: [], image: 'https://minecraft.wiki/images/thumb/Wandering_Trader_JE1_BE1.png/135px-Wandering_Trader_JE1_BE1.png' },
    { id: 'ocelot', name: 'Ocelot', category: 'Terrarium', drops: [], image: 'https://minecraft.wiki/images/thumb/Ocelot_JE2_BE2.png/150px-Ocelot_JE2_BE2.png' },

    // Boss (Binding Plate)
    {
        id: 'elder_guardian', name: 'Elder Guardian', category: 'Binding Plate', drops: [
            { name: 'Wet Sponge', quantity: 'normal' }, { name: 'Prismarine Shard', quantity: 'normal' },
            { name: 'Prismarine Crystals', quantity: 'normal' }, { name: 'Raw Cod', quantity: 'normal' }
        ], image: 'https://minecraft.wiki/images/Elder_Guardian_%28Retracted%29.png'
    },
    { id: 'ravager', name: 'Ravager', category: 'Binding Plate', drops: [{ name: 'Saddle', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Ravager_JE1.png' },
    { id: 'iron_golem', name: 'Iron Golem', category: 'Binding Plate', drops: [{ name: 'Iron Ingot', quantity: 'normal' }, { name: 'Poppy', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Iron_Golem_JE2_BE2.png' },
    { id: 'wither', name: 'Wither', category: 'Binding Plate', drops: [{ name: 'Nether Star', quantity: 'normal' }], image: 'https://minecraft.wiki/images/Wither_JE2_BE2.png' },
    { id: 'ender_dragon', name: 'Ender Dragon', category: 'Binding Plate', drops: [], image: 'https://minecraft.wiki/images/Ender_Dragon.gif' },

    // Special Mobs
    { id: 'flutter', name: 'Flutter', category: 'Terrarium', drops: [{ name: 'Spore Blossom', quantity: 'normal' }], image: '/mobs/flutter.png' },
];
