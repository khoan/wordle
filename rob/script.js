/*

NEXT GOAL:

refactor code so that the current tile is found via a class name rather than a saved index in the array

*/

// VARIABLES //

//array of potential wordles
const words = ["cigar", "rebut", "sissy", "humph", "awake", "blush", "focal", "evade", "naval", "serve", "heath", "dwarf", "model", "karma", "stink", "grade", "quiet", "bench", "abate", "feign", "major", "death", "fresh", "crust", "stool", "colon", "abase", "marry", "react", "batty", "pride", "floss", "helix", "croak", "staff", "paper", "unfed", "whelp", "trawl", "outdo", "adobe", "crazy", "sower", "repay", "digit", "crate", "cluck", "spike", "mimic", "pound", "maxim", "linen", "unmet", "flesh", "booby", "forth", "first", "stand", "belly", "ivory", "seedy", "print", "yearn", "drain", "bribe", "stout", "panel", "crass", "flume", "offal", "agree", "error", "swirl", "argue", "bleed", "delta", "flick", "totem", "wooer", "front", "shrub", "parry", "biome", "lapel", "start", "greet", "goner", "golem", "lusty", "loopy", "round", "audit", "lying", "gamma", "labor", "islet", "civic", "forge", "corny", "moult", "basic", "salad", "agate", "spicy", "spray", "essay", "fjord", "spend", "kebab", "guild", "aback", "motor", "alone", "hatch", "hyper", "thumb", "dowry", "ought", "belch", "dutch", "pilot", "tweed", "comet", "jaunt", "enema", "steed", "abyss", "growl", "fling", "dozen", "boozy", "erode", "world", "gouge", "click", "briar", "great", "altar", "pulpy", "blurt", "coast", "duchy", "groin", "fixer", "group", "rogue", "badly", "smart", "pithy", "gaudy", "chill", "heron", "vodka", "finer", "surer", "radio", "rouge", "perch", "retch", "wrote", "clock", "tilde", "store", "prove", "bring", "solve", "cheat", "grime", "exult", "usher", "epoch", "triad", "break", "rhino", "viral", "conic", "masse", "sonic", "vital", "trace", "using", "peach", "champ", "baton", "brake", "pluck", "craze", "gripe", "weary", "picky", "acute", "ferry", "aside", "tapir", "troll", "unify", "rebus", "boost", "truss", "siege", "tiger", "banal", "slump", "crank", "gorge", "query", "drink", "favor", "abbey", "tangy", "panic", "solar", "shire", "proxy", "point", "robot", "prick", "wince", "crimp", "knoll", "sugar", "whack", "mount", "perky", "could", "wrung", "light", "those", "moist", "shard", "pleat", "aloft", "skill", "elder", "frame", "humor", "pause", "ulcer", "ultra", "robin", "cynic", "aroma", "caulk", "shake", "dodge", "swill", "tacit", "other", "thorn", "trove", "bloke", "vivid", "spill", "chant", "choke", "rupee", "nasty", "mourn", "ahead", "brine", "cloth", "hoard", "sweet", "month", "lapse", "watch", "today", "focus", "smelt", "tease", "cater", "movie", "saute", "allow", "renew", "their", "slosh", "purge", "chest", "depot", "epoxy", "nymph", "found", "shall", "stove", "lowly", "snout", "trope", "fewer", "shawl", "natal", "comma", "foray", "scare", "stair", "black", "squad", "royal", "chunk", "mince", "shame", "cheek", "ample", "flair", "foyer", "cargo", "oxide", "plant", "olive", "inert", "askew", "heist", "shown", "zesty", "trash", "larva", "forgo", "story", "hairy", "train", "homer", "badge", "midst", "canny", "shine", "gecko", "farce", "slung", "tipsy", "metal", "yield", "delve", "being", "scour", "glass", "gamer", "scrap", "money", "hinge", "album", "vouch", "asset", "tiara", "crept", "bayou", "atoll", "manor", "creak", "showy", "phase", "froth", "depth", "gloom", "flood", "trait", "girth", "piety", "goose", "float", "donor", "atone", "primo", "apron", "blown", "cacao", "loser", "input", "gloat", "awful", "brink", "smite", "beady", "rusty", "retro", "droll", "gawky", "hutch", "pinto", "egret", "lilac", "sever", "field", "fluff", "agape", "voice", "stead", "berth", "madam", "night", "bland", "liver", "wedge", "roomy", "wacky", "flock", "angry", "trite", "aphid", "tryst", "midge", "power", "elope", "cinch", "motto", "stomp", "upset", "bluff", "cramp", "quart", "coyly", "youth", "rhyme", "buggy", "alien", "smear", "unfit", "patty", "cling", "glean", "label", "hunky", "khaki", "poker", "gruel", "twice", "twang", "shrug", "treat", "waste", "merit", "woven", "needy", "clown", "irony", "ruder", "gauze", "chief", "onset", "prize", "fungi", "charm", "gully", "inter", "whoop", "taunt", "leery", "class", "theme", "lofty", "tibia", "booze", "alpha", "thyme", "doubt", "parer", "chute", "stick", "trice", "alike", "recap", "saint", "glory", "grate", "admit", "brisk", "soggy", "usurp", "scald", "scorn", "leave", "twine", "sting", "bough", "marsh", "sloth", "dandy", "vigor", "howdy", "enjoy", "valid", "ionic", "equal", "floor", "catch", "spade", "stein", "exist", "quirk", "denim", "grove", "spiel", "mummy", "fault", "foggy", "flout", "carry", "sneak", "libel", "waltz", "aptly", "piney", "inept", "aloud", "photo", "dream", "stale", "unite", "snarl", "baker", "there", "glyph", "pooch", "hippy", "spell", "folly", "louse", "gulch", "vault", "godly", "threw", "fleet", "grave", "inane", "shock", "crave", "spite", "valve", "skimp", "claim", "rainy", "musty", "pique", "daddy", "quasi", "arise", "aging", "valet", "opium", "avert", "stuck", "recut", "mulch", "genre", "plume", "rifle", "count", "incur", "total", "wrest", "mocha", "deter", "study", "lover", "safer", "rivet", "funny", "smoke", "mound", "undue", "sedan", "pagan", "swine", "guile", "gusty", "equip", "tough", "canoe", "chaos", "covet", "human", "udder", "lunch", "blast", "stray", "manga", "melee", "lefty", "quick", "paste", "given", "octet", "risen", "groan", "leaky", "grind", "carve", "loose", "sadly", "spilt", "apple", "slack", "honey", "final", "sheen", "eerie", "minty", "slick", "derby", "wharf", "spelt", "coach", "erupt", "singe", "price", "spawn", "fairy", "jiffy", "filmy", "stack", "chose", "sleep", "ardor", "nanny", "niece", "woozy", "handy", "grace", "ditto", "stank", "cream", "usual", "diode", "valor", "angle", "ninja", "muddy", "chase", "reply", "prone", "spoil", "heart", "shade", "diner", "arson", "onion", "sleet", "dowel", "couch", "palsy", "bowel", "smile", "evoke", "creek", "lance", "eagle", "idiot", "siren", "built", "embed", "award", "dross", "annul", "goody", "frown", "patio", "laden", "humid", "elite", "lymph", "edify", "might", "reset", "visit", "gusto", "purse", "vapor", "crock", "write", "sunny", "loath", "chaff", "slide", "queer", "venom", "stamp", "sorry", "still", "acorn", "aping", "pushy", "tamer", "hater", "mania", "awoke", "brawn", "swift", "exile", "birch", "lucky", "freer", "risky", "ghost", "plier", "lunar", "winch", "snare", "nurse", "house", "borax", "nicer", "lurch", "exalt", "about", "savvy", "toxin", "tunic", "pried", "inlay", "chump", "lanky", "cress", "eater", "elude", "cycle", "kitty", "boule", "moron", "tenet", "place", "lobby", "plush", "vigil", "index", "blink", "clung", "qualm", "croup", "clink", "juicy", "stage", "decay", "nerve", "flier", "shaft", "crook", "clean", "china", "ridge", "vowel", "gnome", "snuck", "icing", "spiny", "rigor", "snail", "flown", "rabid", "prose", "thank", "poppy", "budge", "fiber", "moldy", "dowdy", "kneel", "track", "caddy", "quell", "dumpy", "paler", "swore", "rebar", "scuba", "splat", "flyer", "horny", "mason", "doing", "ozone", "amply", "molar", "ovary", "beset", "queue", "cliff", "magic", "truce", "sport", "fritz", "edict", "twirl", "verse", "llama", "eaten", "range", "whisk", "hovel", "rehab", "macaw", "sigma", "spout", "verve", "sushi", "dying", "fetid", "brain", "buddy", "thump", "scion", "candy", "chord", "basin", "march", "crowd", "arbor", "gayly", "musky", "stain", "dally", "bless", "bravo", "stung", "title", "ruler", "kiosk", "blond", "ennui", "layer", "fluid", "tatty", "score", "cutie", "zebra", "barge", "matey", "bluer", "aider", "shook", "river", "privy", "betel", "frisk", "bongo", "begun", "azure", "weave", "genie", "sound", "glove", "braid", "scope", "wryly", "rover", "assay", "ocean", "bloom", "irate", "later", "woken", "silky", "wreck", "dwelt", "slate", "smack", "solid", "amaze", "hazel", "wrist", "jolly", "globe", "flint", "rouse", "civil", "vista", "relax", "cover", "alive", "beech", "jetty", "bliss", "vocal", "often", "dolly", "eight", "joker", "since", "event", "ensue", "shunt", "diver", "poser", "worst", "sweep", "alley", "creed", "anime", "leafy", "bosom", "dunce", "stare", "pudgy", "waive", "choir", "stood", "spoke", "outgo", "delay", "bilge", "ideal", "clasp", "seize", "hotly", "laugh", "sieve", "block", "meant", "grape", "noose", "hardy", "shied", "drawl", "daisy", "putty", "strut", "burnt", "tulip", "crick", "idyll", "vixen", "furor", "geeky", "cough", "naive", "shoal", "stork", "bathe", "aunty", "check", "prime", "brass", "outer", "furry", "razor", "elect", "evict", "imply", "demur", "quota", "haven", "cavil", "swear", "crump", "dough", "gavel", "wagon", "salon", "nudge", "harem", "pitch", "sworn", "pupil", "excel", "stony", "cabin", "unzip", "queen", "trout", "polyp", "earth", "storm", "until", "taper", "enter", "child", "adopt", "minor", "fatty", "husky", "brave", "filet", "slime", "glint", "tread", "steal", "regal", "guest", "every", "murky", "share", "spore", "hoist", "buxom", "inner", "otter", "dimly", "level", "sumac", "donut", "stilt", "arena", "sheet", "scrub", "fancy", "slimy", "pearl", "silly", "porch", "dingo", "sepia", "amble", "shady", "bread", "friar", "reign", "dairy", "quill", "cross", "brood", "tuber", "shear", "posit", "blank", "villa", "shank", "piggy", "freak", "which", "among", "fecal", "shell", "would", "algae", "large", "rabbi", "agony", "amuse", "bushy", "copse", "swoon", "knife", "pouch", "ascot", "plane", "crown", "urban", "snide", "relay", "abide", "viola", "rajah", "straw", "dilly", "crash", "amass", "third", "trick", "tutor", "woody", "blurb", "grief", "disco", "where", "sassy", "beach", "sauna", "comic", "clued", "creep", "caste", "graze", "snuff", "frock", "gonad", "drunk", "prong", "lurid", "steel", "halve", "buyer", "vinyl", "utile", "smell", "adage", "worry", "tasty", "local", "trade", "finch", "ashen", "modal", "gaunt", "clove", "enact", "adorn", "roast", "speck", "sheik", "missy", "grunt", "snoop", "party", "touch", "mafia", "emcee", "array", "south", "vapid", "jelly", "skulk", "angst", "tubal", "lower", "crest", "sweat", "cyber", "adore", "tardy", "swami", "notch", "groom", "roach", "hitch", "young", "align", "ready", "frond", "strap", "puree", "realm", "venue", "swarm", "offer", "seven", "dryer", "diary", "dryly", "drank", "acrid", "heady", "theta", "junto", "pixie", "quoth", "bonus", "shalt", "penne", "amend", "datum", "build", "piano", "shelf", "lodge", "suing", "rearm", "coral", "ramen", "worth", "psalm", "infer", "overt", "mayor", "ovoid", "glide", "usage", "poise", "randy", "chuck", "prank", "fishy", "tooth", "ether", "drove", "idler", "swath", "stint", "while", "begat", "apply", "slang", "tarot", "radar", "credo", "aware", "canon", "shift", "timer", "bylaw", "serum", "three", "steak", "iliac", "shirk", "blunt", "puppy", "penal", "joist", "bunny", "shape", "beget", "wheel", "adept", "stunt", "stole", "topaz", "chore", "fluke", "afoot", "bloat", "bully", "dense", "caper", "sneer", "boxer", "jumbo", "lunge", "space", "avail", "short", "slurp", "loyal", "flirt", "pizza", "conch", "tempo", "droop", "plate", "bible", "plunk", "afoul", "savoy", "steep", "agile", "stake", "dwell", "knave", "beard", "arose", "motif", "smash", "broil", "glare", "shove", "baggy", "mammy", "swamp", "along", "rugby", "wager", "quack", "squat", "snaky", "debit", "mange", "skate", "ninth", "joust", "tramp", "spurn", "medal", "micro", "rebel", "flank", "learn", "nadir", "maple", "comfy", "remit", "gruff", "ester", "least", "mogul", "fetch", "cause", "oaken", "aglow", "meaty", "gaffe", "shyly", "racer", "prowl", "thief", "stern", "poesy", "rocky", "tweet", "waist", "spire", "grope", "havoc", "patsy", "truly", "forty", "deity", "uncle", "swish", "giver", "preen", "bevel", "lemur", "draft", "slope", "annoy", "lingo", "bleak", "ditty", "curly", "cedar", "dirge", "grown", "horde", "drool", "shuck", "crypt", "cumin", "stock", "gravy", "locus", "wider", "breed", "quite", "chafe", "cache", "blimp", "deign", "fiend", "logic", "cheap", "elide", "rigid", "false", "renal", "pence", "rowdy", "shoot", "blaze", "envoy", "posse", "brief", "never", "abort", "mouse", "mucky", "sulky", "fiery", "media", "trunk", "yeast", "clear", "skunk", "scalp", "bitty", "cider", "koala", "duvet", "segue", "creme", "super", "grill", "after", "owner", "ember", "reach", "nobly", "empty", "speed", "gipsy", "recur", "smock", "dread", "merge", "burst", "kappa", "amity", "shaky", "hover", "carol", "snort", "synod", "faint", "haunt", "flour", "chair", "detox", "shrew", "tense", "plied", "quark", "burly", "novel", "waxen", "stoic", "jerky", "blitz", "beefy", "lyric", "hussy", "towel", "quilt", "below", "bingo", "wispy", "brash", "scone", "toast", "easel", "saucy", "value", "spice", "honor", "route", "sharp", "bawdy", "radii", "skull", "phony", "issue", "lager", "swell", "urine", "gassy", "trial", "flora", "upper", "latch", "wight", "brick", "retry", "holly", "decal", "grass", "shack", "dogma", "mover", "defer", "sober", "optic", "crier", "vying", "nomad", "flute", "hippo", "shark", "drier", "obese", "bugle", "tawny", "chalk", "feast", "ruddy", "pedal", "scarf", "cruel", "bleat", "tidal", "slush", "semen", "windy", "dusty", "sally", "igloo", "nerdy", "jewel", "shone", "whale", "hymen", "abuse", "fugue", "elbow", "crumb", "pansy", "welsh", "syrup", "terse", "suave", "gamut", "swung", "drake", "freed", "afire", "shirt", "grout", "oddly", "tithe", "plaid", "dummy", "broom", "blind", "torch", "enemy", "again", "tying", "pesky", "alter", "gazer", "noble", "ethos", "bride", "extol", "decor", "hobby", "beast", "idiom", "utter", "these", "sixth", "alarm", "erase", "elegy", "spunk", "piper", "scaly", "scold", "hefty", "chick", "sooty", "canal", "whiny", "slash", "quake", "joint", "swept", "prude", "heavy", "wield", "femme", "lasso", "maize", "shale", "screw", "spree", "smoky", "whiff", "scent", "glade", "spent", "prism", "stoke", "riper", "orbit", "cocoa", "guilt", "humus", "shush", "table", "smirk", "wrong", "noisy", "alert", "shiny", "elate", "resin", "whole", "hunch", "pixel", "polar", "hotel", "sword", "cleat", "mango", "rumba", "puffy", "filly", "billy", "leash", "clout", "dance", "ovate", "facet", "chili", "paint", "liner", "curio", "salty", "audio", "snake", "fable", "cloak", "navel", "spurt", "pesto", "balmy", "flash", "unwed", "early", "churn", "weedy", "stump", "lease", "witty", "wimpy", "spoof", "saner", "blend", "salsa", "thick", "warty", "manic", "blare", "squib", "spoon", "probe", "crepe", "knack", "force", "debut", "order", "haste", "teeth", "agent", "widen", "icily", "slice", "ingot", "clash", "juror", "blood", "abode", "throw", "unity", "pivot", "slept", "troop", "spare", "sewer", "parse", "morph", "cacti", "tacky", "spool", "demon", "moody", "annex", "begin", "fuzzy", "patch", "water", "lumpy", "admin", "omega", "limit", "tabby", "macho", "aisle", "skiff", "basis", "plank", "verge", "botch", "crawl", "lousy", "slain", "cubic", "raise", "wrack", "guide", "foist", "cameo", "under", "actor", "revue", "fraud", "harpy", "scoop", "climb", "refer", "olden", "clerk", "debar", "tally", "ethic", "cairn", "tulle", "ghoul", "hilly", "crude", "apart", "scale", "older", "plain", "sperm", "briny", "abbot", "rerun", "quest", "crisp", "bound", "befit", "drawn", "suite", "itchy", "cheer", "bagel", "guess", "broad", "axiom", "chard", "caput", "leant", "harsh", "curse", "proud", "swing", "opine", "taste", "lupus", "gumbo", "miner", "green", "chasm", "lipid", "topic", "armor", "brush", "crane", "mural", "abled", "habit", "bossy", "maker", "dusky", "dizzy", "lithe", "brook", "jazzy", "fifty", "sense", "giant", "surly", "legal", "fatal", "flunk", "began", "prune", "small", "slant", "scoff", "torus", "ninny", "covey", "viper", "taken", "moral", "vogue", "owing", "token", "entry", "booth", "voter", "chide", "elfin", "ebony", "neigh", "minim", "melon", "kneed", "decoy", "voila", "ankle", "arrow", "mushy", "tribe", "cease", "eager", "birth", "graph", "odder", "terra", "weird", "tried", "clack", "color", "rough", "weigh", "uncut", "ladle", "strip", "craft", "minus", "dicey", "titan", "lucid", "vicar", "dress", "ditch", "gypsy", "pasta", "taffy", "flame", "swoop", "aloof", "sight", "broke", "teary", "chart", "sixty", "wordy", "sheer", "leper", "nosey", "bulge", "savor", "clamp", "funky", "foamy", "toxic", "brand", "plumb", "dingy", "butte", "drill", "tripe", "bicep", "tenor", "krill", "worse", "drama", "hyena", "think", "ratio", "cobra", "basil", "scrum", "bused", "phone", "court", "camel", "proof", "heard", "angel", "petal", "pouty", "throb", "maybe", "fetal", "sprig", "spine", "shout", "cadet", "macro", "dodgy", "satyr", "rarer", "binge", "trend", "nutty", "leapt", "amiss", "split", "myrrh", "width", "sonar", "tower", "baron", "fever", "waver", "spark", "belie", "sloop", "expel", "smote", "baler", "above", "north", "wafer", "scant", "frill", "awash", "snack", "scowl", "frail", "drift", "limbo", "fence", "motel", "ounce", "wreak", "revel", "talon", "prior", "knelt", "cello", "flake", "debug", "anode", "crime", "salve", "scout", "imbue", "pinky", "stave", "vague", "chock", "fight", "video", "stone", "teach", "cleft", "frost", "prawn", "booty", "twist", "apnea", "stiff", "plaza", "ledge", "tweak", "board", "grant", "medic", "bacon", "cable", "brawl", "slunk", "raspy", "forum", "drone", "women", "mucus", "boast", "toddy", "coven", "tumor", "truer", "wrath", "stall", "steam", "axial", "purer", "daily", "trail", "niche", "mealy", "juice", "nylon", "plump", "merry", "flail", "papal", "wheat", "berry", "cower", "erect", "brute", "leggy", "snipe", "sinew", "skier", "penny", "jumpy", "rally", "umbra", "scary", "modem", "gross", "avian", "greed", "satin", "tonic", "parka", "sniff", "livid", "stark", "trump", "giddy", "reuse", "taboo", "avoid", "quote", "devil", "liken", "gloss", "gayer", "beret", "noise", "gland", "dealt", "sling", "rumor", "opera", "thigh", "tonga", "flare", "wound", "white", "bulky", "etude", "horse", "circa", "paddy", "inbox", "fizzy", "grain", "exert", "surge", "gleam", "belle", "salvo", "crush", "fruit", "sappy", "taker", "tract", "ovine", "spiky", "frank", "reedy", "filth", "spasm", "heave", "mambo", "right", "clank", "trust", "lumen", "borne", "spook", "sauce", "amber", "lathe", "carat", "corer", "dirty", "slyly", "affix", "alloy", "taint", "sheep", "kinky", "wooly", "mauve", "flung", "yacht", "fried", "quail", "brunt", "grimy", "curvy", "cagey", "rinse", "deuce", "state", "grasp", "milky", "bison", "graft", "sandy", "baste", "flask", "hedge", "girly", "swash", "boney", "coupe", "endow", "abhor", "welch", "blade", "tight", "geese", "miser", "mirth", "cloud", "cabal", "leech", "close", "tenth", "pecan", "droit", "grail", "clone", "guise", "ralph", "tango", "biddy", "smith", "mower", "payee", "serif", "drape", "fifth", "spank", "glaze", "allot", "truck", "kayak", "virus", "testy", "tepee", "fully", "zonal", "metro", "curry", "grand", "banjo", "axion", "bezel", "occur", "chain", "nasal", "gooey", "filer", "brace", "allay", "pubic", "raven", "plead", "gnash", "flaky", "munch", "dully", "eking", "thing", "slink", "hurry", "theft", "shorn", "pygmy", "ranch", "wring", "lemon", "shore", "mamma", "froze", "newer", "style", "moose", "antic", "drown", "vegan", "chess", "guppy", "union", "lever", "lorry", "image", "cabby", "druid", "exact", "truth", "dopey", "spear", "cried", "chime", "crony", "stunk", "timid", "batch", "gauge", "rotor", "crack", "curve", "latte", "witch", "bunch", "repel", "anvil", "soapy", "meter", "broth", "madly", "dried", "scene", "known", "magma", "roost", "woman", "thong", "punch", "pasty", "downy", "knead", "whirl", "rapid", "clang", "anger", "drive", "goofy", "email", "music", "stuff", "bleep", "rider", "mecca", "folio", "setup", "verso", "quash", "fauna", "gummy", "happy", "newly", "fussy", "relic", "guava", "ratty", "fudge", "femur", "chirp", "forte", "alibi", "whine", "petty", "golly", "plait", "fleck", "felon", "gourd", "brown", "thrum", "ficus", "stash", "decry", "wiser", "junta", "visor", "daunt", "scree", "impel", "await", "press", "whose", "turbo", "stoop", "speak", "mangy", "eying", "inlet", "crone", "pulse", "mossy", "staid", "hence", "pinch", "teddy", "sully", "snore", "ripen", "snowy", "attic", "going", "leach", "mouth", "hound", "clump", "tonal", "bigot", "peril", "piece", "blame", "haute", "spied", "undid", "intro", "basal", "rodeo", "guard", "steer", "loamy", "scamp", "scram", "manly", "hello", "vaunt", "organ", "feral", "knock", "extra", "condo", "adapt", "willy", "polka", "rayon", "skirt", "faith", "torso", "match", "mercy", "tepid", "sleek", "riser", "twixt", "peace", "flush", "catty", "login", "eject", "roger", "rival", "untie", "refit", "aorta", "adult", "judge", "rower", "artsy", "rural", "shave", "bobby", "eclat", "fella", "gaily", "harry", "hasty", "hydro", "liege", "octal", "ombre", "payer", "sooth", "unset", "unlit", "vomit", "fanny", "fetus", "butch", "stalk", "flack", "widow", "augur"];

//variable to track how many guesses the user has guessed
let attemptCount = 0;

//variable to hold the user's attempt
let userAttempt = '';

//variable to hold the wordle
let wordle = '';

//variable used to disable keys from typing
let disabledKeys = '';

//getter for the keyboard div
const keyboard = document.querySelector('#keyboard');

//getters for the backspace and enter key
const backspaceKey = document.querySelector("#backspace");
const enterKey = document.querySelector("#enter");

//getters for the tiles and keys in their respective arrays
const attempts = document.querySelectorAll(".inputRow");
const keys = document.querySelectorAll(".letter");

//a variable that represents the index of what row is the being typed into
let currentInputRowIndex = 0;

////a variable that represents what tile is the next to be typed into
let currentTileIndex = 0;

//getter for the current row the user is on
let currentInputRow = attempts[currentInputRowIndex];

//getter for the current tile the user is on
let currentTile = currentInputRow.children[currentTileIndex];

// FUNCTIONS BELOW //

//function that picks a random word from the word array
function setWordle() {
  const randomWordIndex = Math.floor(Math.random() * words.length);
  wordle = words[randomWordIndex];
}

//function that returns an array of the tile indexes that should be gray
function findGrays() {
  let grayIndexes = [];

  let copy = wordle; //create a copy of the wordle so that you can edit it when dealing with double/triple letters

  for (let i = 0; i < wordle.length; i++) {
    if (!copy.includes(userAttempt.charAt(i))) { //if the letter is not included in the wordle
      //add the index to the grays array
      grayIndexes.push(i);
      //add that letter to the disabled keys
      disabledKeys += userAttempt.charAt(i).toUpperCase();
    } else {
      //update the copy to remove the letter that was grayed
      copy = copy.replace(copy.charAt(copy.indexOf(userAttempt.charAt(i))), ' ');
    }
  }

  return grayIndexes;
}

//function that returns an array of the tile indexes that should be a yellow tile
function findYellows() {
  let yellowIndexes = [];

  let copy = wordle; //create a copy of the wordle so that you can edit it when dealing with double/triple letters

  for (let i = 0; i < copy.length; i++) {
    if (copy.includes(userAttempt.charAt(i)) && wordle.charAt(i) !== userAttempt.charAt(i)) { //if the letter is included in the word and is not in the same spot
      yellowIndexes.push(i); //add that index to the yellow indexes array
      copy = copy.replace(copy.charAt(copy.indexOf(userAttempt.charAt(i))), ' '); //edit the wordle to remove that letter
    }
  }

  return yellowIndexes;
}

//function that returns an array of the tile indexes that should be a green tile
function findGreens() {
  let greenIndexes = [];

  for (let i = 0; i < wordle.length; i++) {
    if (wordle.charAt(i) === userAttempt.charAt(i)) { //if the letter is in the right spot
      greenIndexes.push(i); //add the index to the green index array
    }
  }

  return greenIndexes;
}

//function that allows for the input from clicking on the keyboard letters
function keyPressed(event) {
  if (currentTileIndex < currentInputRow.children.length) {//if the current tile index smaller bigger than the indexes of the tiles

    //get the letter of the key that was clicked
    const input = event.target.innerText;

    //make the current tile contain the letter
    currentTile.innerText = input;

    //update the current tile index
    currentTileIndex++;

    //make sure that the currentTile doesn't get reassigned to a undefined index
    if (currentTileIndex < currentInputRow.children.length) {
      currentTile = currentInputRow.children[currentTileIndex];
    }
  }
}

//function that allows for the input from the user typing from their keyboard
function keyTyped(event) {
  //if the currentTileIndex is still within the available tiles
  //and the key pressed is a letter (event.code returns KeyA so you must grab the char at the end of that string)
  //and the key pressed is not a disabled letter
  if (currentTileIndex < currentInputRow.children.length && event.code.charAt(event.code.length - 1).match('[A-Z]') && event.code.charAt(event.code.length - 1).match('[^' + disabledKeys + ']')) {//if the current tile index smaller bigger than the indexes of the tiles
    //get the letter typed
    let input = event.code.charAt(event.code.length - 1);

    //make the current tile contain the letter
    currentTile.innerText = input;

    //update the current tile index
    currentTileIndex++;

    //make sure that the currentTileIndex doesn't get reassigned to a undefined index
    if (currentTileIndex < currentInputRow.children.length) {
      //update the currentTile
      currentTile = currentInputRow.children[currentTileIndex];
    }
  }

  if (event.code === 'Enter') {
    enter();
  }

  if (event.code === 'Backspace') {
    backspace();
  }
}

//function that allows for the backspace key to work accordingly
function backspace() {
  if ( //check that the currentTileIndex points to the tile that the user is about to type into
    (currentTileIndex !== 0) ||
    currentTileIndex === currentInputRow.children.length
  ) {
    //move the index back to the index of the last typed tile
    currentTileIndex--;
    //update the currentTile to then point to the last typed tile
    currentTile = currentInputRow.children[currentTileIndex];
    //update the innerText of tile to blank (i.e. delete the letter typed)
    currentTile.innerText = "";
  }
}

//function that allows for enter functionality
function enter() {
  //if the enter key pressed with the player filling out a word (i.e. currentTileIndex points beyond the availale tiles)
  if (currentTileIndex === currentInputRow.children.length) {

    //reset the user attempt
    userAttempt = '';

    //increment the attemptCount
    attemptCount++;

    //loop through the tiles and combine the letters to form the user's attempt
    for (let i = 0; i < currentInputRow.children.length; i++) {
      userAttempt += currentInputRow.children[i].innerText;
    }

    //make the user attempt lowercase
    userAttempt = userAttempt.toLowerCase();

    //if the user's attempt is not a valid answer
    if (!words.includes(userAttempt)) {
      //create an alert telling the user that the guess is not valid
      alert('That is not a valid guess');
      //loop through the tiles of the inputRow and reset their innerText's to blank
      for (let i = 0; i < currentInputRow.children.length; i++) {
        currentInputRow.children[i].innerText = '';
      }

      //reset the currentTileIndex and currentTile so that the user starts back on the first letter again
      currentTileIndex = 0;
      currentTile = currentInputRow.children[currentTileIndex];

    } else { //if the user's attempt is a valid answer

      //get the arrays of what colors tiles need to be
      const grayTiles = findGrays();
      const yellowTiles = findYellows();
      const greenTiles = findGreens();

      //removes any green indexes from the yellow indexes array
      for (let i = 0; i < yellowTiles.length; i++) { //for each the indexes in the yellow tiles
        for (let j = 0; j < greenTiles.length; j++) {  //loop through the greenTiles indexes
          //if the charAt in the userAttempt is the same for both color indexes
          if (userAttempt.charAt(yellowTiles[i]) === userAttempt.charAt(greenTiles[j])) {
            //convert that character from a yellow tile to a gray tile by adding its index to the grays
            grayTiles.push(yellowTiles[i]);
            //and then removing it from the yellows
            yellowTiles.splice(i, 1);
          }
        }
      }

      //turn the appriopriate tiles gray by adding the gray class to it
      for (let i = 0; i < grayTiles.length; i++) {
        currentInputRow.children[grayTiles[i]].classList.add('gray');

        //turn the keys associated with the gray letter to disabled
        for (let j = 0; j < keys.length; j++) {
          if (keys[j].innerText === currentInputRow.children[grayTiles[i]].innerText) {
            keys[j].disabled = true;
          }
        }
      }

      //turn the appriopriate tiles green
      for (let i = 0; i < greenTiles.length; i++) {
        currentInputRow.children[greenTiles[i]].classList.add('green');

        //incase a double letter has turned gray, undisable that key both on the clickable and typeable keyboard
        for (let j = 0; j < keys.length; j++) {
          if (keys[j].innerText === currentInputRow.children[greenTiles[i]].innerText) {
            keys[j].disabled = false;
            disabledKeys = disabledKeys.replace(currentInputRow.children[greenTiles[i]].innerText, '');
          }
        }
      }

      //turn the appriopriate tiles yellow
      for (let i = 0; i < yellowTiles.length; i++) {
        currentInputRow.children[yellowTiles[i]].classList.add('yellow');
      }

      //if the green tiles length is 5 (i.e. win condition)
      if (greenTiles.length === wordle.length) {
        removeKeyboard();

        //creates the div that will hold the result of the game
        const gameResultDiv = document.createElement('div');

        //gives that div a class name gameResult so that it can be styled via CSS
        gameResultDiv.classList.add('gameResult');

        //creates appriopriate elements for the div with the appriopriate innerText altercations
        const heading = document.createElement('h1');
        const message = document.createElement('h3');
        const button = document.createElement('button');

        heading.innerText = 'CONGRATULATIONS';

        if (attemptCount > 1) {
          message.innerText = 'You guessed \'' + wordle + '\' in ' + attemptCount + ' attempts!';
        } else {
          message.innerText = 'You guessed \'' + wordle + '\' in ' + attemptCount + ' attempt!';
        }

        button.innerText = 'Would you like to Play Again?';
        button.addEventListener('click', playAgain);

        //appends the elements to the div
        gameResultDiv.appendChild(heading);
        gameResultDiv.appendChild(message);
        gameResultDiv.appendChild(button);

        //appends the div to main
        document.body.children[1].appendChild(gameResultDiv);

      }

      //move down to the next available attempt (resetting appriopriate variables)
      if (currentInputRowIndex < attempts.length - 1) {
        currentInputRowIndex++;
        currentInputRow = attempts[currentInputRowIndex];

        currentTileIndex = 0;
        currentTile = currentInputRow.children[currentTileIndex];
      } else { //if you cant, end the game, displaying lose message
        removeKeyboard();

        //creates the div that will hold the result of the game
        const gameResultDiv = document.createElement('div');

        //gives that div a class name gameResult so that it can be styled via CSS
        gameResultDiv.classList.add('gameResult');

        //creates appriopriate elements for the div with the appriopriate innerText altercations
        const heading = document.createElement('h1');
        const message = document.createElement('h3');
        const button = document.createElement('button');

        heading.innerText = 'UNLUCKY';

        message.innerText = 'You failed to guess the word \'' + wordle + '\'';

        button.innerText = 'Would you like to Play Again?';
        button.addEventListener('click', playAgain);

        //appends the elements to the div
        gameResultDiv.appendChild(heading);
        gameResultDiv.appendChild(message);
        gameResultDiv.appendChild(button);

        //appends the div to main
        document.body.children[1].appendChild(gameResultDiv);
      }
    }
  }
}

//function that removes the keyboard from the DOM
function removeKeyboard() {
  while (keyboard.hasChildNodes()) {
    keyboard.firstChild.remove();
  }
  keyboard.remove();
  disabledKeys = '[A-Z]';
}

//function that adds the keyboard back to the DOM
function addKeyboard() {

}

//function that reloads the page to play again
function playAgain() {
  location.reload();
}

//IMMEDIATE CODE BELOW//

//adds the key pressing functionality for each letter key
for (const key of keys) {
  key.addEventListener("click", keyPressed);
}

//adds the key typing functionality for the document
document.body.addEventListener("keyup", keyTyped);

//adds the backspacing functionality for the backspace key
backspaceKey.addEventListener("click", backspace);

//adds the backspacing functionality for the backspace key
enterKey.addEventListener("click", enter);

setWordle();
console.log(wordle);


