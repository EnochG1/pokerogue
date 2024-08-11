import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "{{bossName}} 出现了。",
  "trainerAppeared": "{{trainerName}}\n想要和你对战！",
  "trainerAppearedDouble": "{{trainerName}}\n想要和你对战！",
  "trainerSendOut": "{{trainerName}}派出了\n{{pokemonName}}！",
  "singleWildAppeared": "一只野生的{{pokemonName}}出现了！",
  "multiWildAppeared": "野生的{{pokemonName1}}\n和{{pokemonName2}}出现了！",
  "playerComeBack": "回来吧，{{pokemonName}}！",
  "trainerComeBack": "{{trainerName}}收回了{{pokemonName}}！",
  "playerGo": "去吧！{{pokemonName}}！",
  "trainerGo": "{{trainerName}}派出了\n{{pokemonName}}！",
  "switchQuestion": "要更换\n{{pokemonName}}吗？",
  "trainerDefeated": "你击败了\n{{trainerName}}！",
  "moneyWon": "你赢得了\n₽{{moneyAmount}}！",
  "moneyPickedUp": "捡到了₽{{moneyAmount}}！",
  "pokemonCaught": "{{pokemonName}}被抓住了！",
  "addedAsAStarter": "增加了{{pokemonName}}作为\n一个新的基础宝可梦！",
  "partyFull": "你的队伍已满员。是否放生其他宝可梦\n为{{pokemonName}}腾出空间?",
  "pokemon": "宝可梦",
  "sendOutPokemon": "上吧！\n{{pokemonName}}！",
  "hitResultCriticalHit": "击中了要害！",
  "hitResultSuperEffective": "效果拔群！",
  "hitResultNotVeryEffective": "收效甚微…",
  "hitResultNoEffect": "对{{pokemonName}}没有效果！！",
  "hitResultOneHitKO": "一击必杀！",
  "attackFailed": "但是失败了！",
  "attackMissed": "没有命中{{pokemonNameWithAffix}}！",
  "attackHitsCount": "击中{{count}}次！",
  "rewardGain": "你获得了\n{{modifierName}}！",
  "expGain": "{{pokemonName}}获得了{{exp}} 点经验值！",
  "levelUp": "{{pokemonName}}升级到Lv.{{level}}！",
  "learnMove": "{{pokemonName}}学会了{{moveName}}！",
  "learnMovePrompt": "{{pokemonName}}想要学习{{moveName}}。",
  "learnMoveLimitReached": "但是，{{pokemonName}}已经学会了\n四个技能",
  "learnMoveReplaceQuestion": "要忘记一个技能并学习{{moveName}}吗？",
  "learnMoveStopTeaching": "不再尝试学习{{moveName}}？",
  "learnMoveNotLearned": "{{pokemonName}}没有学会{{moveName}}。",
  "learnMoveForgetQuestion": "要忘记哪个技能？",
  "learnMoveForgetSuccess": "{{pokemonName}}忘记了\n如何使用{{moveName}}。",
  "countdownPoof": "@d{32}1, @d{15}2 @d{15}… @d{15}… @d{15}@s{pb_bounce_1}空！",
  "learnMoveAnd": "然后……",
  "levelCapUp": "等级上限提升到{{levelCap}}！",
  "moveNotImplemented": "{{moveName}}尚未实装，无法选择。",
  "moveNoPP": "这个技能的PP用完了",
  "moveDisabled": "{{moveName}}被禁用！",
  "noPokeballForce": "一股无形的力量阻止了你使用精灵球。",
  "noPokeballTrainer": "你不能捕捉其他训练家的宝可梦！",
  "noPokeballMulti": "只能在剩下一只宝可梦时才能扔出精灵球！",
  "noPokeballStrong": "目标宝可梦太强了，无法捕捉！\n你需要先削弱它！",
  "noEscapeForce": "一股无形的力量阻止你逃跑。",
  "noEscapeTrainer": "你不能从与训练家的战斗中逃跑！",
  "noEscapePokemon": "{{pokemonName}}的{{moveName}}\n阻止了你{{escapeVerb}}！",
  "runAwaySuccess": "成功逃走了！",
  "runAwayCannotEscape": "无法逃走！",
  "escapeVerbSwitch": "切换",
  "escapeVerbFlee": "逃跑",
  "notDisabled": "{{moveName}}不再被禁用！",
  "turnEndHpRestore": "{{pokemonName}}的体力恢复了。",
  "hpIsFull": "{{pokemonName}}的体力已满！",
  "skipItemQuestion": "你确定要跳过拾取道具吗？",
  "eggHatching": "咦？",
  "stealEatBerry": "{{pokemonName}}夺取并吃掉了\n{{targetName}}的{{berryName}}！",
  "ppHealBerry": "{{pokemonNameWithAffix}}用{{berryName}}\n回复了{{moveName}}的PP！",
  "hpHealBerry": "{{pokemonNameWithAffix}}用{{berryName}}\n回复了体力！",
  "ivScannerUseQuestion": "对{{pokemonName}}使用个体值扫描仪？",
  "wildPokemonWithAffix": "野生的{{pokemonName}}",
  "foePokemonWithAffix": "对手的{{pokemonName}}",
  "useMove": "{{pokemonNameWithAffix}}使用了\n{{moveName}}！",
  "drainMessage": "{{pokemonName}}\n吸取了体力！",
  "regainHealth": "{{pokemonName}}\n回复了体力！",
  "fainted": "{{pokemonNameWithAffix}}\n倒下了！",
  "statsAnd": "和",
  "stats": "能力",
  "statRose_other": "{{pokemonNameWithAffix}}的{{stats}}提高了！",
  "statSharplyRose_other": "{{pokemonNameWithAffix}}的{{stats}}大幅提高了！",
  "statRoseDrastically_other": "{{pokemonNameWithAffix}}的{{stats}}极大幅提高了！",
  "statWontGoAnyHigher_other": "{{pokemonNameWithAffix}}的{{stats}}已经无法再提高了！",
  "statFell_other": "{{pokemonNameWithAffix}}的{{stats}}降低了！",
  "statHarshlyFell_other": "{{pokemonNameWithAffix}}的{{stats}}大幅降低了！",
  "statSeverelyFell_other": "{{pokemonNameWithAffix}}的{{stats}}极大幅降低了！",
  "statWontGoAnyLower_other": "{{pokemonNameWithAffix}}的{{stats}}已经无法再降低了！",
  "transformedIntoType": "{{pokemonName}}变成了\n{{type}}属性！",
  "ppReduced": "降低了{{targetName}}的\n{{moveName}}的PP{{reduction}}点！",
  "retryBattle": "你要从对战开始时重试么？",
  "unlockedSomething": "{{unlockedThing}}\n已解锁。",
  "congratulations": "恭喜！",
  "beatModeFirstTime": "{{speciesName}}首次击败了{{gameMode}}！\n你获得了{{newModifier}}！",
} as const;
