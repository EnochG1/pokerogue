import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const abilityTriggers: SimpleTranslationEntries = {
  "blockRecoilDamage" : "{{abilityName}} di {{pokemonName}}\nl'ha protetto dal contraccolpo!",
  "badDreams": "{{pokemonName}} è tormentato dagli incubi!",
  "costar": "{{pokemonName}} ha copiato le modifiche alle statistiche\ndel suo alleato {{allyName}}!",
  "iceFaceAvoidedDamage": "{{pokemonName}} ha evitato\ni danni grazie a {{abilityName}}!",
  "perishBody": "{{abilityName}} di {{pokemonName}}\nmanderà KO entrambi i Pokémon dopo 3 turni!",
  "poisonHeal": "{{pokemonName}} recupera alcuni PS\ncon {{abilityName}}!",
  "trace": "L'abilità {{abilityName}} di {{targetName}}\nviene copiata da {{pokemonName}} con Traccia!",
  "windPowerCharged": "Venire colpito da {{moveName}} ha caricato {{pokemonName}}!",
  "quickDraw":"{{pokemonName}} agisce più rapidamente del normale grazie a Colpolesto!",
  "blockItemTheft": "{{abilityName}} di {{pokemonNameWithAffix}}\nlo rende immune ai furti!",
  "typeImmunityHeal": "{{pokemonName}} recupera alcuni PS\ncon {{abilityName}}!",
  "nonSuperEffectiveImmunity": "{{pokemonNameWithAffix}} evita il colpo\ncon {{abilityName}}!",
  "postDefendDisguise": "{{pokemonNameWithAffix}} è stato smascherato!",
  "moveImmunity": "Non ha effetto su {{pokemonNameWithAffix}}!",
  "reverseDrain": "{{pokemonNameWithAffix}} ha assorbito la melma!",
  "postDefendTypeChange": "{{abilityName}} di {{pokemonNameWithAffix}}\nlo ha reso di tipo {{typeName}}!",
  "postDefendContactDamage": "{{pokemonNameWithAffix}}'s {{abilityName}}\nhurt its attacker!",
  "postDefendAbilitySwap": "{{pokemonNameWithAffix}} swapped\nabilities with its target!",
  "postDefendAbilityGive": "{{pokemonNameWithAffix}} gave its target\n{{abilityName}}!",
  "postDefendMoveDisable": "{{pokemonNameWithAffix}}'s {{moveName}}\nwas disabled!",
  "pokemonTypeChange": "{{pokemonNameWithAffix}} transformed into the {{moveType}} type!",
  "postAttackStealHeldItem": "{{pokemonNameWithAffix}} stole\n{{defenderName}}'s {{stolenItemType}}!",
  "postDefendStealHeldItem": "{{pokemonNameWithAffix}} stole\n{{attackerName}}'s {{stolenItemType}}!",
  "copyFaintedAllyAbility": "{{pokemonNameWithAffix}}'s {{abilityName}} was taken over!",
  "intimidateImmunity": "{{pokemonNameWithAffix}}'s {{abilityName}} prevented it from being Intimidated!",
  "postSummonAllyHeal": "{{pokemonNameWithAffix}} drank down all the\nmatcha that {{pokemonName}} made!",
  "postSummonClearAllyStats": "{{pokemonNameWithAffix}}'s stat changes\nwere removed!",
  "postSummonTransform": "{{pokemonNameWithAffix}} transformed\ninto {{targetName}}!",
  "protectStat": "{{pokemonNameWithAffix}}'s {{abilityName}}\nprevents lowering its {{statName}}!",
  "statusEffectImmunityWithName": "{{pokemonNameWithAffix}}'s {{abilityName}}\nprevents {{statusEffectName}}!",
  "statusEffectImmunity": "{{pokemonNameWithAffix}}'s {{abilityName}}\nprevents status problems!",
  "battlerTagImmunity": "{{pokemonNameWithAffix}}'s {{abilityName}}\nprevents {{battlerTagName}}!",
  "forewarn": "{{pokemonNameWithAffix}} was forewarned about {{moveName}}!",
  "frisk": "{{pokemonNameWithAffix}} frisked {{opponentName}}'s {{opponentAbilityName}}!",
  "postWeatherLapseHeal": "{{pokemonNameWithAffix}}'s {{abilityName}}\nrestored its HP a little!",
  "postWeatherLapseDamage": "{{pokemonNameWithAffix}} is hurt\nby its {abilityName}}!",
  "postTurnLootCreateEatenBerry": "{{pokemonNameWithAffix}} harvested one {{berryName}}!",
  "postTurnHeal": "{{pokemonNameWithAffix}}'s {{abilityName}}\nrestored its HP a little!",
  "fetchBall": "{{pokemonNameWithAffix}} found a\n{{pokeballName}}!",
  "healFromBerryUse": "{{pokemonNameWithAffix}}'s {{abilityName}}\nrestored its HP!",
  "arenaTrap": "{{pokemonNameWithAffix}}'s {{abilityName}}\nprevents switching!",
  "postBattleLoot": "{{pokemonNameWithAffix}} picked up\n{{itemName}}!",
  "postFaintContactDamage": "{{pokemonNameWithAffix}}'s {{abilityName}}\nhurt its attacker!",
  "postFaintHpDamage": "{{pokemonNameWithAffix}}'s {{abilityName}}\nhurt its attacker!",
  "postSummonPressure": "{{pokemonNameWithAffix}} is exerting its Pressure!",
  "postSummonMoldBreaker": "{{pokemonNameWithAffix}} breaks the mold!",
  "postSummonAnticipation": "{{pokemonNameWithAffix}} shuddered!",
  "postSummonTurboblaze": "{{pokemonNameWithAffix}} is radiating a blazing aura!",
  "postSummonTeravolt": "{{pokemonNameWithAffix}} is radiating a bursting aura!",
  "postSummonDarkAura": "{{pokemonNameWithAffix}} is radiating a Dark Aura!",
  "postSummonFairyAura": "{{pokemonNameWithAffix}} is radiating a Fairy Aura!",
  "postSummonNeutralizingGas": "{{pokemonNameWithAffix}}'s Neutralizing Gas filled the area!",
  "postSummonAsOneGlastrier": "{{pokemonNameWithAffix}} has two Abilities!",
  "postSummonAsOneSpectrier": "{{pokemonNameWithAffix}} has two Abilities!",
  "postSummonVesselOfRuin": "{{pokemonNameWithAffix}}'s Vessel of Ruin lowered the {{statName}}\nof all surrounding Pokémon!",
  "postSummonSwordOfRuin": "{{pokemonNameWithAffix}}'s Sword of Ruin lowered the {{statName}}\nof all surrounding Pokémon!",
  "postSummonTabletsOfRuin": "{{pokemonNameWithAffix}}'s Tablets of Ruin lowered the {{statName}}\nof all surrounding Pokémon!",
  "postSummonBeadsOfRuin": "{{pokemonNameWithAffix}}'s Beads of Ruin lowered the {{statName}}\nof all surrounding Pokémon!",
} as const;
