let id = 1
let allAnimals = [
    {
        id: id++,
        name: 'Bengal Tiger',
        status: 'Endangered',
        population: '+2,500',
        weight: 'around 550 lbs',
        height: 'N/A',
        length: 'nearly 10 feet',
        habitat: 'dry and wet deciduous forests, grassland and temperate forests',
        info: 'The Bengal tiger is found primarily in India with smaller populations in Bangladesh, Nepal, Bhutan, China and Myanmar. It is the most numerous of all tiger subspecies with more than 2,500 left in the wild. The creation of India’s tiger reserves in the 1970s helped to stabilize numbers, but poaching to meet a growing demand from Asia in recent years has once again put the Bengal tiger at risk. The mangroves of the Sundarbans—shared between Bangladesh and India—are the only mangrove forests where tigers are found. The Sundarbans are increasingly threatened by sea level rise as a result of climate change.',
        food: 'deer & antelope',
        image: 'https://s3-eu-west-1.amazonaws.com/assets.barcroft.tv/8cee8835-cf43-4ad8-99f7-4b81f4a0f148.jpg'
    },
    {
        id: id++,
        name: 'Black Rhino',
        status: 'Critically Endangered',
        population: '5,000 - 5,400',
        height: '5.2 feet',
        weight: '1,700 - 3,000 lbs',
        length: 'N/A',
        habitat: 'semi-desert savannah, woodlands, forests, wetlands',
        info: 'Black rhinos are the smaller of the two African rhino species. The most notable difference between white and black rhinos are their hooked upper lip. This distinguishes them from the white rhino, which has a square lip. Black rhinos are browsers rather than grazers, and their pointed lip helps them feed on leaves from bushes and trees. They have two horns, and occasionally a third, small posterior horn.',
        food: 'plant based diet',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Ngorongoro_Spitzmaulnashorn_edit1.jpg',
    },
    {
        id: id++,
        name: 'Humpback Whale',
        status: 'Endangered',
        population: '60,000',
        weight: '80,000 lbs',
        length: '40 - 50 ft',
        height: 'N/A',
        habitat: 'all major oceans',
        info: `Humpbacks are mainly black or grey with white undersides to their flukes, flippers and bellies. They are 15m long. One of the most noticeable characteristics of humpback whales is their long flippers.
        Humpback whales are extremely active, often slapping their flippers and flukes on the surface of the sea. They also breach more than any other baleen whales. Humpbacks often feed in large groups and are famous for their "song." Male humpbacks produce a long series of calls that are normally heard during the winter breeding season, although songs have been recorded in the summer. The whales may repeat the same song for several hours.
        Humpback songs appear to be shared by all singing members in the same area of the ocean: as the song changes, all members sing the new song. The same song is sung in spite of the great distance between groups in the population (up to 5000km). This sharing of songs may occur when groups intermingle during migration or in shared summer feeding grounds.`,
        food: 'krill, anchovies, cod, sardines, mackerel and capelin',
        image: 'https://artwolfe.com/wp-content/uploads/2014/06/tonga_vavau_130814_5317-708x500.jpg'
    },
    {
        id: id++,
        name: 'Amur Leopard',
        status: 'Critically Endangered',
        population: '+84',
        weight: '70 - 105 lbs',
        height: 'N/A',
        length: 'N/A',
        habitat: 'Temparate, broadleaf, and mixed forests',
        info: `People usually think of leopards in the savannas of Africa but in the Russian Far East, a rare subspecies has adapted to life in the temperate forests that make up the northern-most part of the species’ range. Similar to other leopards, the Amur leopard can run at speeds of up to 37 miles per hour. This incredible animal has been reported to leap more than 19 feet horizontally and up to 10 feet vertically.
        The Amur leopard is solitary. Nimble-footed and strong, it carries and hides unfinished kills so that they are not taken by other predators. It has been reported that some males stay with females after mating, and may even help with rearing the young. Several males sometimes follow and fight over a female. They live for 10-15 years, and in captivity up to 20 years. The Amur leopard is also known as the Far East leopard, the Manchurian leopard or the Korean leopard.`,
        food: 'mainly hoofed animals, spotted deer and roe deer',
        image: 'https://lonelyplanetwpnews.imgix.net/2018/10/GettyImages-875637904.jpg'
    },
    {
        id: id++,
        name: 'Mountain Gorilla',
        status: 'Endangered',
        population: '+1,000',
        height: '4 - 5.5 ft',
        weight: '400 lbs',
        length: 'N/A',
        habitat: 'Congo Basin, forest, and mountains',
        info: `As their name implies, mountain gorillas live in forests high in the mountains, at elevations of 8,000 to 13,000 feet. They have thicker fur, and more of it, compared to other great apes. The fur helps them to survive in a habitat where temperatures often drop below freezing. But as humans have moved more and more into the gorillas’ territory, the gorillas have been pushed farther up into the mountains for longer periods, forcing them to endure dangerous and sometimes deadly conditions.
        What might have been a bleak outlook for the subspecies just a couple of decades ago has brightened in recent years due to conservation efforts. Despite ongoing civil conflict, poaching and an encroaching human population, both populations of mountain gorillas have increased in numbers`,
        food: 'plant base',
        image: 'https://c402277.ssl.cf1.rackcdn.com/photos/1719/images/hero_small/Mountain_Gorilla_8.10.2012_New_Hero_Image_HI_45487.jpg?1345601711'
    },
    {
        id: id++,
        name: 'Black-footed Ferret',
        status: 'Endangered',
        population: 'approximately 370',
        weight: '1.5 - 2.5 lbs',
        length: '18 - 24 inches',
        height: 'N/A',
        habitat: 'grasslands',
        info: `Once thought to be globally extinct, black-footed ferrets are making a comeback. For the last thirty years, concerted efforts from many state and federal agencies, zoos, Native American tribes, conservation organizations and private landowners have given black-footed ferrets a second chance for survival. Today, recovery efforts have helped restore the black-footed ferret population to nearly 300 animals across North America. Although great strides have been made to recover the black-footed ferret, habitat loss and disease remain key threats to this highly endangered species.`,
        food: ', prairie dogs, and other small mammals and reptiles, and bird eggs',
        image: 'https://c402277.ssl.cf1.rackcdn.com/photos/10656/images/hero_small/cbolt_09232015_DSC5470.jpg?1452537306'
    },
    {
        id: id++,
        name: 'African Wild Dog',
        status: 'Endangered',
        population: '1,409',
        height: '30 inches',
        weight: '40 - 70 lbs',
        length: '30 - 56 inches',
        habitat: 'deserts, forests, grasslands',
        info: `The wild dog is one of the world’s most endangered mammals. The largest populations remain in southern Africa and the southern part of East Africa (especially Tanzania and northern Mozambique).
        Wild dogs are social and gather in packs of around ten individuals, but some packs number more than 40. They are opportunistic predators that hunt medium-sized ruminants, such as gazelles. In a sprint, African wild dogs can reach speeds of more than 44 miles per hour.`,
        food: 'warthogs (pumba), antelope, and other large mammals',
        image: 'https://c402277.ssl.cf1.rackcdn.com/photos/10341/images/hero_small/wild_dogs-web.jpg?1447180370'
    },
    {
        id: id++,
        name: 'Giant Panda',
        status: 'Vulnerable',
        population: '1,800 in the wild',
        height: '4 ft',
        weight: '220 - 330 lbs',
        length: 'N/A',
        habitat: 'temerate broadleaf and mixed forests of southwest china',
        info: `This peaceful creature with a distinctive black and white coat is adored by the world and considered a national treasure in China. The panda also has a special significance for WWF because it has been WWF's logo since our founding in 1961.
        Pandas live mainly in bamboo forests high in the mountains of western China, where they subsist almost entirely on bamboo. They must eat from 26 to 84 pounds of it every day, a formidable task for which they use their enlarged wrist bones that function as opposable thumbs.
        A newborn panda is about the size of a stick of butter—about 1/900th the size of its mother—but can grow to up to 330 pounds as an adult. These bears are excellent tree climbers despite their bulk. `,
        food: 'plant base, bamboo',
        image: 'http://images.china.cn/attachement/jpg/site1007/20170811/f44d307d90cc1af7498d0a.jpg'
    },
    {
        id: id++,
        name: 'Hippopotamus',
        status: 'Vulnerable',
        population: '115,000 - 130,000',
        weight: '3,000 - 4,000 lbs',
        height: 'N/A',
        length: 'N/A',
        habitat: 'rivers, wetlands',
        info: `The hippopotamus, also known as the “river horse,” lives along the rivers and lakes throughout sub-Saharan Africa. Weighing up to 8,000 pounds, the hippo is the heaviest land animal after the elephant. Hippos seek refuge from the heat by living in water during the day, and at night they come ashore to feed on short, soft grasses and fallen fruit. The eyes and ears of a hippopotamus are on top of its head, so it can keep watch for enemies—mainly crocodiles—while lying low in the water. These giants are currently at risk from habitat loss`,
        food: 'plant base',
        image: 'https://i0.wp.com/www.whats-your-sign.com/wp-content/uploads/2018/03/HippopotamusMeaning3.jpg?fit=1600%2C1067&ssl=1'
    },
    {
        id: id++,
        name: 'Artic Wolf',
        status: 'Least Concern',
        population: 'N/A',
        weight: '70 - 175 lbs',
        length: '3.2 - 5.9 ft',
        height: 'N/A',
        habitat: 'tundra',
        info: 'Often called the "polar wolf" or "white wolf," Arctic wolves inhabit the Arctic regions of North America and Greenland. Thanks to its isolation, the Arctic wolf is not threatened by hunting and habitat destruction in the same way as its southern relatives.',
        food: 'musk oxen and artic hare',
        image: 'https://i.pinimg.com/originals/19/49/0e/19490e58f9ea5fd500ada53cce99a95d.jpg'
    },
    {
        id: id++,
        name: 'Tree Kangaroo',
        status: 'Least Concern',
        population: 'N/A',
        height: 'N/A',
        weight: 'up to 32 lbs',
        length: '16 - 30 inches, tail length additional 16 - 34 inches',
        habitat: 'mountains, forest',
        info: `The same factors that threaten the golden-mantled tree kangaroo also put many of the 13 other tree kangaroo species at risk. Many tree kangaroo species are incredibly rare and most are decreasing in number. These animals represent an interesting divergence in the evolution of Macropods—the family of marsupials that includes kangaroos and wallabies. Macropods were once all tree dwellers but millions of years ago they descended from the trees to live on the ground. The ancestors of tree kangaroos eventually headed back up into the foliage and they are now the largest tree-dwelling mammals in Australia.
        Tree kangaroos live in lowland and mountainous rainforests in Papua New Guinea, Indonesia and the far north of Queensland, Australia. They have adapted to life in the trees, with shorter legs and stronger forelimbs for climbing, giving them somewhat of the appearance of a cross between a kangaroo and a lemur.`,
        food: 'leafs, and fruit',
        image: 'http://d2ouvy59p0dg6k.cloudfront.net/img/tree_kangaroo_1_364785.jpg'
    },
    {
        id: id++,
        name: 'Bald Eagle',
        status: 'Vulnerable',
        population: '10,000',
        height: '30 - 34 inches',
        weight: '10 - 14 lbs',
        length: 'N/A',
        habitat: 'North America, forests near water',
        info: `Bald eagles are large birds of prey native to North America. Since 1782, the bald eagle has been the United States' national emblem and mascot. The bald eagle isn't actually bald; it gets its name because its white head against its dark brown body makes it seem bald from a distance. 
        Even though they are a symbol for freedom in the United States, these birds are known for harassing smaller birds and stealing their prey, according to the Cornell Lab of Ornithology. According to PBS Nature, Benjamin Franklin once said, "For my own part, I wish the bald eagle had not been chosen the representative of our country. He is a bird of bad moral character. He does not get his living honestly. … Besides he is a rank coward: The little king bird not bigger than a sparrow, attacks him boldly, and drives him out of the district." Franklin wanted the wild turkey to be the national bird, according to the American Eagle Foundation.`,
        food: 'fish',
        image: 'https://i.pinimg.com/originals/5e/9a/b2/5e9ab262e48e8466c21c748400860883.jpg'
    },
    {
        id: id++,
        name: 'Lion',
        status: 'Least Concern',
        population: 'N/A',
        height: '4 ft',
        weight: '200 - 400 lbs',
        length: 'N/A',
        habitat: 'grasslands',
        info: `King of the land! Living in the grasslands, scrub, and open woodlands of sub-Saharan Africa, the lion is the second largest cat in the world. It is dwarfed slightly by the tiger, which is closely related and has a very similar body type.
        Unlike other cats, lions are very social animals. They live in groups, called prides, of around 30 lions. A pride consists of up to three males, a dozen related females, and their young. The size of the pride is determined by the availability of food and water. If resources are scarce, the pride becomes smaller.
        Pride members keep track of one another by roaring. Both males and females have a very powerful roar that can be heard up to 8 km (5 mi.) away.
        Males and females take on very different roles in the pride. Male lions spend their time guarding their territory and their cubs. They maintain the boundaries of their territory, which can be as large as 260 sq. km (100 sq. mi.), by roaring, marking it with urine, and chasing off intruders. Their thick manes, a unique trait to male lions, protect their necks when they fight with challengers.`,
        food: 'large mammals',
        image: 'https://cdn.images.express.co.uk/img/dynamic/20/750x445/1049612.jpg'
    },
    {
        id: id++,
        name: 'Golden Retriever',
        status: 'The Goodest of Boys',
        population: 'N/A',
        height: '20 - 25 inches',
        weight: '55 - 75 lbs',
        length: 'N/A',
        habitat: 'homes or backyards',
        info: `The Golden Retriever is a large-sized breed of dog bred as gun dogs to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties, and were named 'retriever' because of their ability to retrieve shot game undamaged.`,
        food: 'processed dog food and bird wings',
        image: 'https://www.thesprucepets.com/thmb/skYeQH255WxPaNzYWREDRfLgqFQ=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/golden-retriever-sitting-down-in-a-farm-837898820-5c7854ff46e0fb00011bf29a.jpg'
    }
]
        
module.exports = {
    allAnimals
}