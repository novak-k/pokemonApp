const f = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  const json = await res.json()
  return json.results.map(it => it.name).reduce((acc, curr) => acc = acc.length > curr.lenght ? acc : curr, "")
}

f().then(res => console.log(res)) //miraidon-glide-mode the longest Pokemon name for a proper h1 size


const getAll = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  const json = await res.json()
  const urls = json.results.map(it => it.url)
  const results = await Promise.all(urls.map(url => p(url)))
  const arr = results.flatMap(it => it)
  const s = new Set(arr)
  return s;
}

const p = async (url) => {
  const res = await fetch(url)
  const json = await res.json()
  const arr = json.types.map(it => it.type.name)
  return arr;
}

getAll().then(res => console.log(res))

p().then(res => console.log(res))

//Set(18) different badges for icons search {
'grass', //IconLeaf+
  'poison', //IconBiohazard+
  'fire', //IconFlame+
  'flying', //IconButterfly+
  'water', //IconDroplet+
  'bug', //IconBug+
  'normal', //IconActivity+
  'electric', //IconBolt+
  'ground', //IconWorld+
  'fairy', //IconWand+
  'fighting', //IconKarate+
  'psychic', //IconBrandSupernova+
  'rock', //IconHandRock+
  'steel', //IconWreckingBall+
  'ice', //IconIceCream2 IconBox+
  'ghost', //IconGhost2+
  'dragon', //IconAlien+
  'dark' //IconMoonFilled+
// }


const getAllAb = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  const json = await res.json()
  const urls = json.results.map(it => it.url)
  const results = await Promise.all(urls.map(url => a(url)))
  const arr = results.flatMap(it => it)
  const s = new Set(arr)
  return s;
}

const a = async (url) => {
  const res = await fetch(url)
  const json = await res.json()
  const arr = json.abilities.map(it => it.ability.name)
  return arr;
}

getAllAb().then(res => console.log(res))


// Set(298) a lot of items for specific styling {
'overgrow',
  'chlorophyll',
  'blaze',
  'solar-power',
  'torrent',
  'rain-dish',
  'shield-dust',
  'run-away',
  'shed-skin',
  'compound-eyes',
  'tinted-lens',
  'swarm',
  'sniper',
  'keen-eye',
  'tangled-feet',
  'big-pecks',
  'guts',
  'hustle',
  'intimidate',
  'unnerve',
  'static',
  'lightning-rod',
  'sand-veil',
  'sand-rush',
  'poison-point',
  'rivalry',
  'sheer-force',
  'cute-charm',
  'magic-guard',
  'friend-guard',
  'unaware',
  'flash-fire',
  'drought',
  'competitive',
  'frisk',
  'inner-focus',
  'infiltrator',
  'stench',
  'effect-spore',
  'dry-skin',
  'damp',
  'wonder-skin',
  'arena-trap',
  'sand-force',
  'pickup',
  'technician',
  'limber',
  'cloud-nine',
  'swift-swim',
  'vital-spirit',
  'anger-point',
  'defiant',
  'justified',
  'water-absorb',
  'synchronize',
  'no-guard',
  'steadfast',
  'gluttony',
  'clear-body',
  'liquid-ooze',
  'rock-head',
  'sturdy',
  'flame-body',
  'oblivious',
  'own-tempo',
  'regenerator',
  'magnet-pull',
  'analytic',
  'early-bird',
  'thick-fat',
  'hydration',
  'ice-body',
  'sticky-hold',
  'poison-touch',
  'shell-armor',
  'skill-link',
  'overcoat',
  'levitate',
  'cursed-body',
  'weak-armor',
  'insomnia',
  'forewarn',
  'hyper-cutter',
  'soundproof',
  'aftermath',
  'harvest',
  'battle-armor',
  'reckless',
  'unburden',
  'iron-fist',
  'neutralizing-gas',
  'natural-cure',
  'serene-grace',
  'healer',
  'leaf-guard',
  'scrappy',
  'water-veil',
  'illuminate',
  'filter',
  'mold-breaker',
  'moxie',
  'rattled',
  'imposter',
  'adaptability',
  'anticipation',
  'volt-absorb',
  'quick-feet',
  'trace',
  'download',
  'pressure',
  'immunity',
  'snow-cloak',
  'marvel-scale',
  'multiscale',
  'super-luck',
  'magic-bounce',
  'plus',
  'huge-power',
  'sap-sipper',
  'drizzle',
  'speed-boost',
  'prankster',
  'shadow-tag',
  'telepathy',
  'light-metal',
  'contrary',
  'pickpocket',
  'honey-gather',
  'magma-armor',
  'moody',
  'suction-cups',
  'sand-stream',
  'poison-heal',
  'truant',
  'wonder-guard',
  'normalize',
  'stall',
  'heavy-metal',
  'pure-power',
  'minus',
  'rough-skin',
  'simple',
  'solid-rock',
  'white-smoke',
  'toxic-boost',
  'storm-drain',
  'forecast',
  'color-change',
  'protean',
  'air-lock',
  'flower-gift',
  'flare-boost',
  'klutz',
  'heatproof',
  'snow-warning',
  'motor-drive',
  'sharpness',
  'slow-start',
  'bad-dreams',
  'multitype',
  'victory-star',
  'zen-mode',
  'mummy',
  'defeatist',
  'illusion',
  'iron-barbs',
  'slush-rush',
  'turboblaze',
  'teravolt',
  'bulletproof',
  'magician',
  'cheek-pouch',
  'gale-wings',
  'flower-veil',
  'symbiosis',
  'grass-pelt',
  'fur-coat',
  'stance-change',
  'aroma-veil',
  'sweet-veil',
  'tough-claws',
  'mega-launcher',
  'strong-jaw',
  'refrigerate',
  'pixilate',
  'gooey',
  'fairy-aura',
  'dark-aura',
  'aura-break',
  'long-reach',
  'liquid-voice',
  'stakeout',
  'battery',
  'dancer',
  'schooling',
  'merciless',
  'stamina',
  'water-bubble',
  'corrosion',
  'fluffy',
  'queenly-majesty',
  'triage',
  'receiver',
  'wimp-out',
  'emergency-exit',
  'water-compaction',
  'innards-out',
  'rks-system',
  'shields-down',
  'comatose',
  'disguise',
  'dazzling',
  'berserk',
  'steelworker',
  'electric-surge',
  'psychic-surge',
  'grassy-surge',
  'misty-surge',
  'full-metal-body',
  'shadow-shield',
  'beast-boost',
  'prism-armor',
  'soul-heart',
  'libero',
  'mirror-armor',
  'cotton-down',
  'ball-fetch',
  'steam-engine',
  'ripen',
  'sand-spit',
  'gulp-missile',
  'propeller-tail',
  'punk-rock',
  'steely-spirit',
  'perish-body',
  'screen-cleaner',
  'wandering-spirit',
  'ice-scales',
  'power-spot',
  'ice-face',
  'hunger-switch',
  'stalwart',
  'intrepid-sword',
  'dauntless-shield',
  'unseen-fist',
  'transistor',
  'dragons-maw',
  'chilling-neigh',
  'grim-neigh',
  'lingering-aroma',
  'well-baked-body',
  'seed-sower',
  'purifying-salt',
  'electromorphosis',
  'wind-power',
  'guard-dog',
  'wind-rider',
  'mycelium-might',
  'anger-shell',
  'opportunist',
  'rocky-payload',
  'zero-to-hero',
  'earth-eater',
  'toxic-debris',
  'costar',
  'commander',
  'cud-chew',
  'armor-tail',
  'supreme-overlord',
  'protosynthesis',
  'quark-drive',
  'thermal-exchange',
  'good-as-gold',
  'tablets-of-ruin',
  'sword-of-ruin',
  'vessel-of-ruin',
  'beads-of-ruin',
  'orichalcum-pulse',
  'hadron-engine',
  'parental-bond',
  'aerilate',
  'primordial-sea',
  'desolate-land',
  'delta-stream',
  'surge-surfer',
  'tangling-hair',
  'galvanize',
  'power-of-alchemy',
  'battle-bond',
  'power-construct',
  'neuroforce',
  'pastel-veil',
  'quick-draw',
  'curious-medicine',
  'gorilla-tactics',
  'mimicry',
  'as-one-glastrier',
  'as-one-spectrier'
// }
