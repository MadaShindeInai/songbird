const BirdsData = [
  {
    id: 1,
    name: 'Разогрев',
    icon: 'fas fa-fire',
    birds: [
      {
        id: 1,
        name: 'Тулес',
        species: 'Pluvialis squatarola',
        description:
          'Тулес быстро бегает, делая внезапные остановки и осматриваясь при этом по сторонам. Водных животных он ловит с поверхности воды, достаёт со дна мелководных тундровых озерков.',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pluvialis_squatarola_%28summer_plumage%29.jpg/275px-Pluvialis_squatarola_%28summer_plumage%29.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC526288-2019-10-22%20Cap%20Ferret%20Pluvier%20argente%20envol%20alarme%20%2B.mp3'
      },
      {
        id: 2,
        name: 'Неразлучник Фишера',
        species: 'Agapornis fischeri',
        description:
          'Обитают в зоне саванны до высоты 1700 м над уровнем моря. Питаются в основном семенами растений и зёрнами различных злаков, иногда совершают нападение на поля. В некоторых районах Танзании их считают вредителями.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Agapornis_fischeri_-Ueno_Zoo%2C_Japan_-three-8a-4c.jpg/275px-Agapornis_fischeri_-Ueno_Zoo%2C_Japan_-three-8a-4c.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC526237-2019-10-23%20Cap%20Ferret%20Inseparable%20de%20Fisher%20cri%20de%20vol%20%2B.mp3'
      },
      {
        id: 3,
        name: 'Чернозобик',
        species: 'Calidris alpina',
        description:
          'Взрослый чернозобик достигает размеров от 17 до 21 см, а размах его крыльев насчитывает от 32 до 36 см. Его вес составляет от 40 до 60 г, а максимальная продолжительность жизни — 24 года.',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Calidris_alpina03.jpg/275px-Calidris_alpina03.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC526218-2019-10-23%20Cap%20Ferret%20Becasseau%20variable%20envol%20groupe.mp3'
      },
      {
        id: 4,
        name: 'Песчанка',
        species: 'Calidris alba',
        description:
          'Песчанка — небольшая птица из семейства бекасовых отряда ржанкообразных. Это одна из наиболее северных размножающихся птиц, её гнездовья обнаружены в арктической тундре всего в 960 км от северного полюса.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Calidris-alba-001.jpg/275px-Calidris-alba-001.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC526215-2019-10-23%20Cap%20Ferret%20Becasseau%20sanderling%20vol%20%2B.mp3'
      },
      {
        id: 5,
        name: 'Пестроносая крачка',
        species: 'Thalasseus sandvicensis',
        description:
          ' Длинный, тонкий чёрный клюв, на конце светло-жёлтого цвета. Верхняя сторона крыльев светло-серого цвета, нижняя сторона и шея белые. Верх головы и хохол на затылке чёрного цвета. Крик напоминает карканье «кэррик»',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Sandwich_Tern_perched.jpg/275px-Sandwich_Tern_perched.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/POVKNQVSGU/XC526134-Thalasseus%20sandvicensis_call_09_02_20_Puerto%20de%20lo%20Urrutias%20%28online-audio-converter.com%29.mp3'
      },
      {
        id: 6,
        name: 'Кольчатая горлица',
        species: 'Streptopelia decaocto',
        description:
          'Кольчатая горлица размером с сизого голубя, при этом она легче, а её хвост длиннее, поэтому птица выглядит стройнее и изящнее.Крик — это глухое воркование из трёх строф с акцентом на второй строфе как у многих видов голубей.',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Collared.dove.jpg/275px-Collared.dove.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC526107-sierp%C3%B3wka%209.01.2020%20%207.29.mp3'
      }
    ]
  },
  {
    id: 2,
    name: 'Воробьиные',
    icon: 'fab fa-twitter',
    birds: [
      {
        id: 11,
        name: 'Воробей',
        species: 'Passer domesticus',
        description:
          'Воробей - постоянный спутник человека, живущий с ним бок о бок много веков. Он так и называется - домовой воробей.',
        image:
          'https://worldbirds.ru/images/stories/vorobey.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC381853-moineau%20domestique%20cri%20accouplement%20%2B.mp3'
      },
      {
        id: 12,
        name: 'Ворон',
        species: 'Corvus согах',
        description:
          'Ворон - самый крупный представитель врановых. Он заметно больше вороны. Размах крыльев - около полутора метров. Самцы крупнее самок. Хвост клиновидный.',
        image:
          'https://worldbirds.ru/images/stories/voron.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/CIMGCGUWCS/XC383658-ravn-0328_124901.mp3'
      },
      {
        id: 13,
        name: 'Вьюрок',
        species: 'Fringilla montifringilla',
        description:
          'Вьюрок - близкий родственник зяблика, похожий на него образом жизни. Нередко эти птицы составляют с зябликами общие стаи, но по окраске оперения легко отличаются от своих родичей. ',
        image:
          'https://worldbirds.ru/images/stories/vyurok1.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/YSDNMROVID/XC349852-861_frimon_ts%C3%A4eep-kutsu2_Suomi_Kuusamo_2008-06-03.mp3'
      },
      {
        id: 14,
        name: 'Грач',
        species: 'Corvus frugilegus',
        description:
          'Перья у грача черные, с фиолетовым отливом. У молодых птиц в основании клюва заметны перья, позже они выпадают. Грачи всеядны, но предпочитают червей.',
        image: 'https://worldbirds.ru/images/stories/grach.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC522047-gawron%20Suble%2023.01.2020%20%209.33.mp3'
      },
      {
        id: 15,
        name: 'Дрозд',
        species: 'Turdus cardis',
        description:
          'Представителей семейства можно встретить преимущественно в лесных массивах, равнинных или горных, лишь некоторые виды могут жить на открытых пространствах.',
        image:
          'https://worldbirds.ru/images/stories/drozd.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC285674-LS_58048%20Japanese%20Thrush%20flight%20call.mp3'
      },
      {
        id: 16,
        name: 'Жаворонок',
        species: 'Mirafra javanica',
        description:
          'Распространены эти птицы в Африке, Азии, Европе; 1 вид обитает в Америке и 2 вида в Австралии. Жаворонки настолько полюбились людям, что они акклиматизировали некоторые виды в местах, где их раньше не было.',
        image:
          'https://worldbirds.ru/images/stories/zhavoronok.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/Mirafra_javanica_ETimor2005-FRL_TL_3.1_18.5-24.5_1_S.mp3'
      }
    ]
  },
  {
    id: 3,
    name: 'Попугаи',
    icon: 'fas fa-tree',
    birds: [
      {
        id: 21,
        name: 'Ара',
        species: 'Аrа mасао',
        description:
          'Попугаи ара - одни из самых ярко окрашенных. Этот крупный, изумительно красивый попугай населяет тропические леса Южной и Центральной Америки.',
        image: 'https://worldbirds.ru/images/stories/ara.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/ARFGONJCBJ/ScarletMacawCall-Yasuni.mp3'
      },
      {
        id: 22,
        name: 'Какаду',
        species: 'Cacatua leadbeateri',
        description:
          'Какаду двадцать видов. Траурных пять, они почти черные. Дома их держат редко. У шлемоносного какаду красные хохолок и голова.',
        image:
          'https://worldbirds.ru/images/stories/kakadu.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/EHGWCIGILC/XC171932-sulfur-crested-cockatoo-murrumbidgee.mp3'
      },
      {
        id: 23,
        name: 'Корелла',
        species: 'Nymphicus hollandicus',
        description:
          'Кореллы или нимфы (Nymphicus - латинское название рода) были описаны выдающимся английским орнитологом Джоном Гульдом в 1840 году во время его путешествия по Австралии.',
        image: 'https://worldbirds.ru/images/stories/korella.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/DXYUSANLSN/XC240157-ninphicus%20ollandicus%202%20reina%20mercedes%20carlos%2005-05-2015.mp3'
      },
      {
        id: 24,
        name: 'Волнистый попугайчик',
        species: 'Melopsittacus undulatus',
        description:
          'Родина волнистых попугайчиков - Австралия, где они частенько попадаются на глаза, летая большими стаями. Однако в неволе нынче этих птиц даже больше, чем на свободе.',
        image: 'https://worldbirds.ru/images/stories/popugaychik.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/HBPYQXTJEV/2012-05-22_T265_T136_Budgerigar-Exmouth-SewagePonds-07Uhr58.mp3'
      },
      {
        id: 25,
        name: 'Попугай (Жако)',
        species: 'Psittacus erithacus',
        description:
          'Все попугаи - прекрасные акробаты, способные проделывать на ветках деревьев головокружительные трюки. Живут птицы, как правило, стаями, селятся колониями.',
        image:
          'https://worldbirds.ru/images/stories/popugay.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/VROUALCTKG/XC351945-Grey%20Parrot%20%28call%2C%20Ghana%2C%20Ankasa%2C%20apr2016%2C%201%29.MP3'
      },
      {
        id: 26,
        name: 'Острохвостый лорикет',
        species: 'Trichoglossus haematodus',
        description:
          'В период созревания урожая они доставляют серьезные неприятности фермерам, уничтожая во множестве плоды и ягоды. Также поедают пыльцу и нектар цветов, почки, молодые побеги и семена деревьев и кустарников, насекомых и их личинок.',
        image:
          'https://worldbirds.ru/images/stories/loriket.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/EHGWCIGILC/XC434425-Lorikeet_Little_SD585_Benarkin_DawnA_12thSep18.mp3'
      }
    ]
  },
  {
    id: 4,
    name: 'Куриные (часть 1)',
    icon: 'fas fa-music',
    birds: [
      {
        id: 31,
        name: 'Глухарь',
        species: 'Tetrao urogallus',
        description:
          'Глухой тетерев, мошник - так называют глухаря в народе. Первое название характеризует поведение этой птицы на току: во время одного из колен брачной песни глухарь ничего не слышит. Второе пришло от мест обитания - моховых болот с соснами, растущими на каменных грядах.',
        image: 'https://worldbirds.ru/images/stories/gluhar.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/LMQBHHCFNV/1.mp3'
      },
      {
        id: 32,
        name: 'Индейка',
        species: 'Meleagris gallopavo',
        description:
          'Известно всего 2 вида диких индеек, и оба они - обитатели Северной и Центральной Америки. Обыкновенная индейка - родоначальник домашних пород этих птиц. Индейка предпочитает держаться в лесистых местностях, нередко населяет плоскогорья, расположенные достаточно высоко над уровнем моря.',
        image: 'https://worldbirds.ru/images/stories/indeyka.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/BZQDDJCYTA/XC433074-Wild%20Turkey%20PRNWR%2005-28-18.mp3'
      },
      {
        id: 33,
        name: 'Куропатка',
        species: 'Perdix perdix',
        description:
          'Распространены широко и предпочитают регионы с теплым и умеренным климатом. Это исключительно наземные птицы, крайне редко их можно увидеть на кустах, а тем паче на деревьях.',
        image: 'https://worldbirds.ru/images/stories/kuropatka.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC476604-kuropatwa%20%282%29.mp3'
      },
      {
        id: 34,
        name: 'Павлин',
        species: 'Pavo cristatus',
        description:
          'Павлина люди считают одной из самых красивых, и одновременно глупых птиц. Если первое утверждение вполне обосновано, то со вторым можно поспорить. На самом деле, в природе эта птица крайне осторожна, ведет скрытный образ жизни и очень редко становится добычей охотников и хищных зверей.',
        image: 'https://worldbirds.ru/images/stories/pavlin.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC316937-Paw_Pavo_cristatus_Poland_Jarek_Matusiak_20080115-006.mp3'
      },
      {
        id: 35,
        name: 'Перепел',
        species: 'Coturnix coturnix',
        description:
          'Перепел или перепелка - самая маленькая птица из всех представителей отряда куриных.. Это жители открытых пространств. В лесных чащобах их не найти. Встречаются перепела на больших полянах, на лугах, поросших высокой травой.',
        image:
          'https://worldbirds.ru/images/stories/perepel.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/MCFGTDXKHO/XC487148-04Wachtel.mp3'
      },
      {
        id: 36,
        name: 'Петух банкивский',
        species: 'Gallus gallus',
        description:
          'Банкивский петух, по всей видимости, является родоначальником домашних пород кур. Именно этих птиц, называемых дикими или кустарниковыми курами, и приручили наши далекие предки. Обитают они в Юго-Восточной Азии, населяют леса и заросли кустарников, нередко их можно видеть на возделываемых человеком полях.',
        image:
          'https://worldbirds.ru/images/stories/petuh_bank.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/LDKAWQWMRJ/2a408_Red_Junglefowl_Khao_Yai_Thailand_JvdW2003.mp3'
      }
    ]
  },
  {
    id: 5,
    name: 'Куриные (часть2)',
    icon: 'fas fa-skull-crossbones',
    birds: [
      {
        id: 41,
        name: 'Кавказский улар',
        species: 'Tetraogallus caucasicus',
        description:
          'На английском языке улар называете «Snowcock» - снежная курица. Дело в том, что все виды этих птиц населяют горные склоны, придерживаясь самой границы вечных снегов.',
        image:
          'https://worldbirds.ru/images/stories/ular.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/EVOMNZZEKY/XC480029-Urkeklik%20u%C3%A7u%C5%9F%20ses.mp3'
      },
      {
        id: 42,
        name: 'Фазан',
        species: 'Chrysolophus pictus',
        description:
          'Из Азии фазанов расселили по многим странам Европы, Африки и Америки. «За границей» их теперь, пожалуй, больше, чем на исторической родине. Фазаны легко одомашниваются и хорошо размножаются в неволе.',
        image:
          'https://worldbirds.ru/images/stories/fazan.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/OKSKESEOLP/golden%20pheasant%20Foping.mp3'
      },
      {
        id: 43,
        name: 'Рябчик',
        species: 'Tetrastes bonasia',
        description:
          'Рябчик - птица получила такое название за пестроту оперения. Это типичный обитатель чащоб, держащейся обычно вдоль ручьев и речушек елово-лиственных лесов. Поселяются рябчики в лесах таежного типа с преобладанием ели, особенно любят захламленные лесные ложбины с непересыхающими ручьями.',
        image: 'https://worldbirds.ru/images/stories/ryabchik.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/CIMGCGUWCS/XC285358-jerpe-1018_143026-hh.mp3'
      },
      {
        id: 44,
        name: 'Тетерев',
        species: 'Dendragapus obscurus',
        description:
          'Тетерев широко распространен по Евразии. Летает хорошо и совершает длительные перелеты к местам кормежки. Интересно токование птиц, когда на небольшом участке (болото, поле, а нередко и открытые песчаные пляжи на берегу водоема) собирается несколько «петухов» и тетерок.',
        image:
          'https://worldbirds.ru/images/stories/teterev.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/JHFICMRVUX/XC470940-4292019%202014%20Dusky%20Grouse%20Single%20hoot.mp3'
      },
      {
        id: 45,
        name: 'Аргус',
        species: 'Argusianus argus',
        description:
          'Аргус - один из самых длиннохвостых среди диких птиц, родственник фазанов и павлина. Коричневатые перья птицы украшает рисунок - круглые глазки. Этим рисунком аргус и обязан своему названию.',
        image:
          'https://worldbirds.ru/images/stories/argus.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/Rheinardia_ocellata_Vietnam-84.1b-FRL_VN_49_2603-2609_1_S.mp3'
      },
      {
        id: 46,
        name: 'Гоацин',
        species: 'Opisthocomus hoazin',
        description:
          'Единственный вид этого семейства - гоацин - житель тропических лесов Южной Америки. Птица обитает на затопленных участках лесов, предпочитая берега больших рек, поросшие кустарником. Летает гоацин очень неохотно, хотя и на землю спускается крайне редко.',
        image: 'https://worldbirds.ru/images/stories/goacin.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/YKKDTZHLUU/XC257737-43.001.03.Hoatzin.mp3'
      }
    ]
  },
  {
    id: 6,
    name: 'Хищные',
    icon: 'fas fa-water',
    birds: [
      {
        id: 51,
        name: 'Беркут',
        species: 'Aquila chrysaetuss',
        description:
          'Беркут - один из самых крупных орлов. Хищник имеет притяжение к лесам, однако с таким огромным размахом крыльев охотиться в чаще невозможно. Потому предпочитает селиться в перелесках, среди скал, на краю лесных массивов.',
        image: 'https://worldbirds.ru/images/stories/berkut.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC476740-Ukjent%20XC%20Stange%20Refsal%20Elias%20A.%20Ryberg20190525135928_047.mp3'
      },
      {
        id: 52,
        name: 'Гарпия',
        species: 'Harpia harpyja',
        description:
          'Древние греки называли гарпиями жутких мифических существ. Наполовину они были женщинами, а наполовину - хищными птицами с огромными когтями. Удивительно, но гарпии существуют не только в мифах.',
        image: 'https://worldbirds.ru/images/stories/garpiya.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/OHHTDSDNBT/HARPHIA%20XENO.mp3'
      },
      {
        id: 53,
        name: 'Коршун',
        species: 'Milvus migrans',
        description:
          'Коршуны - прекрасные летуны, большую часть дня они проводят в воздухе, лениво паря над землей. Но едва появляется возможность чем-либо поживиться, от лени коршуна не остается и следа.',
        image: 'https://worldbirds.ru/images/stories/korshun.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/GNYVMVEMZX/XC407548-tobi_180318a_sub.mp3'
      },
      {
        id: 54,
        name: 'Орел',
        species: 'Aquila audax',
        description:
          'Орлов дюжина видов. Все высматривают свою добычу с воздуха. При этом глаза от яркого солнечного света защищает специальная надбровная складка. Именно она придает орлам такой грозный «нахмуренный» вид.',
        image: 'https://worldbirds.ru/images/stories/orel.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/MNENFHYTAE/XC129096-Accipitridae_Spizaetus_tyrannus_2_jovens_30_06_2012_H15_13_Fazenda_Dolzan_Salete.mp3'
      },
      {
        id: 55,
        name: 'Птица секретарь',
        species: 'Sagittarius serpentarius',
        description:
          'Название птицы-секретаря напоминает нам о временах, когда канцелярский люд в Европе носил парики, писал гусиными перьями и закладывал их порой за ухо - чтобы всегда было под рукой.',
        image: 'https://worldbirds.ru/images/stories/sekretar.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/XC451525-Sagittarius_serpentarius-FL%20calls%20Samburu%20NP%2018Nov18%208.39am%20LS112540a.mp3'
      },
      {
        id: 56,
        name: 'Стервятник',
        species: 'Neophron percnopterus',
        description:
          'Стервятники обитают в горах и предгорьях, охотно селятся вблизи человеческого жилья. В южных регионах эти птицы приносят несомненную пользу, очищая окрестности городов и поселков от пищевых отбросов. Стервятники легко приспосабливаются к различным условиям существования.',
        image: 'https://worldbirds.ru/images/stories/stervyatnik.jpg',
        audio:
          'https://www.xeno-canto.org/sounds/uploaded/ILUHRFXDNU/percnoptere%20dEgypte%20chickcall.mp3'
      }
    ]
  }
];

export default BirdsData;
