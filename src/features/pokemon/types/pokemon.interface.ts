import { PokemonDetailType } from '@/features/pokemon/types/pokemon.type';

export interface PokemonStat {
    label: string;
    value: number;
}

export interface PokemonAbility {
    name: string;
    hidden: boolean;
    desc: string;
    isCompetitive?: boolean;
}

export interface PokemonMove {
    name: string;
    type: string;
    cat: 'physical' | 'special' | 'status';
    pwr: number | null;
    acc: number | null;
    pp: number;
    priority: number;
    target: string;
    effect: string;
    desc: string;
    flavor?: string;
    isCompetitive?: boolean;
}

export interface PokemonSet {
    ability?: string;
    item?: string;
    moves?: string[];
}

export interface PokemonItem {
    name: string;
    sprite: string;
    flavor: string;
}

export interface PokemonEntity {
    name: string;
    spriteUrl: string;
    types?: string[];
    stats?: Record<string, number>;
    item?: PokemonItem;
    abilities?: PokemonAbility[];
    moves?: PokemonMove[];
}

export interface PokemonDetail {
    type: PokemonDetailType;
    name: string;
    data: PokemonMove | PokemonAbility | PokemonItem;
}
