// API response contract. JSON data is stored in server/data.
export type TormentaCatalog = {
    "database": {
        "raça": ({
            "nome": string;
            "atributos": {
                "livre"?: {
                    "quantidade": number;
                    "valor": number;
                    "excessao"?: string;
                };
                "constituição"?: number;
                "sabedoria"?: number;
                "destreza"?: number;
                "inteligência"?: number;
                "carisma"?: number;
                "força"?: number;
            };
            "habilidades": (string)[];
        })[];
        "classe": ({
            "nome": string;
            "atributos": {
                "mana": number;
                "vida": number;
                "vida_por_nivel": number;
            };
            "pericia": (string)[];
            "pericias_opcionais": number;
            "niveis": ({
                "magias_1"?: number;
                "habilidades"?: (string)[];
                "poderes"?: number;
                "magias_2"?: number;
                "magias_3"?: number;
                "magias_4"?: number;
                "magias_5"?: number;
                "remover"?: (string)[];
            })[];
            "proeficiencias"?: (string)[];
        })[];
        "origem": ({
            "nome": string;
            "items"?: (string)[];
            "pericia": (string)[];
            "poderes": (string)[];
            "items_opcao"?: (string)[];
        })[];
        "deus": ({
            "nome": string;
            "energia": string;
            "poderes": (string)[];
        })[];
        "poder": ({
            "nome": string;
            "efeito_magia"?: string;
            "tipo": string;
            "subtipo": string;
            "descricao"?: string;
            "requisito"?: (string)[] | string;
            "magia_opcao"?: (string)[];
            "magia"?: string;
        })[];
    };
    "pericias": {
        "pericias": ({
            "nome": string;
            "atributo": string;
            "num_atributo": number;
            "index": number;
        })[];
    };
    "magics": {
        "escolas": (string)[];
        "magias": ({
            "nome": string;
            "informacao": {
                "descricao": string;
                "ativacao": {
                    "execucao": string;
                    "custo": number;
                    "condicao"?: string;
                };
                "duracao": string;
                "alcance": string;
                "alvo": string;
                "area": string;
                "resistencia": {
                    "atributo": string;
                    "txt": string;
                };
                "tipo": string;
                "circulo": string;
                "escola": string;
                "efeito"?: string;
                "valor"?: string;
            };
            "aprimoramentos": ({
                "custo"?: string;
                "descricao": string;
                "icon"?: string;
            })[];
        })[];
    };
    "char_export": {
        "personagem": {
            "raca": string;
            "classe": string;
            "origem": string;
            "deus": string;
            "nivel": number;
            "defesa_extra": number;
            "pericias": (unknown)[];
            "atributos": (unknown)[];
            "atributos_extra": (unknown)[];
            "armas": (unknown)[];
            "armadura": string;
            "escudo": string;
            "escolas_magia": (unknown)[];
            "magias": (unknown)[];
            "poderes": (unknown)[];
        };
    };
    "armor": {
        "armaduras": ({
            "nome": string;
            "bonus": string;
            "penalidade": string;
            "tipo": string;
        })[];
        "escudos": ({
            "nome": string;
            "bonus": string;
            "penalidade": string;
        })[];
    };
    "weapons": {
        "armas": ({
            "nome": string;
            "dano": string;
            "alcance": string;
            "critico": string;
            "tipo": string;
            "subtipo": string;
        })[];
    };
    "attributes": {
        "custo": (number)[];
        "modificador": (number)[];
    };
};
