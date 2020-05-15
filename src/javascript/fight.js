export function fight(firstFighter, secondFighter) {
  let {health: healthFirst} = firstFighter;
  let {health: healthSecond} = secondFighter;

  while (true) {
    healthSecond -= getDamage(secondFighter, firstFighter);
    if (healthSecond <= 0) {
      return firstFighter;
    }
    healthFirst -= getDamage(firstFighter, secondFighter);
    if (healthFirst <= 0) {
      return secondFighter;
    }
  }
  // return winner
}

export function getDamage(attacker, enemy) {
  const hitPower = getHitPower(enemy);
  const blockPower = getBlockPower(attacker);
  const damage = hitPower - blockPower;
  return damage;
  // damage = hit - block
  // return damage 
}

export function getHitPower(fighter) {
  const {attack} = fighter
  const criticalHitChance = Math.random() + 1;
  const power = attack * criticalHitChance;
  return power;
  // return hit power
}

export function getBlockPower(fighter) {
  const {defense} = fighter;
  const dodgeChance = Math.random() + 1;
  const power = defense * dodgeChance;
  return power;
  // return block power
}
