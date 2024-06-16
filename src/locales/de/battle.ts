import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "{{bossName}} erscheint.",
  "trainerAppeared": "{{trainerName}}\nmöchte kämpfen!",
  "trainerAppearedDouble": "{{trainerName}}\nmöchten kämpfen!",
  "trainerSendOut": "{{trainerName}} setzt\n{{pokemonName}} ein!",
  "singleWildAppeared": "Ein wildes {{pokemonName}} erscheint!",
  "multiWildAppeared": "Ein wildes {{pokemonName1}}\nund {{pokemonName2}} erscheinen!",
  "playerComeBack": "Komm zurück, {{pokemonName}}!",
  "trainerComeBack": "{{trainerName}} ruft {{pokemonName}} zurück!",
  "playerGo": "Los! {{pokemonName}}!",
  "trainerGo": "{{trainerName}} sendet {{pokemonName}} raus!",
  "switchQuestion": "Möchtest du\n{{pokemonName}} auswechseln?",
  "trainerDefeated": "{{trainerName}}\nwurde besiegt!",
  "moneyWon": "Du gewinnst\n{{moneyAmount}} ₽!",
  "pokemonCaught": "{{pokemonName}} wurde gefangen!",
  "partyFull": "Dein Team ist voll.\nMöchtest du ein Pokémon durch {{pokemonName}} ersetzen?",
  "pokemon": "Pokémon",
  "sendOutPokemon": "Los, {{pokemonName}}!",
  "hitResultCriticalHit": "Ein Volltreffer!",
  "hitResultSuperEffective": "Das ist sehr effektiv!",
  "hitResultNotVeryEffective": "Das ist nicht sehr effektiv…",
  "hitResultNoEffect": "Es hat keine Wirkung auf {{pokemonName}}…",
  "hitResultOneHitKO": "Ein K.O.-Treffer!",
  "attackFailed": "Es ist fehlgeschlagen!",
  "attackHitsCount": "{{count}}-mal getroffen!",
  "expGain": "{{pokemonName}} erhält\n{{exp}} Erfahrungspunkte!",
  "levelUp": "{{pokemonName}} erreicht\nLv. {{level}}!",
  "learnMove": "{{pokemonName}} erlernt\n{{moveName}}!",
  "learnMovePrompt": "{{pokemonName}} versucht, {{moveName}} zu erlernen.",
  "learnMoveLimitReached": "Aber {{pokemonName}} kann nur\nmaximal vier Attacken erlernen.",
  "learnMoveReplaceQuestion": "Soll eine bekannte Attacke durch\n{{moveName}} ersetzt werden?",
  "learnMoveStopTeaching": "{{moveName}} nicht\nerlernen?",
  "learnMoveNotLearned": "{{pokemonName}} hat\n{{moveName}} nicht erlernt.",
  "learnMoveForgetQuestion": "Welche Attacke soll vergessen werden?",
  "learnMoveForgetSuccess": "{{pokemonName}} hat\n{{moveName}} vergessen.",
  "countdownPoof": "@d{32}Eins, @d{15}zwei @d{15}und@d{15}… @d{15}… @d{15}… @d{15}@s{pb_bounce_1}schwupp!",
  "learnMoveAnd": "Und…",
  "levelCapUp": "Das Levelbeschränkung\nwurde auf {{levelCap}} erhöht!",
  "moveNotImplemented": "{{moveName}} ist noch nicht implementiert und kann nicht ausgewählt werden.",
  "moveNoPP": "Es sind keine AP für\ndiese Attacke mehr übrig!",
  "moveDisabled": "{{moveName}} ist deaktiviert!",
  "noPokeballForce": "Eine unsichtbare Kraft\nverhindert die Nutzung von Pokébällen.",
  "noPokeballTrainer": "Du kannst das Pokémon\neines anderen Trainers nicht fangen!",
  "noPokeballMulti": "Du kannst erst einen Pokéball werfen,\nwenn nur noch ein Pokémon übrig ist!",
  "noPokeballStrong": "Das Ziel-Pokémon ist zu stark, um gefangen zu werden!\nDu musst es zuerst schwächen!",
  "noEscapeForce": "Eine unsichtbare Kraft\nverhindert die Flucht.",
  "noEscapeTrainer": "Du kannst nicht\naus einem Trainerkampf fliehen!",
  "noEscapePokemon": "{{pokemonName}}'s {{moveName}}\nverhindert {{escapeVerb}}!",
  "runAwaySuccess": "Du bist entkommen!",
  "runAwayCannotEscape": "Flucht gescheitert!",
  "escapeVerbSwitch": "auswechseln",
  "escapeVerbFlee": "flucht",
  "skipItemQuestion": "Bist du sicher, dass du kein Item nehmen willst?",
  "notDisabled": "{{pokemonName}}'s {{moveName}} ist\nnicht mehr deaktiviert!",
  "eggHatching": "Oh?",
  "ivScannerUseQuestion": "IV-Scanner auf {{pokemonName}} benutzen?",
  "wildPokemonWithAffix": "{{pokemonName}} (wild)",
  "foePokemonWithAffix": "{{pokemonName}} (Gegner)",
  "useMove": "{{pokemonNameWithAffix}} setzt {{moveName}} ein!",
  "drainMessage": "{{pokemonName}} wurde Energie abgesaugt",
  "regainHealth": "KP von {{pokemonName}} wurden wieder aufgefrischt!",
  "fainted": "{{pokemonNameWithAffix}} wurde besiegt!",
  "statRose": "rose",
  "statSharplyRose": "sharply rose",
  "statRoseDrastically": "rose drastically",
  "statWontGoAnyHigher": "won't go any higher",
  "statFell": "fell",
  "statHarshlyFell": "harshly fell",
  "statSeverelyFell": "severely fell",
  "statWontGoAnyLower": "won't go any lower",
  "battlerTagsRechargingLapse": "{{pokemonNameWithAffix}} must\nrecharge!",
  "battlerTagsTrappedOnAdd": "{{pokemonNameWithAffix}} can no\nlonger escape!",
  "battlerTagsTrappedOnRemove": "{{pokemonNameWithAffix}} was freed\nfrom {{moveName}}",
  "battlerTagsFlinchedLapse": "{{pokemonNameWithAffix}} flinched!",
  "battlerTagsConfusedOnAdd": "{{pokemonNameWithAffix}} became\nconfused!",
  "battlerTagsConfusedOnRemove": "{{pokemonNameWithAffix}} snapped\nout of confusion!",
  "battlerTagsConfusedOnOverlap": "{{pokemonNameWithAffix}} is\nalready confused!",
  "battlerTagsConfusedLapse": "{{pokemonNameWithAffix}} is\nconfused!",
  "battlerTagsConfusedLapseHurtItself": "It hurt itself in its\nconfusion!",
  "battlerTagsDestinyBondLapseIsBoss": "{{pokemonNameWithAffix}} is unaffected\nby the effects of Destiny Bond.",
  "battlerTagsDestinyBondLapse": "{{pokemonNameWithAffix}} took\n{{pokemonNameWithAffix2}} down with it!",
  "battlerTagsInfatuatedOnAdd": "{{pokemonNameWithAffix}} fell in love\nwith {{sourcePokemonName}}!",
  "battlerTagsInfatuatedOnOverlap": "{{pokemonNameWithAffix}} is\nalready in love!",
  "battlerTagsInfatuatedLapse": "{{pokemonNameWithAffix}} is in love\nwith {{sourcePokemonName}}!",
  "battlerTagsInfatuatedLapseImmobilize": "{{pokemonNameWithAffix}} is\nimmobilized by love!",
  "battlerTagsInfatuatedOnRemove": "{{pokemonNameWithAffix}} got over\nits infatuation.",
  "battlerTagsSeededOnAdd": "{{pokemonNameWithAffix}} was seeded!",
  "battlerTagsSeededLapse": "{{pokemonNameWithAffix}}'s health is\nsapped by Leech Seed!",
  "battlerTagsSeededLapseShed": "{{pokemonNameWithAffix}}'s Leech Seed\nsucked up the liquid ooze!",
  "battlerTagsNightmareOnAdd": "{{pokemonNameWithAffix}} began\nhaving a Nightmare!",
  "battlerTagsNightmareOnOverlap": "{{pokemonNameWithAffix}} is\nalready locked in a Nightmare!",
  "battlerTagsNightmareLapse": "{{pokemonNameWithAffix}} is locked\nin a Nightmare!",
  "battlerTagsEncoreOnAdd": "({{pokemonNameWithAffix}} got\nan Encore!",
  "battlerTagsEncoreOnRemove": "{{pokemonNameWithAffix}}'s Encore\nended!",
  "battlerTagsHelpingHandOnAdd": "{{pokemonNameWithAffix}} is ready to\nhelp {{pokemonName}}!",
  "battlerTagsIngrainLapse": "{{pokemonNameWithAffix}} absorbed\nnutrients with its roots!",
  "battlerTagsIngrainOnTrap": "{{pokemonNameWithAffix}} planted its roots!",
  "battlerTagsAquaRingOnAdd": "{{pokemonNameWithAffix}} surrounded\nitself with a veil of water!",
  "battlerTagsAquaRingLapse": "{{moveName}} restored\n{{pokemonName}}'s HP!",
  "battlerTagsDrowsyOnAdd": "{{pokemonNameWithAffix}} grew drowsy!",
  "battlerTagsDamagingTrapLapse": "{{pokemonNameWithAffix}} is hurt\nby {{moveName}}!",
  "battlerTagsBindOnTrap": "{{pokemonNameWithAffix}} was squeezed by\n{{sourcePokemonName}}'s {{moveName}}!",
  "battlerTagsWrapOnTrap": "{{pokemonNameWithAffix}} was Wrapped\nby {{sourcePokemonName}}!",
  "battlerTagsVortexOnTrap": "{{pokemonNameWithAffix}} was trapped\nin the vortex!",
  "battlerTagsClampOnTrap": "{{sourcePokemonNameWithAffix}} Clamped\n{{pokemonName}}!",
  "battlerTagsSandTombOnTrap": "{{pokemonNameWithAffix}} became trapped\nby {{moveName}}!",
  "battlerTagsMagmaStormOnTrap": "{{pokemonNameWithAffix}} became trapped\nby swirling magma!",
  "battlerTagsSnapTrapOnTrap": "{{pokemonNameWithAffix}} got trapped\nby a snap trap!",
  "battlerTagsThunderCageOnTrap": "{{sourcePokemonNameWithAffix}} trapped\n{{pokemonNameWithAffix}}!",
  "battlerTagsInfestationOnTrap": "{{pokemonNameWithAffix}} has been afflicted \nwith an infestation by {{sourcePokemonNameWithAffix}}!",
  "battlerTagsProtectedOnAdd": "{{pokemonNameWithAffix}}\nprotected itself!",
  "battlerTagsProtectedLapse": "{{pokemonNameWithAffix}}\nprotected itself!",
  "battlerTagsEnduringOnAdd": "{{pokemonNameWithAffix}} braced\nitself!",
  "battlerTagsEnduringLapse": "{{pokemonNameWithAffix}} endured\nthe hit!",
  "battlerTagsSturdyLapse": "{{pokemonNameWithAffix}} endured\nthe hit!",
  "battlerTagsPerishSongLapse": "{{pokemonNameWithAffix}}\'s perish count fell to {{turnCount}}.",
  "battlerTagsTruantLapse": "{{pokemonNameWithAffix}} is\nloafing around!",
  "battlerTagsSlowStartOnAdd": "{{pokemonNameWithAffix}} can't\nget it going!",
  "battlerTagsSlowStartOnRemove": "{{pokemonNameWithAffix}} finally\ngot its act together!",
  "battlerTagsHighestStatBoostOnAdd": "{{pokemonNameWithAffix}}'s {{statName}}\nwas heightened!",
  "battlerTagsHighestStatBoostOnRemove": "The effects of {{pokemonNameWithAffix}}'s\n{{abilityName}} wore off!",
  "battlerTagsCritBoostOnAdd": "{{pokemonNameWithAffix}} is getting\npumped!",
  "battlerTagsCritBoostOnRemove": "{{pokemonNameWithAffix}} relaxed.",
  "battlerTagsSaltCuredOnAdd": "{{pokemonNameWithAffix}} is being salt cured!",
  "battlerTagsSaltCuredLapse": "{{pokemonNameWithAffix}} is hurt by {{moveName}}!",
  "battlerTagsCursedOnAdd": "{{pokemonNameWithAffix}} cut its own HP and put a curse on the {{pokemonName}}!",
  "battlerTagsCursedLapse": "{{pokemonNameWithAffix}} is afflicted by the Curse!"
} as const;
