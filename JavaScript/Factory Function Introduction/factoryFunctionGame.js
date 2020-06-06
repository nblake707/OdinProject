const Player = (name, level) => {
    // private 
    let health = level * 2;
    //Both public - They are returned at the end of the factory function 
    const getLevel = () => level;
    const getName = () => name;
    // This is a private method and cannot be accessed outside of the factory function
    const die = () => {
        // player dies
    };

    // public 
    const damage = x => {
        health -= x;
        if (health <= 0){
            die();
        }
    };

    //public 
    const attack = enemy => {
        if(level < enemy.getLevel()) {
            damage(1);
            console.log(`${enemy.getName()} has damaged ${name}`);
        }
        if(level >= enemy.getLevel()) {
            enemy.damage(1);
            console.log(`${name} had damaged ${enemy.getName()}`);
        }
    };
        return {attack, damage, getLevel, getName}

};

const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);
jimmie.attack(badGuy);