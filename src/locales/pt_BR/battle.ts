import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "{{bossName}} apareceu.",
  "trainerAppeared": "{{trainerName}}\nquer batalhar!",
  "trainerAppearedDouble": "{{trainerName}}\nquerem batalhar!",
  "singleWildAppeared": "Um {{pokemonName}} selvagem apareceu!",
  "trainerSendOut": "{{trainerName}} escolheu\n{{pokemonName}}!",
  "multiWildAppeared": "Um {{pokemonName1}} e um {{pokemonName2}} selvagens\napareceram!",
  "playerComeBack": "{{pokemonName}}, retorne!",
  "trainerComeBack": "{{trainerName}} retirou {{pokemonName}} da batalha!",
  "playerGo": "{{pokemonName}}, eu escolho você!",
  "trainerGo": "{{trainerName}} escolheu {{pokemonName}}!",
  "switchQuestion": "Quer trocar\nde {{pokemonName}}?",
  "trainerDefeated": "Você derrotou\n{{trainerName}}!",
  "moneyWon": "Você ganhou\n₽{{moneyAmount}} por ganhar!",
  "pokemonCaught": "{{pokemonName}} foi capturado!",
  "addedAsAStarter": "{{pokemonName}} foi adicionado\naos seus iniciais!",
  "partyFull": "Sua equipe está cheia.\nSolte um Pokémon para ter espaço para {{pokemonName}}?",
  "pokemon": "Pokémon",
  "sendOutPokemon": "{{pokemonName}}, eu escolho você!!",
  "hitResultCriticalHit": "Foi um acerto crítico!",
  "hitResultSuperEffective": "É supereficaz!",
  "hitResultNotVeryEffective": "É pouco eficaz...",
  "hitResultNoEffect": "Isso não afeta {{pokemonName}}!",
  "hitResultOneHitKO": "Foi um nocaute de um golpe!",
  "attackFailed": "Mas falhou!",
  "attackHitsCount": "Acertou {{count}} vezes.",
  "rewardGain": "Você recebeu\n{{modifierName}}!",
  "expGain": "{{pokemonName}} ganhou\n{{exp}} pontos de experiência.",
  "levelUp": "{{pokemonName}} subiu para \nNv. {{level}}!",
  "learnMove": "{{pokemonName}} aprendeu {{moveName}}!",
  "learnMovePrompt": "{{pokemonName}} quer aprender\n{{moveName}}.",
  "learnMoveLimitReached": "Porém, {{pokemonName}} já sabe\nquatro movimentos.",
  "learnMoveReplaceQuestion": "Quer substituir um de seus movimentos por {{moveName}}?",
  "learnMoveStopTeaching": "Você não quer aprender\n{{moveName}}?",
  "learnMoveNotLearned": "{{pokemonName}} não aprendeu {{moveName}}.",
  "learnMoveForgetQuestion": "Qual movimento quer esquecer?",
  "learnMoveForgetSuccess": "{{pokemonName}} esqueceu como usar {{moveName}}.",
  "countdownPoof": "@d{32}1, @d{15}2, @d{15}e@d{15}… @d{15}… @d{15}… @d{15}@s{pb_bounce_1}Puf!",
  "learnMoveAnd": "E…",
  "levelCapUp": "O nível máximo aumentou\npara {{levelCap}}!",
  "moveNotImplemented": "{{moveName}} ainda não foi implementado e não pode ser usado.",
  "moveNoPP": "Não há mais PP\npara esse movimento!",
  "moveDisabled": "Não se pode usar {{moveName}} porque foi desabilitado!",
  "noPokeballForce": "Uma força misteriosa\nte impede de usar Poké Bolas.",
  "noPokeballTrainer": "Não se pode capturar\nPokémon dos outros!",
  "noPokeballMulti": "Não se pode lançar Poké Bolas\nquando há mais de um Pokémon!",
  "noPokeballStrong": "Este Pokémon é forte demais para ser capturado!\nÉ preciso enfraquecê-lo primeiro!",
  "noEscapeForce": "Uma força misteriosa\nte impede de fugir.",
  "noEscapeTrainer": "Não se pode fugir de\nbatalhas contra treinadores!",
  "noEscapePokemon": "O movimento {{moveName}} de {{pokemonName}} te impede de fugir!",
  "runAwaySuccess": "Você fugiu com sucesso.",
  "runAwayCannotEscape": "Você nao conseguiu fugir!",
  "escapeVerbSwitch": "trocar",
  "escapeVerbFlee": "fugir",
  "notDisabled": "O movimento {{moveName}}\nnão está mais desabilitado!",
  "turnEndHpRestore": "Os PS de {{pokemonName}} foram restaurados!",
  "hpIsFull": "Os PS de {{pokemonName}}\njá estão cheios!",
  "skipItemQuestion": "Tem certeza de que não quer escolher um item?",
  "eggHatching": "Opa?",
  "ivScannerUseQuestion": "Quer usar o Scanner de IVs em {{pokemonName}}?",
  "wildPokemonWithAffix": "{{pokemonName}} selvagem",
  "foePokemonWithAffix": "{{pokemonName}} adversário",
  "useMove": "{{pokemonNameWithAffix}} usou {{moveName}}!",
  "drainMessage": "{{pokemonName}} teve sua\nenergia drenada!",
  "regainHealth": "{{pokemonName}} recuperou\npontos de saúde!",
  "stealEatBerry": "{{pokemonName}} stole and ate\n{{targetName}}'s {{berryName}}!",
  "fainted": "{{pokemonNameWithAffix}} desmaiou!",
  "statRose": "{{stats}} de {{pokemonNameWithAffix}} aumentou!",
  "statSharplyRose": "{{stats}} de {{pokemonNameWithAffix}} aumentou bruscamente!",
  "statRoseDrastically": "{{stats}} de {{pokemonNameWithAffix}} aumentou drasticamente!",
  "statWontGoAnyHigher": "{{stats}} de {{pokemonNameWithAffix}} não vai mais aumentar!",
  "statFell": "{{stats}} de {{pokemonNameWithAffix}} diminuiu!",
  "statHarshlyFell": "{{stats}} de {{pokemonNameWithAffix}} diminuiu duramente!",
  "statSeverelyFell": "{{stats}} de {{pokemonNameWithAffix}} diminuiu severamente!",
  "statWontGoAnyLower": "{{stats}} de {{pokemonNameWithAffix}} não vai mais diminuir!",
  "ppReduced": "O PP do movimento {{moveName}} de\n{{targetName}} foi reduzido em {{reduction}}!",
  "battlerTagsRechargingLapse": "{{pokemonNameWithAffix}} precisa\nrecarregar!",
  "battlerTagsTrappedOnAdd": "{{pokemonNameWithAffix}} não pode\nmais escapar!",
  "battlerTagsTrappedOnRemove": "{{pokemonNameWithAffix}} foi liberto\nde {{moveName}}!",
  "battlerTagsFlinchedLapse": "{{pokemonNameWithAffix}} hesitou!",
  "battlerTagsConfusedOnAdd": "{{pokemonNameWithAffix}} ficou\nconfuso!",
  "battlerTagsConfusedOnRemove": "{{pokemonNameWithAffix}} saiu\nde sua confusão!",
  "battlerTagsConfusedOnOverlap": "{{pokemonNameWithAffix}} já\nestá confuso!",
  "battlerTagsConfusedLapse": "{{pokemonNameWithAffix}} está\nconfuso!",
  "battlerTagsConfusedLapseHurtItself": "Se machucou em sua\nconfusão!",
  "battlerTagsDestinyBondLapseIsBoss": "{{pokemonNameWithAffix}} não é afetado\npelos efeitos de Destiny Bond.",
  "battlerTagsDestinyBondLapse": "{{pokemonNameWithAffix}} levou\n{{pokemonNameWithAffix2}} junto com ele!",
  "battlerTagsInfatuatedOnAdd": "{{pokemonNameWithAffix}} se apaixonou\npor {{sourcePokemonName}}!",
  "battlerTagsInfatuatedOnOverlap": "{{pokemonNameWithAffix}} já\nestá apaixonado!",
  "battlerTagsInfatuatedLapse": "{{pokemonNameWithAffix}} está apaixonado\npor {{sourcePokemonName}}!",
  "battlerTagsInfatuatedLapseImmobilize": "{{pokemonNameWithAffix}} está\nimobilizado pelo amor!",
  "battlerTagsInfatuatedOnRemove": "{{pokemonNameWithAffix}} superou\nsua paixão.",
  "battlerTagsSeededOnAdd": "{{pokemonNameWithAffix}} foi semeado!",
  "battlerTagsSeededLapse": "A saúde de {{pokemonNameWithAffix}}\nfoi sugada pelo Leech Seed!",
  "battlerTagsSeededLapseShed": "O Leech Seed de{{pokemonNameWithAffix}}\nsugou todo o gotejamento!",
  "battlerTagsNightmareOnAdd": "{{pokemonNameWithAffix}} começou\na ter um Nightmare!",
  "battlerTagsNightmareOnOverlap": "{{pokemonNameWithAffix}} já\nestá preso em um Nightmare!",
  "battlerTagsNightmareLapse": "{{pokemonNameWithAffix}} está preso\nem um Nightmare!",
  "battlerTagsEncoreOnAdd": "{{pokemonNameWithAffix}} ganhou\num Encore!",
  "battlerTagsEncoreOnRemove": "O Encore de {{pokemonNameWithAffix}}\nacabou!",
  "battlerTagsHelpingHandOnAdd": "{{pokemonNameWithAffix}} está pronto para\najudar {{pokemonName}}!",
  "battlerTagsIngrainLapse": "{{pokemonNameWithAffix}} absorveu\nnutrientes com suas raízes!",
  "battlerTagsIngrainOnTrap": "{{pokemonNameWithAffix}} plantou suas raízes!",
  "battlerTagsAquaRingOnAdd": "{{pokemonNameWithAffix}} se cercou\ncom um véu de água!",
  "battlerTagsAquaRingLapse": "{{moveName}} restaurou\nPS de {{pokemonName}}!",
  "battlerTagsDrowsyOnAdd": "{{pokemonNameWithAffix}} ficou com sono!",
  "battlerTagsDamagingTrapLapse": "{{pokemonNameWithAffix}} foi ferido\npelo {{moveName}}!",
  "battlerTagsBindOnTrap": "{{pokemonNameWithAffix}} foi espremido\npelo {{moveName}} de {{sourcePokemonName}}!",
  "battlerTagsWrapOnTrap": "{{pokemonNameWithAffix}} foi enrolado\npor {{sourcePokemonName}}!",
  "battlerTagsVortexOnTrap": "{{pokemonNameWithAffix}} ficou preso\nno vórtice!",
  "battlerTagsClampOnTrap": "{{sourcePokemonNameWithAffix}} prendeu\n{{pokemonName}}!",
  "battlerTagsSandTombOnTrap": "{{pokemonNameWithAffix}} foi preso\npor {{moveName}}!",
  "battlerTagsMagmaStormOnTrap": "{{pokemonNameWithAffix}} foi preso\npor um redemoinho de magma!",
  "battlerTagsSnapTrapOnTrap": "{{pokemonNameWithAffix}} foi preso\npor uma armadilha!",
  "battlerTagsThunderCageOnTrap": "{{sourcePokemonNameWithAffix}} prendeu\n{{pokemonNameWithAffix}}!",
  "battlerTagsInfestationOnTrap": "{{pokemonNameWithAffix}} foi ferido por \numa infestação de {{sourcePokemonNameWithAffix}}!",
  "battlerTagsProtectedOnAdd": "{{pokemonNameWithAffix}}\nse protegeu!",
  "battlerTagsProtectedLapse": "{{pokemonNameWithAffix}}\nse protegeu!",
  "battlerTagsEnduringOnAdd": "{{pokemonNameWithAffix}} está\npreparado!",
  "battlerTagsEnduringLapse": "{{pokemonNameWithAffix}} suportou\no golpe!",
  "battlerTagsSturdyLapse": "{{pokemonNameWithAffix}} suportou\no golpe!",
  "battlerTagsPerishSongLapse": "O tempo restante de {{pokemonNameWithAffix}} diminuiu para {{turnCount}}.",
  "battlerTagsTruantLapse": "{{pokemonNameWithAffix}} está\nviajando na maionese!",
  "battlerTagsSlowStartOnAdd": "{{pokemonNameWithAffix}} não\nestá preparado!",
  "battlerTagsSlowStartOnRemove": "{{pokemonNameWithAffix}} finalmente\nconseguiu se recompor!",
  "battlerTagsHighestStatBoostOnAdd": "O atributo de {{statName}} de\n{{pokemonNameWithAffix}} aumentou!",
  "battlerTagsHighestStatBoostOnRemove": "Os efeitos do {{abilityName}} de\n{{pokemonNameWithAffix}} acabaram!",
  "battlerTagsCritBoostOnAdd": "{{pokemonNameWithAffix}} está ficando\nbombado!",
  "battlerTagsCritBoostOnRemove": "{{pokemonNameWithAffix}} relaxou.",
  "battlerTagsSaltCuredOnAdd": "{{pokemonNameWithAffix}} está sendo curado com sal!",
  "battlerTagsSaltCuredLapse": "{{pokemonNameWithAffix}} foi ferido pelo {{moveName}}!",
  "battlerTagsCursedOnAdd": "{{pokemonNameWithAffix}} cortou seus PS pela metade e amaldiçoou {{pokemonName}}!",
  "battlerTagsCursedLapse": "{{pokemonNameWithAffix}} foi ferido pelo Curse!",
  "useQuickClaw": "{{pokemonName}} usou sua Garra Rápida para atacar primeiro!"
} as const;
